import React from "react";

const Comments = () => {
  return (
    <div className="commentsContainer">
      <h1
        style={{
          paddingLeft: "2rem",
        }}
      >
        Comments
      </h1>

      <div className="comment">
        <span>xyz@gmail.com</span>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci,
          aliquid? Adipisci ea ipsam cumque quibusdam exercitationem fugiat
          culpa provident mollitia.
        </p>
      </div>
      <div className="comment">
        <span>xyz@gmail.com</span>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci,
          aliquid? Adipisci ea ipsam cumque quibusdam exercitationem fugiat
          culpa provident mollitia.
        </p>
      </div>
    </div>
  );
};

export default Comments;
