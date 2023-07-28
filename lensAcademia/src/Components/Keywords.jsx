import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Keywords = () => {
  const [keywords, setKeywords] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/keywords/')
      .then((response) => response.json())
      .then((data) => setKeywords(data));
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

  return (
    <div style={tableStyle}>
      <h2>Keywords</h2>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Keywords</th>
          </tr>
        </thead>
        <tbody>
          {keywords.map((keyword) => (
            <tr key={keyword.id}>
              <td>
                <Link to={`/researchpapers/keyword/${keyword.id}`} style={keywordStyle}>
                  {keyword.word}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Keywords;
