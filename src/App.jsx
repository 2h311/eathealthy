import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Blog from "./components/pages/Blog";
import Contact from "./components/pages/Contact";
import Forum from "./components/pages/Forum";
import Products from "./components/pages/Products";
import PageNotFound from "./components/pages/PageNotFound";

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
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Fragment>
  );
};

export default App;
