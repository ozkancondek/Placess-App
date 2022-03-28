import React, { useEffect, useState } from "react";
import { AiFillLike } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaCommentAlt, FaMapSigns, FaUserCircle } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";

import { useNavigate, useParams } from "react-router-dom";

import { useOut } from "../providers/MainProvider";

import "../styles/Pages.css";
import { Button } from "react-bootstrap";
import axios from "axios";
import { useApi } from "../providers/ApiProvider";
import {
  ClickCityContainer,
  Comment,
  CommentContainer,
  DetailsBar,
  IconContainer,
  ImageContainer,
  TextContainer,
  TextPhotoContainer,
} from "../styles/ComponentsStyles";

export const ClickCity = () => {
  const [showComment, setShowComment] = useState(false);
  const { isAuthenticated, date } = useOut();
  const [comments, setComments] = useState([]);
  const navigate = useNavigate();
  const { setFavList, favList, userName } = useOut();
  console.log(userName);
  const [filteredCity, setFilteredCity] = useState([]);
  const { getSingleCity } = useApi();
  const { addNewComment } = useApi();
  const [commentText, setCommentText] = useState("");

  const params = useParams();

  /*   const commentsById = async (id) => {
    try {
      //get comments
      let res = await axios("http://localhost:4000/api/cities/comments/" + id);

      setComments(res.data);
    } catch (error) {
      console.log(error);
    }
  }; */

  //get single  cities and assign it to filtered data
  const fetch = async () => {
    try {
      //setData(res);
      let res = await getSingleCity(params.cityid);

      setFilteredCity(res.CityDetails);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // commentsById(filteredCity.id);
    fetch();
  }, []);

  //post the comment
  const handleSubmit = (e) => {
    const postComment = async () => {
      let commentData = {
        comment: commentText,
        userName: userName,
        cityName: filteredCity.title,
      };

      try {
        let res = await addNewComment(commentData);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    postComment();

    e.target.reset();
    setCommentText("");
    e.preventDefault();
  };
  //is auth ise rengi degistirebilsin

  const changeColor = (e) => {
    e.stopPropagation();

    setFavList((prev) => {
      if (prev.includes(filteredCity._id)) {
        const filteredArray = prev.filter(
          (favId) => favId !== filteredCity._id
        );
        localStorage.setItem("localData", JSON.stringify(filteredArray));
        return filteredArray;
      } else {
        localStorage.setItem(
          "localData",
          JSON.stringify([...prev, filteredCity._id])
        );
        return [...prev, filteredCity._id];
      }
    });
  };

  const commentFunc = () => {
    if (showComment) {
      setShowComment(false);
    } else {
      setShowComment(true);
    }
  };

  const isFavorite = favList.includes(filteredCity._id);

  return (
    <ClickCityContainer>
      <TextPhotoContainer>
        <ImageContainer img={filteredCity.image}></ImageContainer>
        <TextContainer>
          <h2>{filteredCity.title}</h2>
          <p>{filteredCity.description}</p>
        </TextContainer>
      </TextPhotoContainer>
      <DetailsBar>
        <IconContainer>
          {" "}
          <AiFillLike
            size={30}
            onClick={changeColor}
            style={{
              color: isFavorite && isAuthenticated ? "#24a0ed " : "#212121",
              width: "80px",
              cursor: "pointer",
            }}
          />
        </IconContainer>
        {isAuthenticated && (
          <IconContainer>
            <FaCommentAlt
              size={25}
              style={{ cursor: "pointer" }}
              onClick={() => commentFunc()}
            />
          </IconContainer>
        )}

        <IconContainer>
          <a href="https://www.google.com/maps">
            <FaMapSigns size={30} />
          </a>
        </IconContainer>
        <IconContainer>
          <IoLogoWhatsapp size={30} style={{ cursor: "pointer" }} />
        </IconContainer>
        <IconContainer>
          <BsFacebook size={30} style={{ cursor: "pointer" }} />
        </IconContainer>

        <IconContainer>
          <RiInstagramFill size={30} style={{ cursor: "pointer" }} />
        </IconContainer>
      </DetailsBar>
      {showComment && (
        <CommentContainer>
          {comments.map((comment) => {
            <Comment>
              <h4>
                {" "}
                {<FaUserCircle />} {comment.username} commented on{" "}
                {comment.date}
              </h4>
              <p>{comment.comment} </p>
            </Comment>;
          })}

          <Comment>
            <h4> {<FaUserCircle />} Anna commented on 12 december</h4>
            <p>omg... its the best city of my life. thanks newyork </p>
          </Comment>
          <Comment>
            <h4> {<FaUserCircle />} Anna commented on 12 december</h4>
            <p>omg... its the best city of my life. thanks newyork </p>
          </Comment>
          <Button
            variant="outline-secondary"
            style={{ marginTop: "10px" }}
            onClick={() => {
              navigate("/forum");
            }}
          >
            Go to Forum
          </Button>
          <form onSubmit={handleSubmit} class="form-group shadow-textarea">
            <label for="addComment"></label>
            <textarea
              class="form-control z-depth-1"
              id="addComment"
              rows="3"
              placeholder="Leave your comment"
              onChange={(e) => {
                setCommentText(e.target.value);
              }}
            ></textarea>
            <Button
              type="submit"
              variant="outline-primary"
              style={{ marginLeft: "50%", marginTop: "10px" }}
            >
              Send
            </Button>
          </form>
        </CommentContainer>
      )}
    </ClickCityContainer>
  );
};
