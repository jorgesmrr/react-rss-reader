import React from "react";
import { RootState } from "../../store/rootReducer";
import { useSelector } from "react-redux";
import Main from "./Main";

const MainConnect: React.FC = () => {
  const feed = useSelector((state: RootState) =>
    state.feeds.feeds.find((f) => f.id === state.feeds.selectedId)
  );

  return <Main currentFeed={feed} />;
};

export default MainConnect;
