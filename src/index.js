import React from 'react';
import ReactDOM from 'react-dom/client';
import {HashRouter, Routes, Route} from "react-router-dom";
import './index.css';
import Layout from "./Layout";
import Home from "./pages/home/Home";
import Browse from "./pages/browse/Browse";
import About from "./pages/about/About";
import Login from "./pages/login/Login";
import Movie from "./pages/movie/Movie";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="browse" element={<Browse />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="movie" element={<Movie />} />
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
