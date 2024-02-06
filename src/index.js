import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import Error from "./pages/Error";
import FicheLogement from "./pages/FicheLogement";
import About from "./pages/About";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import "./styles/css/index.css";
import "./styles/css/responsive.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/ficheLogement/:idLogement" element={<FicheLogement/>}/>
                <Route path="/About" element={<About/>}/>
                <Route path="*" element={<Error/>}/>
            </Routes>
            <Footer/>
        </Router>
    </React.StrictMode>
);
