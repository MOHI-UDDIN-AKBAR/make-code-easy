import React, { useState, useEffect } from "react";
import { db } from "../data/firebase";
import { doc, onSnapshot, collection, query, where } from "firebase/firestore";
import { useParams } from "react-router-dom";
const Comments = () => {
  const [allCommentsFromCurrentPost, setAllCommentsFromCurrentPost] = useState(
    []
  );
  const { id } = useParams();
  useEffect(() => {
    const q = query(collection(db, "comments"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const allComments = [];
      querySnapshot.forEach((doc) => {
        allComments.push({ id: doc.id, post: doc.data() });
      });
      const currentLocation = id;
      // setAllPost(posts);
      if (allComments.length > 0) {
        const commentsForCurrentPost = allComments.filter(({ id, post }) => {
          return post.id == currentLocation;
        });
        // console.log(commentsForCurrentPost);
        setAllCommentsFromCurrentPost(commentsForCurrentPost);
      }
    });
  }, []);
  return (
    <>
      {/* {console.log(allCommentsFromCurrentPost)} */}
      {/* {
        allCommentsFromCurrentPost?.map(({id,post})=>{
          const {email,text}=post
          return(

          )
        })
      } */}
      <div className="commentsContainer">
        <h1
          style={{
            paddingLeft: "2rem",
          }}
        >
          Comments
        </h1>
        {allCommentsFromCurrentPost?.map(({ id, post }) => {
          const { email, text } = post;
          return (
            <div className="comment" key={id}>
              <span>{email}</span>
              <p>{text}</p>
            </div>
          );
        })}
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
    </>
  );
};

export default Comments;
