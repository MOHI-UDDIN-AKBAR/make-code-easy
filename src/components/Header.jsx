import React, { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [text, setText] = useState("");
  return (
    <div className="header">
      <div className="logo">
        <Link to={`/`} style={{ textDecoration: "none", color: "white" }}>
          <h1>MAKE CODE EASY</h1>
        </Link>
      </div>
      <div className="inputSection">
        <input
          type="text"
          placeholder="Search Post ..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
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
        <span>Web developer</span>
        <span>React developer</span>
        <span>C++ developer</span>
      </div>
    </div>
  );
};

export default Header;
