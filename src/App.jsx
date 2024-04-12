import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Blog from "./components/pages/Blog";
import Contact from "./components/pages/Contact";
import Forum from "./components/pages/Forum";
import Products from "./components/pages/Products";
import PageNotFound from "./components/pages/PageNotFound";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import SignUp from "./components/pages/SignUp";
import Forget from "./components/pages/Forget";

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/forget" element={<Forget />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Fragment>
  );
};

export default App;
