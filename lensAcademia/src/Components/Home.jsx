import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styled, { createGlobalStyle } from 'styled-components';
import '../App.css';
import Transition from './Transition';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    /* Add other global styles here */
  }
`;

const StyledCarouselItem = styled(Carousel.Item)`
  /* Add your global styles for the carousel item here */
`;

const Home = () => {
  const [researchPapers, setResearchPapers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPapers, setFilteredPapers] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/researchpapers/')
      .then((response) => response.json())
      .then((data) => {
        setResearchPapers(data);
      })
      .catch((error) => console.error('Error fetching research papers:', error));
  }, []);

  const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearchQuery(value);
    filterPapers(value);
  };

  const filterPapers = (query) => {
    const filtered = researchPapers.filter((paper) => {
      const keywordsMatch = paper.keywords.some((keywordId) => keywordId === query);
      const tgMatch = paper.tg.includes(query);
      const nameMatch = paper.name.toLowerCase().includes(query.toLowerCase());
      const researchersMatch = paper.researchers.includes(parseInt(query, 10));

      return (
        keywordsMatch ||
        tgMatch ||
        nameMatch ||
        researchersMatch ||
        paper.abstract.toLowerCase().includes(query.toLowerCase())
      );
    });
    setFilteredPapers(filtered);
  };

  const carouselStyle = {
    width: '100%',
    margin: 0,
    padding: 0,
    position: 'relative',
     
    marginBottom: '10vmin',
    marginTop: '-2.5vmin',
  };

  const carouselItemStyle = {
    width: '100%',
    backgroundColor: 'white',
  };

  const carouselCaptionStyle = {
    color: '#fff',
    textAlign: 'left',
    backgroundColor: '#A6A0A0',
    padding: '100px',
    boxShadow: '0 10px 10px black',
    marginBottom: '-2vmin',
  };

  const abstractStyle = {
    display: '-webkit-box',
    WebkitLineClamp: '5',
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    marginBottom: '10px',
  };

  const paperStyle = {
    backgroundColor: '#DFDEDE',
    padding: '20px',
    margin: '10px',
    boxShadow: '0 10px 10px black',
  };

  const readMoreButtonStyle = {
    backgroundColor: 'transparent',
    color: '#FFFFFF',
    textDecoration: 'underline',
    padding: '10px 20px',
    borderRadius: '5px',
    marginTop: '10px',
  };

  return (
    <Transition>
      <GlobalStyle />
      <div className="container mt-4">
        <div className="carousel-container">
          <Carousel interval={null} style={{ width: '100vmin', margin: '0 auto', ...carouselStyle }}>
            {/* Carousel Items */}
            {researchPapers.map((paper) => (
              <StyledCarouselItem key={paper.id} style={carouselItemStyle}>
                {/* Carousel Item Content */}
                {paper.image ? (
                  <img className="d-block w-100" src={paper.image} alt={paper.name} />
                ) : (
                  <div className="d-block w-100 placeholder" style={{ height: '400px' }}></div>
                )}
                <Carousel.Caption style={carouselCaptionStyle}>
                  <h3>{paper.name}</h3>
                  <p style={abstractStyle}>{paper.abstract}</p>
                  <a href={paper.url} target="_blank" rel="noreferrer" style={readMoreButtonStyle}>
                    Read More
                  </a>
                </Carousel.Caption>
              </StyledCarouselItem>
            ))}
          </Carousel>
        </div>

        <div className="mt-4">
          {/* Welcome Section */}
          <h1>Welcome to Lens Academia</h1>
          <p>Explore our research papers and stay updated with the latest findings.</p>
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search for research papers..."
          />
        </div>

        {searchQuery.length > 0 ? (
          <div className="mt-4">
            {filteredPapers.length === 0 ? (
              <p>No research papers available.</p>
            ) : (
              filteredPapers.map((paper) => (
                <div key={paper.id} style={paperStyle}>
                  <h3>{paper.name}</h3>
                  <p style={abstractStyle}>{paper.abstract}</p>
                  <a href={paper.url} target="_blank" rel="noreferrer" style={readMoreButtonStyle}>
                    Read More
                  </a>
                </div>
              ))
            )}
          </div>
        ) : null}
      </div>
    </Transition>
  );
};

export default Home;
