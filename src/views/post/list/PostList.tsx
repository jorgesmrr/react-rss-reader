import React from "react";
import PostCard from "../card/PostCard";
import { Post } from "../../../models/Post";

export interface PostListProps {
  posts: Array<Post>;
  onPostClick: (id: number) => void;
}

const PostList: React.FC<PostListProps> = ({ posts, onPostClick }) => {
  return (
    <div>
      {posts.map((post, index) => (
        <div className={index > 0 ? "mt-4" : ""}>
          <PostCard post={post} onClick={() => onPostClick(post.id)} />
        </div>
      ))}
    </div>
  );
};

export default PostList;
