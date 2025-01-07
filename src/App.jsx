import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Work from './pages/Work';
import Holisis from './pages/Holisis';
import Bio from './pages/Bio';
import Contact from './pages/Contact';

const App = () => {
  const location = useLocation();
  console.log('Current route:', location.pathname);

  return (
    <div className="app-container bg-white min-h-screen">
      <Layout>
        <div className="debug">
          <Routes>
            <Route 
              path="/" 
              element={
                <React.Suspense fallback={
                  <div className="flex items-center justify-center h-screen">
                    Loading...
                  </div>
                }>
                  <Home />
                </React.Suspense>
              } 
            />
            <Route path="/work" element={<Work />} />
            <Route path="/holisis" element={<Holisis />} />
            <Route path="/bio" element={<Bio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Layout>
    </div>
  );
};

export default App;