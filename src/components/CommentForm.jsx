import React, { useState, useEffect } from "react";
import { useResultContext } from "../context/ResultContenxt";
const CommentForm = ({ id }) => {
  const {
    addCreatedPost,
    allPost,
    setAllPost,
    post,
    setPost,
    getAllCreatedPost,
    getAllPostInRealTime,
    comments,
    setComments,
    addCommentOnCurrentPost,
  } = useResultContext();
  // const [comments, setComments] = useState([]);
  const [comment, setComment] = useState({
    text: "",
    email: "",
  });

  const handleInput = () => {
    const newComment = { ...comment, id: id };
    setComments([...comments, newComment]);
    if (newComment) {
      addCommentOnCurrentPost(newComment);
    }
    setComment({ email: "", text: "" });
  };
  useEffect(() => {
    // console.log(comment);
    console.log(comments);
  }, [comments]);

  return (
    <div className="commentForm">
      <div className="textarea">
        <textarea
          placeholder="Leave your comment..."
          value={comment.text}
          onChange={(e) => setComment({ ...comment, text: e.target.value })}
        />
      </div>
      <div className="email">
        <input
          type="email"
          placeholder="xyz@email.com"
          value={comment.email}
          onChange={(e) => setComment({ ...comment, email: e.target.value })}
        />
      </div>
      <div className="submit">
        <button type="submit" onClick={handleInput}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default CommentForm;
