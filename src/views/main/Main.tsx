import React from "react";
import { Feed } from "../../models/Feed";
import FeedDetail from "../feed/detail/FeedDetail";

export interface MainProps {
  currentFeed?: Feed;
}

const Main: React.FC<MainProps> = ({ currentFeed }) => {
  return currentFeed ? (
    <FeedDetail feed={currentFeed} />
  ) : (
    <div>Select a subscription to see its posts.</div>
  );
};

export default Main;
