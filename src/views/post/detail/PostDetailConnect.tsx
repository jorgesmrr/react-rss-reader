import React from "react";
import { postById } from "../../../store/selectors";
import { useSelector } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import PostDetail from "./PostDetail";

type PostRouteParams = { feedId: string; postId: string };

const PostDetailConnect: React.FC<RouteComponentProps<PostRouteParams>> = ({
  match: { params },
}) => {
  const post = useSelector(
    postById(parseInt(params.feedId), parseInt(params.postId))
  );

  return post ? <PostDetail post={post} /> : null;
};

export default PostDetailConnect;
