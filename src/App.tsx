import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Post from "./pages/Post";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/post" element={<Post />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
