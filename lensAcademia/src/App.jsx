import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomNavbar from './Components/Navbar';
import Home from './Components/Home';
import Keywords from './Components/Keywords';
import TGs from './Components/TGs';
import ResearchPapersByTopicGroup from './Components/ResearchPapersByTopicGroup';
import Authors from './Components/Authors';
import ResearchPapers from './Components/ResearchPapers';
import ResearchPapersByKeyword from './Components/ResearchPapersByKeyword';
import PostResearchPaper from './Components/PostResearchPaper';  

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
          <Route path="/researchpapers" element={<ResearchPapers />} />
          <Route path="/researchpapers/keyword/:keywordId" element={<ResearchPapersByKeyword />} />
          <Route path="/researchpapers/tg/:topicGroupId" element={<ResearchPapersByTopicGroup />} />
          <Route path="/postresearchpaper" element={<PostResearchPaper />} />  
        </Routes>
      </div>
    </Router>
  );
}

export default App;
