import { useState } from "react";
import Login from "./components/Login.jsx";
import Index from "./pages/Index.jsx";
import Matka from "./pages/Matka.jsx";
import Casinogame from "./pages/Casinogame.jsx";
import Statement from "./pages/Statement.jsx";
import Header from "./components/Header.jsx";
import Allgames from "./pages/Allgames.jsx";
import Ledger from "./pages/Ledger.jsx";
import ChangePassword from "./pages/ChangePassword.jsx";
import Profile from "./pages/Profile.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    // <>
    //   <Login />
    //   <Index />
    //   <Casinogame />
    //   <Matka />
    //   <Statement />
    //   <Allgames />
    //   <Ledger />
    //   <ChangePassword />
    //   <Profile />
    // </>

    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Index />} />
          <Route path="/casinogame" element={<Casinogame />} />
          <Route path="/matka" element={<Matka />} />
          <Route path="/statement" element={<Statement />} />
          <Route path="/myledger" element={<Ledger />} />
          <Route path="/allgames" element={<Allgames />} />
          <Route path="/changepassword" element={<ChangePassword />} />
          <Route path="/myprofile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
