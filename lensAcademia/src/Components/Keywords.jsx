// src/components/Keywords.js
import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';

const Keywords = () => {
  const [keywords, setKeywords] = useState([]);

  useEffect(() => {
    
    fetch('http://127.0.0.1:8000/api/keywords/')
      .then((response) => response.json())
      .then((data) => setKeywords(data));
  }, []);

  return (
    <div>
      <h2>Keywords</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Word</th>
          </tr>
        </thead>
        <tbody>
          {keywords.map((keyword) => (
            <tr key={keyword.id}>
              <td>{keyword.id}</td>
              <td>{keyword.word}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Keywords;
