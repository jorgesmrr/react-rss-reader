import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SidebarConnect from "./sidebar/SidebarConnect";
import PostDetailConnect from "./post/detail/PostDetailConnect";
import FeedDetailConnect from "./feed/detail/FeedDetailConnect";
import Home from "./home/Home";

function App() {
  return (
    <div className="flex h-screen bg-neutral-1">
      <Router>
        <SidebarConnect />
        <div className="flex-grow overflow-y-auto">
          <div className="mx-auto" style={{ width: "700px" }}>
            <Route path="/" component={Home} exact />
            <Route path="/feeds/:feedId" component={FeedDetailConnect} exact />
            <Route
              path="/feeds/:feedId/posts/:postId"
              component={PostDetailConnect}
              exact
            />
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
