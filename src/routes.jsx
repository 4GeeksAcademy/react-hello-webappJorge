import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import injectContext from "./store/appContext";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Single from "./pages/Single";
import Demo from "./pages/Demo";

const Layout = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/single/:theid" element={<Single />} />
                <Route path="/demo" element={<Demo />} />
                <Route path="*" element={<h1>Not found!</h1>} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default injectContext(Layout);