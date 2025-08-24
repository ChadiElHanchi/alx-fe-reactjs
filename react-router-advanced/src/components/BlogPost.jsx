import React from "react";
import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams(); // Get the dynamic ID from the URL

  return (
    <div>
      <h2>Blog Post</h2>
      <p>You are viewing blog post with ID: {id}</p>
    </div>
  );
};

export default BlogPost;
