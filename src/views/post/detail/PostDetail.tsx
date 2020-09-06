import React from "react";
import DOMPurify from "dompurify";
import { Post } from "../../../models/Post";

export interface PostDetailProps {
  post: Post;
}

const PostDetail: React.FC<PostDetailProps> = ({ post }) => {
  const cleanContent = DOMPurify.sanitize(post.content);

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.author}</p>
      <p>{post.published_at}</p>
      <div dangerouslySetInnerHTML={{ __html: cleanContent }} />
    </div>
  );
};

export default PostDetail;
