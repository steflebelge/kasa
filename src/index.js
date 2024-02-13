import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home/Home";
import Error from "./pages/Error/Error";
import FicheLogement from "./pages/FicheLogement/FicheLogement";
import About from "./pages/About/About";
import Footer from "./layout/Footer/Footer";
import Header from "./layout/Header/Header";
import "./styles/sass/index.scss";
import "./styles/sass/responsive.scss";
import "./styles/sass/utils.scss";

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

//responsive
//composants guide des etapes ?
//composant carousseul, rating, tag
