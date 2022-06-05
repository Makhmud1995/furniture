import React from "react";
import Content1 from "./components/home/content1";
import Content2 from "./components/home/content2";
import Content3 from "./components/home/content3";
import Navbar from "./components/home/navbar";

function App() {
  return (
    <div className="w-full flex-col ">
      <Navbar />
      <Content1 />
      <Content2 />
      <Content3 />
    </div>
  );
}

export default App;
