import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';

const ResearchPapers = () => {
  const [papers, setPapers] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/researchpapers/')
      .then((response) => response.json())
      .then((data) => {
        const sortedPapers = data.sort((a, b) => a.name.localeCompare(b.name));
        setPapers(sortedPapers);
      });
  }, []);

  const clickableCellStyle = {
    cursor: 'pointer',
    padding: '8px',
    /* Add other styles as needed */
    
  };

  const linkStyle = {
    color: 'inherit',       
    textDecoration: 'none',  
  };

  return (
    <div>
      <h2>Research Papers</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Abstract</th>
            <th>Country</th>
            <th>Keywords</th>
          </tr>
        </thead>
        <tbody>
          {papers.map((paper) => (
            <tr key={paper.id}>
              <td>
                <a href={paper.url} target="_blank" rel="noopener noreferrer" style={linkStyle}>
                  <div style={clickableCellStyle}>{paper.name}</div>
                </a>
              </td>
              <td>
                <a href={paper.url} target="_blank" rel="noopener noreferrer" style={linkStyle}>
                  <div style={clickableCellStyle}>{paper.abstract}</div>
                </a>
              </td>
              <td>{paper.country}</td>
              <td>
                {paper.keywords.map((keyword) => (
                  <span key={keyword.id}>{keyword.word}, </span>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ResearchPapers;
