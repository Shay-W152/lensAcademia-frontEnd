import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../App.css'

const Home = () => {
  const [researchPapers, setResearchPapers] = useState([]);

  useEffect(() => {
    // Fetch the research papers from the API (adjust the URL as needed)
    fetch('http://127.0.0.1:8000/api/researchpapers/')
      .then((response) => response.json())
      .then((data) => setResearchPapers(data))
      .catch((error) => console.error('Error fetching research papers:', error));
  }, []);

  const carouselStyle = {
    width: '100%',
    margin: 0,
    padding: 0,
    position: 'relative',
    backgroundColor: '#DFDEDE',
    marginBottom: '10vmin',
    marginTop: '-2.5vmin', 
  };

  const carouselItemStyle = {
    width: '100%',
  };

  const carouselCaptionStyle = {
    color: '#fff',
    textAlign: 'left',
    backgroundColor: '#A6A0A0',
    padding: '80px',
  };

  const abstractStyle = {
    display: '-webkit-box',
    WebkitLineClamp: '5',
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    marginBottom: '10px',
  };

  return (
    <div className="container mt-4">
      {researchPapers.length === 0 ? (
        <p>No research papers available.</p>
      ) : (
        <Carousel style={carouselStyle}>
          {researchPapers.map((paper) => (
            <Carousel.Item key={paper.id} style={carouselItemStyle}>
              {paper.image ? (
                <img className="d-block w-100" src={paper.image} alt={paper.name} />
              ) : (
                <div className="d-block w-100 placeholder" style={{ height: '400px' }}></div>
              )}
              <Carousel.Caption style={carouselCaptionStyle}>
                <h3>{paper.name}</h3>
                <p style={abstractStyle}>{paper.abstract}</p>
                <a href={paper.url} target="_blank" rel="noreferrer" className="btn btn-primary">
                  Read More
                </a>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      )}
      <h1>Welcome to Lens Academia</h1>
      <p className="mb-4">Explore our research papers and stay updated with the latest findings.</p>
    </div>
  );
};

export default Home;
