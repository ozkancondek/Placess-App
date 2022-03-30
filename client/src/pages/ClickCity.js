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
  const navigate = useNavigate();
  const params = useParams();
  const [showComment, setShowComment] = useState(false);
  const [isAuthenticated, comments, setComments] = useState([]);
  const [filteredCity, setFilteredCity] = useState([]);
  const [commentText, setCommentText] = useState("");
  const { setFavList, favList } = useOut();
  const { addNewComment, fetchAllComments, getSingleCity } = useApi();
  const userName = localStorage.getItem("username");

  //get single  cities and assign it to filtered data
  const fetch = async () => {
    try {
      let res = await getSingleCity(params.cityid);

      setFilteredCity(res.CityDetails);
    } catch (error) {
      console.log(error);
    }
  };

  const commentsByName = async () => {
    try {
      //get comments
      let res = await fetchAllComments();
      //filter them
      setComments(
        res.allComments?.filter((c) => c.cityName === filteredCity.title)
      );
    } catch (error) {
      //  console.log(error);
    }
  };

  useEffect(() => {
    commentsByName();
    fetch();
  });

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
    //commentsByName();

    e.target.reset();
    setCommentText("");
    e.preventDefault();
  };

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
      {true && (
        <CommentContainer>
          {comments.length !== 0 ? (
            /* 
            comments.map((comment) => {
              return (
                <Comment>
                  <h4>
                    {<FaUserCircle />} {comment.userName} commented on{" "}
                    {comment.addDate.slice(0, 10)} about {comment.cityName}
                  </h4>
                  <p>{comment.comment} </p>
                </Comment>
              );
            }) */ <>ozkan</>
          ) : (
            <Comment>
              <p> There is no comment for this place... </p>
            </Comment>
          )}

          <Button
            variant="outline-secondary"
            style={{ marginTop: "10px" }}
            onClick={() => {
              navigate("/forum");
            }}
          >
            Go to Forum
          </Button>
          <form onSubmit={handleSubmit} className="form-group shadow-textarea">
            <br />
            <textarea
              className="form-control z-depth-1"
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
