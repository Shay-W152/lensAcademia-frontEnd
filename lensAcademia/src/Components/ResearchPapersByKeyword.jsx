import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const ResearchPapersByKeyword = () => {
  const { keywordId } = useParams();
  const [keywords, setKeywords] = useState([]);
  const [papers, setPapers] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/keywords/')
      .then((response) => response.json())
      .then((data) => setKeywords(data))
      .catch((error) => {
        console.error('Error fetching keywords:', error);
      });
  }, []);

  useEffect(() => {
    if (keywordId) {
      const keywordData = keywords.find((kw) => kw.id === Number(keywordId));
      if (keywordData && keywordData.research_papers.length > 0) {
        fetch(`http://127.0.0.1:8000/api/researchpapers/?id__in=${keywordData.research_papers.join(',')}`)
          .then((response) => response.json())
          .then((papersData) => setPapers(papersData))
          .catch((error) => {
            console.error('Error fetching research papers:', error);
          });
      } else {
        setPapers([]);
      }
    }
  }, [keywordId, keywords]);

  const clickableCellStyle = {
    cursor: 'pointer',
    padding: '8px',
    /* Add other styles as needed */
  };

  const linkStyle = {
    color: 'inherit',
    textDecoration: 'none',
  };

  return (
    <div>
      {keywordId ? (
        <>
          <h2>Research Papers for Keyword ID: {keywordId}</h2>
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
            <p>No research papers found for this keyword ID.</p>
          )}
        </>
      ) : (
        <>
          <p>Keyword ID not specified.</p>
          <p>Click on a keyword below to view its research papers:</p>
          <ul>
            {keywords.map((kw) => (
              <li key={kw.id}>
                <Link to={`/researchpapers/keyword/${kw.id}`}>{kw.word}</Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default ResearchPapersByKeyword;
