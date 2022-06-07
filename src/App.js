import React from "react";
import Content1 from "./components/home/content1";
import Content2 from "./components/home/content2";
import Content3 from "./components/home/content3";
import Content4 from "./components/home/content4";
import Content5 from "./components/home/content5";
import Content6 from "./components/home/content6";
import Footer from "./components/home/footer";
import Navbar from "./components/home/navbar";

function App() {
  return (
    <div className="w-full flex-col ">
      <Navbar />
      <Content1 />
      <Content2 />
      <Content3 />
      <Content4 />
      <Content5 />
      <Content6 />
      <Footer />
    </div>
  );
}

export default App;
