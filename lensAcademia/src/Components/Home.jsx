import React, { useState, useEffect, useRef } from 'react';
import { Carousel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper, faUser, faTags, faRectangleList } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100%',
    color: '#CFCBC9',
    margin: '0 auto',
    fontFamily: 'Prata',
  };

  const contentStyle = {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '50px',
    backgroundColor: '#A6A0A0',
    color: '#1E1E3A',
    boxShadow: '0 10px 10px black',
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

  const carouselItemStyle = {
    overflow: 'hidden',
    backgroundColor: 'rgba(65, 60, 58, 0.8)',
    backdropFilter: 'blur(8px)',
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

  const carouselRef = useRef();

  const handleKeyboardNavigation = (event) => {
    if (event.keyCode === 37) {
      // Left arrow key
      carouselRef.current.prev();
    } else if (event.keyCode === 39) {
      // Right arrow key
      carouselRef.current.next();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyboardNavigation);

    return () => {
      document.removeEventListener('keydown', handleKeyboardNavigation);
    };
  }, []);

  return (
    <div style={containerStyle}>
      <div className="carousel-container">
        <Carousel
          ref={carouselRef}
          interval={null}
          indicators={false}
          prevIcon={<span className="carousel-arrow">‹</span>}
          nextIcon={<span className="carousel-arrow">›</span>}
          className="carousel"
        >
          {researchPapers.map((paper) => (
            <Carousel.Item key={paper.id} style={carouselItemStyle}>
              <div style={contentStyle}>
                <h3>{paper.name}</h3>
                <p className="carousel-abstract">{paper.abstract}</p>
                {paper.abstract.length > 100 && (
                  <span
                    style={{ textDecoration: 'underline', cursor: 'pointer' }}
                    onClick={() => handleReadMoreClick(paper.url)}
                  >
                    Read More
                  </span>
                )}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div>
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
