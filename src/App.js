import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashbord from './components/dashbord';
import { Compte } from './components/compte';
import Fichier from './components/fichier';
import Partage from './components/partage';
import Tarification from './components/tarification';
import Connexion from './components/connexion';
import Inscription from './components/inscription';


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Dashbord />} />
                <Route path="/compte" element={<Compte />} />
                <Route path="/fichier" element={<Fichier />} />
                <Route path="/partage" element={<Partage />} />
                <Route path="/Contact" element={<Tarification />} />
                <Route path="/connexion" element={<Connexion  />} />
                <Route path="/inscription" element={<Inscription  />} />
 
            </Routes>
        </Router>
        
    );
};

export default App;
