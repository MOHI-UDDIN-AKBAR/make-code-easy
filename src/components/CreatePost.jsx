import React, { useEffect, useRef, useState } from "react";

const CreatePost = () => {
  const [allPost, setAllPost] = useState([]);
  const inputRef = useRef();
  const [post, setPost] = useState({
    text: "",
    image: null,
    category: "",
    date: "",
  });

  const addPost = () => {
    const { text, image, category, date } = post;
    setPost({ ...post, date: new Date().getTime().toString() });
    console.log(post);
    if (text && image && category && date) {
      setAllPost([...allPost, post]);
      setPost({
        text: "",
        image: "",
        category: "react-developer",
        date: "",
      });
    }
  };
  useEffect(() => {
    // console.log(post);
    console.log(allPost);
    console.log(inputRef.current);
    const input = inputRef;
  }, [allPost]);

  return (
    <div className="createNewPost">
      <h1>Create New Post</h1>
      <div className="textarea">
        <textarea
          placeholder="Type your post..."
          value={post.text}
          onChange={(e) => setPost({ ...post, text: e.target.value })}
        />
      </div>
      <div className="imageAndCategory">
        <div className="image">
          <input
            type="file"
            ref={inputRef}
            onChange={(e) =>
              setPost({
                ...post,
                image: URL.createObjectURL(e.target.files[0]),
              })
            }
          />
        </div>

        <div className="category">
          <select
            onChange={(e) => setPost({ ...post, category: e.target.value })}
          >
            <option value="web-developer">Web Developer</option>
            <option value="react-developer">React Developer</option>
            <option value="c_plus_plus_developer">C++ Developer</option>
          </select>
        </div>
      </div>

      <button type="button" onClick={addPost}>
        Add Post
      </button>
    </div>
  );
};

export default CreatePost;
