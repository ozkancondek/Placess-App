import React, { useEffect, useState } from "react";
import { useApi } from "../providers/ApiProvider";
import { useOut } from "../providers/MainProvider";
import { PaginationBar } from "../styles/ComponentsStyles";

export const Pagination = () => {
  const { setPageNum } = useOut();
  const { getAllCities } = useApi();
  const [lenData, setLenData] = useState(0);
  let cardNumberInPage = 20;
  //show page number according to data length
  let items = [];
  for (let i = 1; i <= Math.ceil(lenData / cardNumberInPage); i++) {
    items = [...items, i];
  }
  const fetch = async () => {
    try {
      let res = await getAllCities();
      setLenData(res.cityList.length);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetch();
  });
  return (
    <div>
      <PaginationBar>
        <p onClick={() => setPageNum(items[0])}>&laquo;</p>
        {items.map((num, index) => {
          return (
            <p
              key={index}
              onClick={() => {
                window.scrollTo(0, 0);
                setPageNum(num);
              }}
            >
              {num}
            </p>
          );
        })}

        <p onClick={() => setPageNum(items.length)}>&raquo;</p>
      </PaginationBar>
    </div>
  );
};
