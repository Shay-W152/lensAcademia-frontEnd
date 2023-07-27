// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomNavbar from './Components/Navbar';
import Home from './Components/Home';
import Keywords from './Components/Keywords';
import TGs from './Components/TGs';
import Authors from './Components/Authors';
import ResearchPapers from './Components/ResearchPapers'; // Import ResearchPapers component

function App() {
  return (
    <Router>
      <div>
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/keywords" element={<Keywords />} />
          <Route path="/tgs" element={<TGs />} />
          <Route path="/authors" element={<Authors />} />
          <Route path="/researchpapers" element={<ResearchPapers />} /> {/* Check the path here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
