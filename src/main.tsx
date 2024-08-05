import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import PhoneBook from "./pages/PhoneBook/PhoneBook.tsx";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Feedback from "./pages/Feedback/Feedback.tsx";
import Header from "./components/Header/Header.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/feedback" element={<Feedback />}></Route>
        <Route path="/phone-book" element={<PhoneBook />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
