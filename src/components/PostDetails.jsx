import React from "react";
import CommentForm from "./CommentForm";
import Comments from "./Comments";
const PostDetails = () => {
  return (
    <>
      <div className="postDetailsContainer">
        <div className="image">
          <img
            src="https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Profile picture"
          />
        </div>

        <div className="postTitle">
          <h1>Problems with Class in OOP</h1>
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
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            voluptatem voluptatum aspernatur quo adipisci amet quibusdam
            temporibus delectus cum aut architecto, sapiente, facilis
            necessitatibus magnam. Ex quia cumque explicabo voluptatibus? Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Excepturi, maxime
            rerum! Ea Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Debitis commodi quas expedita aperiam recusandae repellat iure.
            Dicta quaerat molestiae itaque ea. Iste ea ab blanditiis deleniti
            nesciunt dignissimos, molestias illo? Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Doloribus possimus voluptatibus
            repudiandae amet, reprehenderit tempora explicabo sequi est, unde
            reiciendis quidem rerum. Tenetur optio reprehenderit, nobis
            molestiae temporibus assumenda odio!
          </p>
        </div>
      </div>
      <Comments />
      <CommentForm />
    </>
  );
};

export default PostDetails;
