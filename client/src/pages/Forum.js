import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { FaRegCommentDots, FaUserCircle } from "react-icons/fa";
import { GiWorld } from "react-icons/gi";
import { useApi } from "../providers/ApiProvider";
import { useOut } from "../providers/MainProvider";

import "../styles/Pages.css";
export const Forum = () => {
  const [comments, setComments] = useState([]);
  const [places, setPlaces] = useState([]);
  const { getPost } = useApi();
  const { date } = useOut();

  useEffect(() => {
    const getAllCommentsFromBackend = async (id) => {
      try {
        let res = await axios("http://localhost:4000/api/city/comments");

        setComments(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    const fetch = async () => {
      try {
        let res = await getPost();
        setPlaces(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
    getAllCommentsFromBackend();
  }, []);

  console.log(comments);

  return (
    <div>
      {comments.map((com) => {
        return (
          <div className="main-container">
            <div className="comment-card">
              <div className="header">
                <h4>
                  {<FaUserCircle />}
                  {com.username} commented about{" "}
                  {places.find((c) => c.id === com.cityid)}
                </h4>
                <h4> {date}</h4>
              </div>
              <p>{com.comment}</p>
              <div className="icon-bar">
                <AiOutlineLike className="icon" />
                <AiOutlineDislike className="icon" />
                <FaRegCommentDots className="icon" />
                <GiWorld className="icon" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
