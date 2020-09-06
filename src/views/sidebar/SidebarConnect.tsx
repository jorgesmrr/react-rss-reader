import React, { useEffect } from "react";
import { RootState } from "../../store/rootReducer";
import { useSelector, useDispatch } from "react-redux";
import { refreshFeeds } from "../../store/slices/feedsSlice";
import Sidebar from "./Sidebar";
import { useHistory } from "react-router-dom";

const SidebarConnect: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const feeds = useSelector((state: RootState) => state.feeds.feeds);
  const selectedId = useSelector((state: RootState) => state.feeds.selectedId);

  useEffect(() => {
    dispatch(refreshFeeds());
  }, [dispatch]);

  const onFeedClick = (id: number) => {
    history.push(`/feeds/${id}`);
  };

  return (
    <Sidebar selectedId={selectedId} feeds={feeds} onFeedClick={onFeedClick} />
  );
};

export default SidebarConnect;
