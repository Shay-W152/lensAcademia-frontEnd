import React from 'react';

const Home = () => {
  const containerStyle = {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#f8f8f8',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const headingStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '16px',
  };

  const leadStyle = {
    fontSize: '18px',
    marginBottom: '12px',
  };

  const paragraphStyle = {
    fontSize: '16px',
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Welcome to LensAcademia!</h2>
      <p style={leadStyle}>
        LensAcademia is a platform that provides access to academic research papers, authors, and keywords.
      </p>
      <p style={paragraphStyle}>
        Use the navigation links at the top to explore the content.
      </p>
    </div>
  );
};

export default Home;
