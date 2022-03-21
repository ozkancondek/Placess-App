import React from "react";
import { Pagination } from "../components/Pagination";
import { Cards } from "../components/Cards";

export const Cities = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Cards />
      <Pagination />
    </div>
  );
};
