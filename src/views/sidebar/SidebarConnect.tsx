import React, { useEffect } from "react";
import { RootState } from "../../store/rootReducer";
import { useSelector, useDispatch } from "react-redux";
import { refreshFeeds, setSelected } from "../../store/slices/feedsSlice";
import Sidebar from "./Sidebar";

const SidebarConnect: React.FC = () => {
  const dispatch = useDispatch();

  const feeds = useSelector((state: RootState) => state.feeds.feeds);
  const selectedId = useSelector((state: RootState) => state.feeds.selectedId);

  useEffect(() => {
    dispatch(refreshFeeds());
  }, [dispatch]);

  const onItemClick = (id: number) => {
    dispatch(setSelected({ id }));
  };

  return (
    <Sidebar selectedId={selectedId} feeds={feeds} onFeedClick={onItemClick} />
  );
};

export default SidebarConnect;
