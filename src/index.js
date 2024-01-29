import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./components/Home";
import Error from "./components/Error";
import FicheLogement from "./components/FicheLogement";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Header/>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/ficheLogement/:idLogement" element={<FicheLogement />} />
                <Route path="/About" element={<About />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </Router>
        <Footer/>
    </React.StrictMode>
);
