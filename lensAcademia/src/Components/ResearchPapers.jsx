import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import '/Users/shay/Desktop/capStone/lensAcademia-frontEnd/lensAcademia/src/App.css';

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
    
    // backgroundColor:'red'
  };

  const linkStyle = {
    color: 'inherit',
    textDecoration: 'none',
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Research Papers</h2>
      <Table striped bordered hover responsive style={{ marginBottom: '20px' }}>
        <thead style={{ backgroundColor: '#CFCBC9', color: '1E1E3A' }}>
        <tr>
          <th style={{ backgroundColor: '#CFCBC9', color: '#1E1E3A' }}>Title</th>
          <th style={{ backgroundColor: '#CFCBC9', color: '#1E1E3A' }}>Abstract</th>
          <th style={{ backgroundColor: '#CFCBC9', color: '#1E1E3A' }}>Country</th>
          <th style={{ backgroundColor: '#CFCBC9', color: '#1E1E3A' }}>Keywords</th>
        </tr>

        </thead>
        <tbody>
          {papers.map((paper) => (
            <tr key={paper.id} style={{ backgroundColor: '#A6A0A0', color: 'white' }}>
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
                  <span key={keyword.id} style={{ color: 'black' }}>{keyword.word}, </span>
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
