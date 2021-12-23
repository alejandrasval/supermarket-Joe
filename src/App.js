import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import { useDispatch } from "react-redux";
import { auth } from "./firebase/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { setUser } from "./redux/actions";
import "./App.css";
import "./components/Login";
import "./components/Signup";
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
  let dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        //código en caso de que haya sesión iniciada
        dispatch(setUser(authUser));
      } else {
        //código en caso de que no haya sesión iniciada
        dispatch(setUser(null));
      }
    });
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <div className="App"></div>
    </BrowserRouter>
  );
}

export default App;
