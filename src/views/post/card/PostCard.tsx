import React from "react";
import { Post } from "../../../models/Post";

export interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <div className="card">
      <div className="card-block flex items-center">
        <div className="flex-none bg-neutral-2 rounded mr-4 w-32 h-32"></div>
        <div>
          <div className="text-3xl font-bold">{post.title}</div>
          <div className="text-neutral-7">{post.content}</div>
          <div className="flex items-center mt-4">
            <div className="text-neutral-8 font-bold">{post.author}</div>
            <div className="ml-auto" />
            <div className="text-neutral-6">
              {post.published_at.toLocaleDateString()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
