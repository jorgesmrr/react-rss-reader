import React from "react";
import { Post } from "../../../models/Post";

export interface PostCardProps {
  post: Post;
  onClick: () => void;
}

const PostCard: React.FC<PostCardProps> = ({ post, onClick }) => {
  return (
    <div className="card" onClick={() => onClick()}>
      <div className="card-block flex items-center">
        <div className="flex-none bg-neutral-2 rounded mr-4 w-32 h-32"></div>
        <div className="flex-grow">
          <h2 className="mt-0">{post.title}</h2>
          <div className="text-neutral-7">{post.description}</div>
          <div className="flex items-center mt-4">
            <div className="text-neutral-8 font-bold">{post.author}</div>
            <div className="ml-auto" />
            {post.published_at && (
              <div className="text-neutral-6">
                {post.published_at.toLocaleDateString()}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
