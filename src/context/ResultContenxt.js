import React, { createContext, useContext, useState } from "react";
import { db } from "../data/firebase";
import { addDoc, collection } from "firebase/firestore";
const resultContext = createContext();
const ResultsContextProvider = ({ children }) => {
  const [allPost, setAllPost] = useState([]);
  const [post, setPost] = useState({
    // title: "",
    text: "",
    image: null,
    category: "",
    date: "",
  });
  const addCreatedPost = async () => {
    try {
      const { text, image, category, date } = post;
      if (text && image && category && date) {
        const { text, image, category, date } = post;
        console.log(allPost);
        const docRef = await addDoc(collection(db, "allPost"), {
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

  return (
    <resultContext.Provider
      value={{ addCreatedPost, allPost, setAllPost, post, setPost }}
    >
      {children}
    </resultContext.Provider>
  );
};

export default ResultsContextProvider;
export const useResultContext = () => useContext(resultContext);
