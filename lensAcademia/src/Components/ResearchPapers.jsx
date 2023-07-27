// src/components/ResearchPapers.js
import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';

const ResearchPapers = () => {
  const [papers, setPapers] = useState([]);

  useEffect(() => {
    // Fetch data from your API endpoint: http://127.0.0.1:8000/api/researchpapers/
    fetch('http://127.0.0.1:8000/api/researchpapers/')
      .then((response) => response.json())
      .then((data) => setPapers(data));
  }, []);

  return (
    <div>
      <h2>Research Papers</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Abstract</th>
            <th>URL</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {papers.map((paper) => (
            <tr key={paper.id}>
              <td>{paper.id}</td>
              <td>{paper.name}</td>
              <td>{paper.abstract}</td>
              <td>{paper.url}</td>
              <td>{paper.country}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ResearchPapers;
