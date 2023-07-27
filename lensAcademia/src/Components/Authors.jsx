import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';

const Authors = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    
    fetch('http://127.0.0.1:8000/api/authors/')
      .then((response) => response.json())
      .then((data) => {
        
        const sortedAuthors = data.sort((a, b) => a.name.localeCompare(b.name));
        setAuthors(sortedAuthors);
      });
  }, []);

  const clickableCellStyle = {
    cursor: 'pointer',
    padding: '8px',
    
  };

  const linkStyle = {
    color: 'inherit',        
    textDecoration: 'none', 
    
  };

  return (
    <div>
      <h2>Authors</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
             
            <th>Name</th>
             
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {authors.map((author) => (
            <tr key={author.id}>
              
              <td>
                <a href={author.url} target="_blank" rel="noopener noreferrer" style={linkStyle}>
                  <div style={clickableCellStyle}>{author.name}</div>
                </a>
              </td>
               
              <td>{author.country}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Authors;
