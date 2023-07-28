import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const ResearchPapersByTopicGroup = () => {
  const { topicGroupId } = useParams();
  const [papers, setPapers] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/researchpapers/')
      .then((response) => response.json())
      .then((data) => {
        // Filter the research papers that belong to the topic group
        const matchedPapers = data.filter((paper) => {
          return paper.tg === `http://127.0.0.1:8000/api/tgs/${topicGroupId}/`;
        });
        setPapers(matchedPapers);
      })
      .catch((error) => {
        console.error('Error fetching research papers:', error);
      });
  }, [topicGroupId]);

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
      {topicGroupId ? (
        <>
          <h2>Research Papers for Topic Group ID: {topicGroupId}</h2>
          {papers.length > 0 ? (
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Abstract</th>
                  <th>Country</th>
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
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <p>Loading..</p>
          )}
        </>
      ) : (
        <>
          <p>Topic Group ID not specified.</p>
          <p>Click on a topic group below to view its research papers:</p>
           
        </>
      )}
    </div>
  );
};

export default ResearchPapersByTopicGroup;
