import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/TheHeader'
import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";

function MyApp() {
    return (
        <>
            <Header />
            <div className='mt-10 container rounded p-4 min-h-screen bg-gray-50 mx-auto'>
                <Routes>
                    <Route path="/" element={<Home /> } />
                    {/* <Route path="/about" element={<About /> } />
                    <Route path="/contact" element={<Contact /> } /> */}
                </Routes>
            </div>
        </>
    );
}

export default MyApp;

if (document.getElementById('app')) {
    ReactDOM.render(
        <BrowserRouter>
            <MyApp />
        </BrowserRouter>
            , document.getElementById('app'));
}