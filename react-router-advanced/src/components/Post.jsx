import { useParams } from "react-router-dom";

const Post = () => {
  const { id } = useParams();
  return <h1>Dynamic Post Page - Post ID: {id}</h1>;
};

export default Post;
