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
  Comment,
  CommentContainer,
  DetailsBar,
  IconContainer,
  ImageContainer,
  TextContainer,
  TextPhotoContainer,
} from "../styles/ComponentsStyles";

export const ClickCity = () => {
  const { isAuthenticated, date } = useOut();
  const [comments, setComments] = useState([]);

  const [filteredCity, setFilteredCity] = useState([]);
  const [cityById, setCityById] = useState([]);

  //const[filteredCity,setFilteredCity] = useState()

  const params = useParams();
  const commentsById = async (id) => {
    try {
      //get comments
      let res = await axios("http://localhost:4000/api/cities/comments/" + id);

      setComments(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  //get city by id
  const getCityByIdFromBackend = async () => {
    try {
      let res = await axios(
        "http://localhost:4000/api/cities/" + parseInt(params.cityid)
      );
      setCityById(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  //get all cities and assign it to data
  const fetch = async () => {
    try {
      let res = await axios(
        "http://localhost:4000/api/cities/" + parseInt(params.cityid)
      );
      //setData(res);
      setFilteredCity(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    commentsById(filteredCity.id);
    fetch();
    getCityByIdFromBackend();
  }, []);

  //console.log(cityById);

  //post the comment
  const handleSubmit = (e) => {
    const postComment = async () => {
      let comment = {
        cityId: "2",
        comment: e.target.children[1].value,
        username: "anawdawdna", //define a state in mainProvider and set when user signed in- then call it here
      };

      try {
        //add comment to city
        let res = await axios.post(
          "http://localhost:4000/api/cities/comments",
          comment
        );
        let data = res.data;
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    postComment();
    e.target.children[1].value = "";

    e.preventDefault();
  };

  const navigate = useNavigate();
  const { setFavList, favList, showComment, setShowComment } = useOut();

  console.log(filteredCity);

  const changeColor = (e) => {
    e.stopPropagation();

    setFavList((prev) => {
      if (prev.includes(filteredCity.id)) {
        const filteredArray = prev.filter((favId) => favId !== filteredCity.id);
        localStorage.setItem("localData", JSON.stringify(filteredArray));
        return filteredArray;
      } else {
        localStorage.setItem(
          "localData",
          JSON.stringify([...prev, filteredCity.id])
        );
        return [...prev, filteredCity.id];
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

  const isFavorite = favList.includes(filteredCity.id);

  return (
    <div>
      <TextPhotoContainer>
        <ImageContainer img={filteredCity.image}></ImageContainer>
        <TextContainer>
          <h2>{filteredCity.title}</h2>
          <p>{filteredCity.desc}</p>
        </TextContainer>
      </TextPhotoContainer>
      <DetailsBar>
        <IconContainer>
          {" "}
          <AiFillLike
            size={30}
            onClick={changeColor}
            style={{
              color: isFavorite ? "#24a0ed " : "#212121",
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
                {<FaUserCircle />} {comment.username} commented on {date}
                {date.getMounth() + 1}
              </h4>
              <p>{comment.comment} </p>
            </Comment>;
          })}

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
    </div>
  );
};
