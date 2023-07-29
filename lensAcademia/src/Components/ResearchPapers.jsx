import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import '/Users/shay/Desktop/capStone/lensAcademia-frontEnd/lensAcademia/src/App.css';
import Transitions2 from './Transitions2';

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
  };

  const linkStyle = {
    color: 'inherit',
    textDecoration: 'none',
  };

  const tableHeaderStyle = {
    backgroundColor: '#CFCBC9',
    color: '#1E1E3A',
  };

  const tableRowStyle = {
    backgroundColor: '#A6A0A0',
    color: '#1E1E3A',
  };

  return (
    <Transitions2>
      <div>
        <h2 style={{ textAlign: 'center', marginBottom: '20px', marginTop: '20px', color: '#CFCBC9' }}>
          Research Papers
        </h2>
        <Table striped bordered hover responsive style={{ marginBottom: '20px' }}>
          <thead>
            <tr>
              <th style={tableHeaderStyle}>Title</th>
              <th style={tableHeaderStyle}>Abstract</th>
              <th style={tableHeaderStyle}>Country</th>
              {/* <th>Keywords</th> */}
            </tr>
          </thead>
          <tbody>
            {papers.map((paper) => (
              <tr key={paper.id}>
                <td style={{ ...tableRowStyle, ...clickableCellStyle }}>
                  <a href={paper.url} target="_blank" rel="noopener noreferrer" style={linkStyle}>
                    {paper.name}
                  </a>
                </td>
                <td style={{ ...tableRowStyle, ...clickableCellStyle }}>
                  <a href={paper.url} target="_blank" rel="noopener noreferrer" style={linkStyle}>
                    {paper.abstract}
                  </a>
                </td>
                <td style={{ ...tableRowStyle, ...clickableCellStyle }}>
                  <a href={paper.url} target="_blank" rel="noopener noreferrer" style={linkStyle}>
                    {paper.country}
                  </a>
                </td>
                {/* <td>
                {paper.keywords.map((keyword) => (
                  <span key={keyword.id} style={{ color: '#000000' }}>
                    {keyword.word}, 
                  </span>
                ))}
              </td> */}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Transitions2>
  );
};

export default ResearchPapers;
