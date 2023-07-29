import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import Transitions2 from './Transitions2';

const ResearchPapersByTopicGroup = () => {
  const { topicGroupId } = useParams();
  const [topicGroupName, setTopicGroupName] = useState('');
  const [papers, setPapers] = useState([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/tgs/${topicGroupId}/`)
      .then((response) => response.json())
      .then((data) => {
        setTopicGroupName(data.tg); // Assuming the topic group name is stored in the 'tg' property
      })
      .catch((error) => {
        console.error('Error fetching topic group name:', error);
      });

    fetch('http://127.0.0.1:8000/api/researchpapers/')
      .then((response) => response.json())
      .then((data) => {
        const matchedPapers = data.filter((paper) => {
          return paper.tg === `http://127.0.0.1:8000/api/tgs/${topicGroupId}/`;
        });
        setPapers(matchedPapers);
      })
      .catch((error) => {
        console.error('Error fetching research papers:', error);
      });
  }, [topicGroupId]);

  const tableStyle = {
    width: '80%',
    margin: 'auto',
    marginTop: '2rem',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const thStyle = {
    backgroundColor: '#CFCBC9',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: '1rem',
    color: '#1E1E3A',
  };

  const tdStyle = {
    textAlign: 'center',
    padding: '1rem',
    backgroundColor: '#A6A0A0',
    color: '#1E1E3A',
  };

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
      <Transitions2>
      {topicGroupName ? (
        <>
          <h2 style={{ textAlign: 'center', marginBottom: '1rem', marginTop: '1rem', color: '#CFCBC9' }}>
            Research Papers for Topic Group: {topicGroupName}
          </h2>
          {papers.length > 0 ? (
            <Table striped bordered hover style={tableStyle}>
              <thead>
                <tr>
                  <th style={thStyle}>Title</th>
                  <th style={thStyle}>Abstract</th>
                  <th style={thStyle}>Country</th>
                </tr>
              </thead>
              <tbody>
                {papers.map((paper) => (
                  <tr key={paper.id}>
                    <td style={{ ...tdStyle, ...clickableCellStyle }}>
                      <a href={paper.url} target="_blank" rel="noopener noreferrer" style={linkStyle}>
                        {paper.name}
                      </a>
                    </td>
                    <td style={tdStyle}>
                      <a href={paper.url} target="_blank" rel="noopener noreferrer" style={linkStyle}>
                        {paper.abstract}
                      </a>
                    </td>
                    <td style={tdStyle}>
                      <a href={paper.url} target="_blank" rel="noopener noreferrer" style={linkStyle}>
                        {paper.country}
                      </a>
                    </td>
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
          {/* You can add a list of links to topic groups here if needed */}
        </>
      )}
      </Transitions2>
    </div>
  );
};

export default ResearchPapersByTopicGroup;
