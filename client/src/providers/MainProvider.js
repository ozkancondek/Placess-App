import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const OuterContext = createContext();

export const MainProvider = (props) => {
  //take it from localstorage
  const [isAuthenticated, setIsAutenticated] = useState(
    !!localStorage.getItem("auth_token")
  );

  const [showComment, setShowComment] = useState(false);
  const [pageNum, setPageNum] = useState(1);
  const [data, setData] = useState([]);

  const [favList, setFavList] = useState([]);
  var today = new Date();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

  const localData = () => {
    const response = localStorage.getItem("localData");

    if (!response) {
      return;
    }
    setFavList(JSON.parse(response));
  };

  useEffect(() => {
    localData();
  }, []);

  return (
    <OuterContext.Provider
      value={{
        isAuthenticated,
        setIsAutenticated,
        data,
        favList,
        setFavList,
        localData,
        setPageNum,
        pageNum,
        setShowComment,
        showComment,
        date,
      }}
    >
      {props.children}
    </OuterContext.Provider>
  );
};

export const useOut = () => {
  const myOutData = useContext(OuterContext);
  if (!myOutData) {
    throw new Error("useOut need to used in MainProvider");
  }
  return myOutData;
};
