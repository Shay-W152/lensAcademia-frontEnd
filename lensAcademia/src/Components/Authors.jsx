// src/components/Authors.js
import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';

const Authors = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    // Fetch data from your API endpoint: http://127.0.0.1:8000/api/authors/
    fetch('http://127.0.0.1:8000/api/authors/')
      .then((response) => response.json())
      .then((data) => setAuthors(data));
  }, []);

  return (
    <div>
      <h2>Authors</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>URL</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {authors.map((author) => (
            <tr key={author.id}>
              <td>{author.id}</td>
              <td>{author.name}</td>
              <td>{author.url}</td>
              <td>{author.country}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Authors;
