import React from 'react';
import ReactDOM from 'react-dom/client';
import {HashRouter, Routes, Route} from "react-router-dom";
import './index.css';
import Layout from "./Layout";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Browse from "./pages/browse/Browse";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="browse" element={<Browse />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
