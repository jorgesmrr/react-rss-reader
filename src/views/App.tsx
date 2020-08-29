import React from "react";
import SidebarConnect from "./sidebar/SidebarConnect";
import MainConnect from "./main/MainConnect";

function App() {
  return (
    <div className="flex h-screen bg-neutral-1">
      <SidebarConnect />
      <div className="flex-grow overflow-y-auto">
        <div className="mx-auto" style={{ width: "700px" }}>
          <MainConnect />
        </div>
      </div>
    </div>
  );
}

export default App;
