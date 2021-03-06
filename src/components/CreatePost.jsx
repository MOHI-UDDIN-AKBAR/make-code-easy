import React, { useEffect, useRef, useState } from "react";
import moment from "moment";
import { useResultContext } from "../context/ResultContenxt";
import { useLocation } from "react-router-dom";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from "../data/firebase";
// var moment = require("moment");
const CreatePost = () => {
  const {
    addCreatedPost,
    allPost,
    setAllPost,
    post,
    setPost,
    getAllCreatedPost,
  } = useResultContext();
  // const [allPost, setAllPost] = useState([]);
  const inputRef = useRef();
  const [progress, setProgress] = useState(100);
  const [postIsReady, setPostIsReady] = useState(false);
  // const [post, setPost] = useState({
  //   text: "",
  //   image: null,
  //   category: "",
  //   date: "",
  // });
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location]);
  const addPost = () => {
    const { text, image, category, date, title, name } = post;
    // console.log(moment(Number(date)));

    if (text && image && category && date && title && name) {
      setAllPost([...allPost, post]);
      console.log(post);
      addCreatedPost();
      setPost({
        name: "",
        title: "",
        text: "",
        image: "",
        category: category ? category : "web-developer",
        date: "",
      });
    }
    setPostIsReady(false);
  };
  const onFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // const storage = getStorage();
      setProgress(100);

      const storageRef = ref(storage, `/files/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const prog = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          console.log("Upload is " + prog + "% done");
          setProgress(100 - prog);
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            if (downloadURL) {
              // setProgress(100)
              console.log("File available at", downloadURL);
              setPost({
                ...post,
                image: downloadURL,
              });
              setTimeout(() => {
                setPostIsReady(true);
              }, 2000);
            }
          });
        }
      );
    }
  };

  useEffect(() => {
    // console.log(post);
    // console.log(allPost);
    // console.log(inputRef.current);
    const input = inputRef;
  }, [allPost]);
  useEffect(() => {
    getAllCreatedPost();
  }, []);
  useEffect(() => {
    console.log(progress);
  }, [progress]);

  return (
    <div className="createNewPost">
      <h1>Create New Post</h1>
      <div className="userName">
        <input
          type="text"
          placeholder="Username"
          value={post.name}
          onChange={(e) => setPost({ ...post, name: e.target.value })}
        />
      </div>
      <div className="title">
        <input
          type="text"
          placeholder=" Post Title..."
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
        />
      </div>
      <div className="textarea">
        <textarea
          placeholder="Type your post..."
          value={post.text}
          onChange={(e) =>
            setPost({
              ...post,
              text: e.target.value,
              date: moment().format("MMM Do YY"),
            })
          }
        />
      </div>
      <div className="imageAndCategory">
        <div className="image">
          <input
            type="file"
            ref={inputRef}
            onChange={
              onFileChange
              // (e) =>
              // setPost({
              //   ...post,
              //   image: URL.createObjectURL(e.target.files[0]),
              // })
              // setPost({
              //   ...post,
              //   image: URL.createObjectURL(e.target.files[0]),
              // })
            }
          />
        </div>

        <div className="category">
          <select
            onChange={(e) =>
              setPost({
                ...post,
                category: e.target.value,
              })
            }
          >
            <option value="web-developer">Web Developer</option>
            <option value="react-developer">React Developer</option>
            <option value="c_plus_plus_developer">C++ Developer</option>
          </select>
        </div>
      </div>
      {progress != 0 ? (
        <div className="progress">
          <progress className="showProgress" value={progress} max="100" min="0">
            {progress}
          </progress>
        </div>
      ) : (
        postIsReady && (
          <button
            onClick={() => {
              // const callAddPost = setInterval(
              //   () => {
              addPost();
              //     if (progress == 0) {
              //       clearInterval(this);
              //     }
              //   },
              //   progress ? progress : 5000
              // );
            }}
          >
            Add Post
          </button>
        )
      )}
    </div>
  );
};

export default CreatePost;
