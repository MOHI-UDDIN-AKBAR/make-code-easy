import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useResultContext } from "../context/ResultContenxt";
import { useLocation } from "react-router-dom";
const Header = () => {
  // const [text, setText] = useState("");
  const {
    addCreatedPost,
    allPost,
    setAllPost,
    post,
    setPost,
    getAllCreatedPost,
    getAllPostInRealTime,
    searchText,
    setSearchText,
    postGetBySearch,
    setPostGetBySearch,
    getAllPostGetBySearch,
    postFromCategory,
    setPostFromCategory,
  } = useResultContext();
  useEffect(() => {
    // const allRelatedPostToSearch = allPost.filter(
    //   ({ id, post: { title, category } }) => {
    //     return title.includes(text) || category.includes(text);
    //   }
    // );
    // console.log(allRelatedPostToSearch);
    getAllPostGetBySearch();
    // console.log(searchText);
    // console.log(postGetBySearch)
    console.log(postGetBySearch);
  }, [searchText]);
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location]);
  const getPostFromCategory = (category) => {
    const postFromCurrentCategory = allPost.filter(({ id, post }) => {
      return post.category == category;
    });
    if (postFromCurrentCategory.length > 0) {
      console.log(postFromCurrentCategory);
      setPostFromCategory(postFromCurrentCategory);
    }
  };
  const makeChangeForHome = () => {
    setPostFromCategory([]);
  };
  useEffect(() => {
    getPostFromCategory();
  }, [postFromCategory]);
  return (
    <div className="header">
      <div className="logo">
        <Link to={`/`} style={{ textDecoration: "none", color: "white" }}>
          <h1 onClick={makeChangeForHome}>MAKE CODE EASY</h1>
          {/* <h1>MAKE CODE EASY</h1> */}
        </Link>
      </div>
      <div className="inputSection">
        <Link to={`/`} style={{ textDecoration: "none", color: "white" }}>
          <input
            type="text"
            placeholder="Search Post ..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </Link>
      </div>
      <div className="createPost">
        <Link
          to={`/createPost`}
          style={{ textDecoration: "none", color: "white" }}
        >
          <button type="button">Create New Post</button>
        </Link>
      </div>
      <div className="category">
        {/* <Link to={`/`} style={{ textDecoration: "none", color: "white" }}>
          <span onClick={() => getPostFromCategory("web-developer")}>
            Web developer
          </span>
        </Link> */}
        <NavLink
          to={"/"}
          className="navLink"
          style={{ textDecoration: "none", color: "white" }}
        >
          <span onClick={() => getPostFromCategory("web-developer")}>
            Web developer
          </span>
        </NavLink>
        <NavLink
          to={"/"}
          className="navLink"
          style={{ textDecoration: "none", color: "white" }}
        >
          <span onClick={() => getPostFromCategory("react-developer")}>
            React developer
          </span>
        </NavLink>
        <NavLink
          to={"/"}
          className="navLink"
          style={{ textDecoration: "none", color: "white" }}
        >
          <span onClick={() => getPostFromCategory("c_plus_plus_developer")}>
            C++ developer
          </span>
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
