import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useResultContext } from "../context/ResultContenxt";
import { db } from "../data/firebase";
import { doc, onSnapshot, collection, query, where } from "firebase/firestore";

const AllRecentPost = () => {
  const {
    addCreatedPost,
    allPost,
    setAllPost,
    post,
    setPost,
    getAllCreatedPost,
    getAllPostInRealTime,
  } = useResultContext();
  useEffect(() => {
    getAllCreatedPost();
  }, []);

  useEffect(() => {
    const q = query(collection(db, "allPost"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const posts = [];
      querySnapshot.forEach((doc) => {
        posts.push({ id: doc.id, post: doc.data() });
      });
      setAllPost(posts);
      console.log(allPost);
    });
  }, []);

  return (
    <>
      {allPost?.map((recentPost) => {
        const { id, post } = recentPost;
        const { title, image, text, date, category } = post;
        return (
          <div className="recentPostContainer" key={id}>
            <div className="image">
              <img
                src={
                  image
                    ? image
                    : "https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                }
                alt={title ? title : "web-development"}
              />
            </div>
            <div className="specialImage">
              <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Profile picture"
              />
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
            <div className="postTitle">
              <Link
                to={`/postDetails/${id}`}
                style={{ textDecoration: "none" }}
              >
                <h2>{title ? title : "web-development"}</h2>
              </Link>
            </div>
            <div className="postContent">
              <p>{text}</p>
            </div>
            <div className="linkToFullPost">
              <Link
                to={`/postDetails/${id}`}
                style={{ textDecoration: "none" }}
              >
                <button type="button">Continue Reading</button>
              </Link>
            </div>
          </div>
        );
      })}

      {/* //another one */}
      <div className="recentPostContainer">
        <div className="image">
          <img
            src="https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Profile picture"
          />
        </div>
        <div className="specialImage">
          <img
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Profile picture"
          />
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
        <div className="postTitle">
          <Link to={`/postDetails/${1}`} style={{ textDecoration: "none" }}>
            <h2>Problems with Class in OOP</h2>
          </Link>
        </div>
        <div className="postContent">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            voluptatem voluptatum aspernatur quo adipisci amet quibusdam
            temporibus delectus cum aut architecto, sapiente, facilis
            necessitatibus magnam. Ex quia cumque explicabo voluptatibus? Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Excepturi, maxime
            rerum! Ea
          </p>
        </div>
        <div className="linkToFullPost">
          <Link to={`/postDetails/${1}`} style={{ textDecoration: "none" }}>
            <button type="button">Continue Reading</button>
          </Link>
        </div>
      </div>
      <div className="recentPostContainer">
        <div className="image">
          <img
            src="https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Profile picture"
          />
        </div>
        <div className="specialImage">
          <img
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Profile picture"
          />
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
        <div className="postTitle">
          <Link to={`/postDetails/${1}`} style={{ textDecoration: "none" }}>
            <h2>Problems with Class in OOP</h2>
          </Link>
        </div>
        <div className="postContent">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            voluptatem voluptatum aspernatur quo adipisci amet quibusdam
            temporibus delectus cum aut architecto, sapiente, facilis
            necessitatibus magnam. Ex quia cumque explicabo voluptatibus? Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Excepturi, maxime
            rerum! Ea
          </p>
        </div>
        <div className="linkToFullPost">
          <Link to={`/postDetails/${1}`} style={{ textDecoration: "none" }}>
            <button type="button">Continue Reading</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default AllRecentPost;
