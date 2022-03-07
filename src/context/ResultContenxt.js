import React, { createContext, useContext, useState } from "react";
import { db } from "../data/firebase";
import { addDoc, collection, getDocs, doc, setDoc } from "firebase/firestore";

const resultContext = createContext();
const ResultsContextProvider = ({ children }) => {
  const [allPost, setAllPost] = useState([]);
  const [post, setPost] = useState({
    title: "",
    text: "",
    image: null,
    category: "",
    date: "",
  });
  const [comments, setComments] = useState([]);
  const addCreatedPost = async () => {
    try {
      const { text, image, category, date, title } = post;
      if (text && image && category && date && title) {
        const { text, image, category, date, title } = post;
        console.log(allPost);
        const docRef = await addDoc(collection(db, "allPost"), {
          title: title,
          text: text,
          image: image,
          category: category,
          date: date,
        });

        console.log("Document written with ID: ", docRef.id);
      }
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  const addCommentOnCurrentPost = async (comment) => {
    const { text, id, email } = comment;
    const collectionId = new Date().getTime().toString();
    await setDoc(doc(db, "comments", collectionId), {
      id: id,
      text: text,
      email: email,
    });
    // try {
    //   const docRef = await addDoc(collection(db, "comments"), {});
    //   console.log("Document written with ID: ", docRef.id);
    // } catch (e) {
    //   console.error("Error adding document: ", e);
    // }
  };
  const getAllCreatedPost = async () => {
    const querySnapshot = await getDocs(collection(db, "allPost"));
    const posts = [];
    setAllPost(querySnapshot.forEach((doc) => doc.data()));
    querySnapshot.forEach((doc) => {
      posts.push({ id: doc.id, post: doc.data() });
      // setAllPost([...posts, { id: doc.id, post: doc.data() }]);
      // console.log(`${doc.id} => ${doc.data().title}`);
    });
    if (posts) {
      setAllPost(posts);
      // console.log(posts);
    }
  };
  return (
    <resultContext.Provider
      value={{
        addCreatedPost,
        allPost,
        setAllPost,
        post,
        setPost,
        getAllCreatedPost,
        comments,
        setComments,
        addCommentOnCurrentPost,
      }}
    >
      {children}
    </resultContext.Provider>
  );
};

export default ResultsContextProvider;
export const useResultContext = () => useContext(resultContext);
