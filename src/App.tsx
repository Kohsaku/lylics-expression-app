import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Post from "./pages/Post";
import OverView from "./pages/OverView";
import Mypage from "./pages/Mypage";
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
          <Route path="/overview" element={<OverView />} />
          <Route path="/mypage" element={<Mypage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
