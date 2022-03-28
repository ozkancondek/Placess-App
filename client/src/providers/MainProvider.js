import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const OuterContext = createContext();

export const MainProvider = (props) => {
  //take it from localstorage
  const [isAuthenticated, setIsAutenticated] = useState(
    !!localStorage.getItem("auth_token")
  );

  const [pageNum, setPageNum] = useState(1);
  const [data, setData] = useState([]);

  const [favList, setFavList] = useState([]);

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
