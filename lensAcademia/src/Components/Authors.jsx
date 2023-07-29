import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import Transitions2 from './Transitions2';

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

  const tableHeaderStyle = {
    backgroundColor: '#CFCBC9',
    color: '#1E1E3A',
  };

  const tableRowStyle = {
    backgroundColor: '#A6A0A0',
    color: '#1E1E3A',
  };

  return (
    <div>
      <Transitions2>
      <h2 style={{ textAlign: 'center', marginBottom: '20px', marginTop: '20px', color: '#CFCBC9' }}>
        Authors
      </h2>
      <Table striped bordered hover responsive style={{ marginBottom: '20px' }}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>Name</th>
            <th style={tableHeaderStyle}>Country</th>
          </tr>
        </thead>
        <tbody>
          {authors.map((author) => (
            <tr key={author.id}>
              <td style={{ ...tableRowStyle, ...clickableCellStyle }}>
                <a href={author.url} target="_blank" rel="noopener noreferrer" style={linkStyle}>
                  {author.name}
                </a>
              </td>
              <td style={tableRowStyle}>{author.country}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      </Transitions2>
    </div>
  );
};

export default Authors;
