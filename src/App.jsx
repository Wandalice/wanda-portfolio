import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Work from './pages/Work';
import Holisis from './pages/Holisis';
import Bio from './pages/Bio';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
      <div className="app-container bg-white min-h-screen">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/holisis" element={<Holisis />} />
            <Route path="/bio" element={<Bio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
};

export default App;