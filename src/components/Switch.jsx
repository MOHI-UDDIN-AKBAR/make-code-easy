import React from "react";

import Header from "./Header";
import AllRecentPost from "./AllRecentPost";
import PostDetails from "./PostDetails";
import Footer from "./Footer";
import Error from "./Error";
import CreatePost from "./CreatePost";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const Switch = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<AllRecentPost />} />
          <Route exact path="/createPost" element={<CreatePost />} />
          <Route exact path="/postDetails/:id" element={<PostDetails />} />
          <Route exact path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default Switch;
