import React, { Component } from "react";

import './App.css';

import Workspace from "./Workspace";
import Toolbox from "./Toolbox";
import TrayInformation from "./TrayInformation";


function App() {
  return (
    <div className="bg-sky-500 w-screen h-lvh flex items-center">
      <Workspace/>
      <Toolbox/>
      <TrayInformation/>
    </div>
  );
}

export default App;
