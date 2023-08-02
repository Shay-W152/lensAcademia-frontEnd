import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Transitions2 from './Transitions2';

const Keywords = () => {
  const [keywords, setKeywords] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/keywords/')
      .then((response) => response.json())
      .then((data) => {
        const sortedKeywords = data.sort((a, b) => a.word.localeCompare(b.word));
        setKeywords(sortedKeywords);
      })
      .catch((error) => {
        console.error('Error fetching keywords:', error);
      });
  }, []);

  const tableStyle = {
    width: '80%',
    margin: 'auto',
    marginTop: '20px',
  };

  const keywordStyle = {
    textDecoration: 'none',
    fontWeight: 'bold',
    color: 'inherit',
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
      <div style={tableStyle}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px', color: 'black', textDecoration: 'underline' }}>
          Keywords
        </h2>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th style={tableHeaderStyle}>Keywords</th>
            </tr>
          </thead>
          <tbody>
            {keywords.map((keyword) => (
              <tr key={keyword.id}>
                <td style={{ ...tableRowStyle, padding: '8px' }}>
                  <Link to={`/researchpapers/keyword/${keyword.id}`} style={keywordStyle}>
                    {keyword.word}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Transitions2>
  );
};

export default Keywords;
