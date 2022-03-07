import React, { useEffect, useState } from "react";
import CommentForm from "./CommentForm";
import Comments from "./Comments";
import { useResultContext } from "../context/ResultContenxt";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";

const PostDetails = () => {
  const [currentPost, setCurrentPost] = useState([]);
  const {
    addCreatedPost,
    allPost,
    setAllPost,
    post,
    setPost,
    getAllCreatedPost,
    getAllPostInRealTime,
  } = useResultContext();
  // const checkLocation = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location]);
  const { id } = useParams();
  useEffect(() => {
    const location = id;
    console.log(location);
    if (allPost) {
      const newPost = allPost.filter(({ id, post }) => id == location);
      console.log(newPost);
      setCurrentPost(newPost);
    }
  }, []);
  useEffect(() => {
    console.log(allPost);
  });
  return (
    <>
      {currentPost?.map(({ id, post }, index) => {
        const { image, text, title, category, date } = post;
        return (
          <div key={id}>
            <div className="postDetailsContainer">
              <div className="image">
                <img
                  src={
                    image
                      ? image
                      : "https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  }
                  alt={title ? title : "Profile picture"}
                />
              </div>

              <div className="postTitle">
                <h1>{title ? title : ""}</h1>
              </div>
              <div className="authorInfoAndDate">
                <div className="authorInfo">
                  <img
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Profile picture"
                  />
                  <span>Samir Khan</span>
                </div>
                <div className="date">
                  <span>
                    <i className="fa-regular fa-calendar-minus"></i>
                  </span>
                  <span>Oct, 10, 2021</span>
                </div>
              </div>

              <div className="postContent">
                <p>{text ? text : ""}</p>
              </div>
            </div>
            <Comments />
            <CommentForm id={id} />
          </div>
        );
      })}
    </>
  );
};

export default PostDetails;
