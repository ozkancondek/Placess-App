import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { FaRegCommentDots, FaUserCircle } from "react-icons/fa";
import { GiWorld } from "react-icons/gi";
import { useApi } from "../providers/ApiProvider";
import "../styles/Pages.css";

export const Forum = () => {
  const { fetchAllComments } = useApi();
  const [comments, setComments] = useState([]);

  const getComments = async () => {
    try {
      let res = await fetchAllComments();

      setComments(res.data.allComments.reverse());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getComments();
  }, []);

  return (
    <div>
      {comments.length === 0 ? (
        <div className="main-container">
          <Spinner animation="border" />
        </div>
      ) : (
        comments.map((c, index) => {
          return (
            <div key={index} className="main-container">
              <div className="comment-card">
                <div className="header">
                  <h4>
                    {<FaUserCircle style={{ marginRight: "5px" }} />}
                    {c.userName} commented about {c.cityName}
                  </h4>
                  <h4> {c.addDate.slice(0, 10)}</h4>
                </div>
                <p>{c.comment}</p>
                <div className="icon-bar">
                  <AiOutlineLike className="icon" />
                  <AiOutlineDislike className="icon" />
                  <FaRegCommentDots className="icon" />
                  <GiWorld className="icon" />
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};
