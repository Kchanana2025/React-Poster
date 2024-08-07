import { Link, useParams } from "react-router-dom";

import Modal from "./Modal.jsx";
import classes from "./PostDetails.module.css";
import { useEffect, useState } from "react";

function PostDetails() {
  const id = useParams().id;
  const [post, setPost] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:8080/posts/${id}`)
      .then((response) => response.json())
      .then((data) => {
        const responsePost = data.post;
        setPost(responsePost);
      });
  }, []);
  if (!post) {
    return (
      <Modal>
        <main className={classes.details}>
          <h1>Could not find post</h1>
          <p>Unfortunately, the requested post could not be found.</p>
          <p>
            <Link to=".." className={classes.btn}>
              Okay
            </Link>
          </p>
        </main>
      </Modal>
    );
  }
  return (
    <Modal>
      <main className={classes.details}>
        <p className={classes.author}>{post.author}</p>
        <p className={classes.text}>{post.body}</p>
      </main>
    </Modal>
  );
}

export default PostDetails;
