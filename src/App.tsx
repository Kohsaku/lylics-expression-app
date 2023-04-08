import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, login, logout } from "./features/userSlice";
import { currentFeed, selectLylics } from "./features/lylicsSlice";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import Header from "./components/Header";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Post from "./pages/Post";
import OverView from "./pages/OverView";
import Mypage from "./pages/Mypage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  doc,
  getDocs,
  collection,
  query,
  orderBy,
  limit,
} from "firebase/firestore";
import { db } from "./firebase";

const App: React.FC = () => {
  const user = useSelector(selectUser);
  const lylics = useSelector(selectLylics);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photoUrl: authUser.photoURL,
            displayName: authUser.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return () => {
      unsub();
    };
  }, [dispatch]);

  // useEffect(() => {
  //   const q = query(
  //     collection(db, "lylics"),
  //     orderBy("createdAt", "desc"),
  //     limit(3)
  //   );

  //   const data = async () => {
  //     const querySnapshot = await getDocs(q);
  //     querySnapshot.forEach((doc) => {
  //       dispatch(
  //         currentFeed({
  //           uid: doc.data().uid,
  //           translater: doc.data().translater,
  //           date: doc.data().date,
  //           disclose: doc.data().disclose,
  //           process: doc.data().process,
  //           like: doc.data().like,
  //           song: doc.data().song,
  //           artist: doc.data().artist,
  //           japanese: doc.data().japanese,
  //           English: doc.data().English,
  //         })
  //       );
  //     });
  //   };
  //   return () => {
  //     data();
  //   };
  // });

  return (
    <>
      <BrowserRouter>
        <Header uid={user.uid} />
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
