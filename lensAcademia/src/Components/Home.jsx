import React, { useState, useEffect, useRef } from 'react';
import { Carousel, Form, Table } from 'react-bootstrap';
import Transitions from './Transition';

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
    maxWidth: '800px',
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
    lineHeight: '1.6',
    marginBottom: '20px',
    paddingLeft: '4rem',
    paddingRight: '4rem',
  };

  const paragraphStyle = {
    fontSize: '18px',
    lineHeight: '1.5',
    marginBottom: '10px',
    paddingLeft: '4rem',
    paddingRight: '4rem',
  };

  const tableStyle = {
    width: '100%',
    marginTop: '20px',
    textDecoration: 'none',
  };

  const thStyle = {
    backgroundColor: '#A6A0A0',
    textDecoration: 'none',
  };

  const tableRowStyle = {
    fontSize: '14x',
    textDecoration: 'none',
  };

  const carouselItemStyle = {
    overflow: 'hidden',
    backgroundColor: 'rgba(65, 60, 58, 0.8)',
    backdropFilter: 'blur(8px)',
  };

  const [researchPapers, setResearchPapers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/researchpapers/')
      .then((response) => response.json())
      .then((data) => {
        setResearchPapers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching research papers:', error);
        setLoading(false);
      });
  }, []);

  const handleReadMoreClick = (url) => {
    window.open(url, '_blank');
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredPapers = researchPapers.filter((paper) => {
    const keywords = paper.keywords.map((keyword) => keyword.word.toLowerCase());
    const authors = paper.researchers.map((researcher) => researcher.name.toLowerCase());

    return (
      paper.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      paper.abstract.toLowerCase().includes(searchQuery.toLowerCase()) ||
      paper.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
      keywords.includes(searchQuery.toLowerCase()) ||
      authors.some((author) => author.includes(searchQuery.toLowerCase()))
    );
  });

  const carouselRef = useRef();

  const handleKeyboardNavigation = (event) => {
    if (event.keyCode === 37) {
      carouselRef.current.prev();
    } else if (event.keyCode === 39) {
      carouselRef.current.next();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyboardNavigation);

    return () => {
      document.removeEventListener('keydown', handleKeyboardNavigation);
    };
  }, []);

  const hasFilteredPapers = filteredPapers.length > 0;
  const showTable = searchQuery !== '' && hasFilteredPapers;

  return (
    <Transitions>
      <div style={containerStyle}>
        {loading ? (
          <div> </div>
        ) : (
          <div className="carousel-container" style={{ height: '400px' }}>
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
        )}
        <div>
          <h2 style={headingStyle}>Welcome to LensAcademia!</h2>
          <p style={leadStyle}>
            LensAcademia is a platform that provides access to academic research papers and authors. It is designed to be a comprehensive resource for researchers, students, and anyone interested in exploring scholarly articles from various disciplines. Our vast database includes a wide range of research papers on subjects such as physics, chemistry, biology, mathematics, literature, history, and more.
          </p>
          <p style={paragraphStyle}>
            To get started, use the search bar below to find research papers related to your area of interest. You can search by paper title, author name, country of origin, or keywords associated with the paper. Our advanced search capabilities make it easy to discover relevant academic content quickly. Start your journey with LensAcademia today and unlock a world of academic insights at your fingertips!
          </p>
        </div>

        <Form style={{ marginBottom: '20px' }}>
          <Form.Control
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </Form>

        {showTable && (
          <Table striped bordered hover responsive style={tableStyle}>
            <thead>
              <tr>
                <th style={{ ...thStyle, backgroundColor: '#A6A0A0' }}>Title</th>
                <th style={{ ...thStyle, backgroundColor: '#A6A0A0' }}>Abstract</th>
                <th style={{ ...thStyle, backgroundColor: '#A6A0A0' }}>Country</th>
                <th style={{ ...thStyle, backgroundColor: '#A6A0A0' }}>Authors</th>
              </tr>
            </thead>
            <tbody>
              {filteredPapers.map((paper) => (
                <tr key={paper.id} style={tableRowStyle}>
                  <td style={{ backgroundColor: '#CFCBC9' }}>
                    <a
                      href={paper.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: 'none', color: '#141B41' }}
                    >
                      {paper.name}
                    </a>
                  </td>
                  <td style={{ backgroundColor: '#CFCBC9' }}>
                    <a
                      href={paper.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: 'none', color: '#141B41' }}
                    >
                      {paper.abstract}
                    </a>
                  </td>
                  <td style={{ backgroundColor: '#CFCBC9' }}>
                    <a
                      href={paper.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: 'none', color: '#141B41' }}
                    >
                      {paper.country}
                    </a>
                  </td>
                  <td style={{ backgroundColor: '#CFCBC9' }}>
                    {paper.researchers.map((researcher) => (
                      <span key={researcher.id}>
                        <a
                          href={researcher.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ textDecoration: 'none', color: '#141B41' }}
                        >
                          {researcher.name}
                        </a>
                        <br />
                      </span>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </div>
    </Transitions>
  );
};

export default Home;
