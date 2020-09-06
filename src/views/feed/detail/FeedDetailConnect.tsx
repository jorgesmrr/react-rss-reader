import React from "react";
import { useSelector } from "react-redux";
import FeedDetail from "./FeedDetail";
import { feedById } from "../../../store/selectors";
import { RouteComponentProps, useHistory } from "react-router-dom";

type FeedRouteParams = { feedId: string };

const FeedDetailConnect: React.FC<RouteComponentProps<FeedRouteParams>> = ({
  match: { params },
}) => {
  const history = useHistory();

  const feed = useSelector(feedById(parseInt(params.feedId)));

  const onPostClick = (id: number) => {
    history.push(`/feeds/${params.feedId}/posts/${id}`);
  };

  return feed ? <FeedDetail feed={feed} onPostClick={onPostClick} /> : null;
};

export default FeedDetailConnect;
