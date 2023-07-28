import React, { useState, useEffect } from 'react';
import '/Users/shay/Desktop/capStone/lensAcademia-frontEnd/lensAcademia/src/app.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Home = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100%',
    
    margin: '0 auto', // Center the content horizontally
  };
  

  const contentStyle = {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: ' #A6A0A0',
    boxShadow: '0 4px 4px rgba(207, 203, 201)',
  };
  

  const headingStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '16px',
    marginTop: '1vmin',
  };

  const leadStyle = {
    fontSize: '18px',
  };

  const paragraphStyle = {
    fontSize: '16px',
  };

  const carouselStyle = {
   
  
  };

  const carouselItemStyle = {
    height: '100%', // Set a fixed height for each carousel item
  };

  const carouselTextWrapper = {
    textAlign: 'center',
    maxWidth: '500px',
    margin: '0 auto',
  };

  const readMoreStyle = {
    
    textDecoration: 'underline',
    cursor: 'pointer',
    color:'inherit'
  };

  const [researchPapers, setResearchPapers] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/researchpapers/')
      .then((response) => response.json())
      .then((data) => setResearchPapers(data))
      .catch((error) => {
        console.error('Error fetching research papers:', error);
      });
  }, []);

  const handleReadMoreClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div style={containerStyle}>
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={3000}
        showArrows={true} // Enable left and right navigation arrows
        style={carouselStyle}
      >
        {researchPapers.map((paper) => (
          <div key={paper.id} style={carouselItemStyle}>
            <div style={carouselTextWrapper}>
              <h3>{paper.name}</h3>
              <p>{paper.abstract}</p>
              {paper.abstract.length > 100 && (
                <span style={readMoreStyle} onClick={() => handleReadMoreClick(paper.url)}>
                  Read More
                </span>
              )}
            </div>
          </div>
        ))}
      </Carousel>
      <div style={contentStyle}>
        <h2 style={headingStyle}>Welcome to LensAcademia!</h2>
        <p style={leadStyle}>
          LensAcademia is a platform that provides access to academic research papers, authors, and keywords.
        </p>
        <p style={paragraphStyle}>
          Use the navigation links at the top to explore the content.
        </p>
      </div>
    </div>
  );
};

export default Home;
