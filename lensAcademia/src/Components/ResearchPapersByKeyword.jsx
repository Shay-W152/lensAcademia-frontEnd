import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import Transitions2 from './Transitions2';

const ResearchPapersByKeyword = () => {
  const { keywordId } = useParams();
  const [keywords, setKeywords] = useState([]);
  const [papers, setPapers] = useState([]);
  const [keywordName, setKeywordName] = useState('');

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/keywords/')
      .then((response) => response.json())
      .then((data) => setKeywords(data.sort((a, b) => a.word.localeCompare(b.word))))
      .catch((error) => {
        console.error('Error fetching keywords:', error);
      });
  }, []);

  useEffect(() => {
    if (keywordId) {
      const keywordData = keywords.find((kw) => kw.id === Number(keywordId));
      if (keywordData && keywordData.research_papers.length > 0) {
        fetch(`http://127.0.0.1:8000/api/researchpapers/`)
          .then((response) => response.json())
          .then((data) => {
            // Filter the research papers that belong to the keyword
            const matchedPapers = data.filter((paper) => {
              return keywordData.research_papers.includes(paper.id);
            });
            setPapers(matchedPapers);
          })
          .catch((error) => {
            console.error('Error fetching research papers:', error);
          });
      } else {
        setPapers([]);
      }

      setKeywordName(keywordData ? keywordData.word : '');
    }
  }, [keywordId, keywords]);

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
    <Transitions2>
      <div>
        {keywordId ? (
          <>
            <h2 style={{ textAlign: 'center', marginBottom: '20px', marginTop:'20px' , color: '#CFCBC9' }}>
              Research Papers for Keyword: {keywordName}
            </h2>
            {papers.length > 0 ? (
              <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th style={tableHeaderStyle}>Title</th>
                  <th style={tableHeaderStyle}>Abstract</th>
                  <th style={tableHeaderStyle}>Country</th>
                </tr>
              </thead>
              <tbody>
                {papers.map((paper) => (
                  <tr key={paper.id}>
                    <td style={{ ...tableRowStyle, ...clickableCellStyle }}>
                      <a href={paper.url} target="_blank" rel="noopener noreferrer" style={linkStyle}>
                        {paper.name}
                      </a>
                    </td>
                    <td style={{ ...tableRowStyle, ...clickableCellStyle }}>
                      <a href={paper.url} target="_blank" rel="noopener noreferrer" style={linkStyle}>
                        {paper.abstract}
                      </a>
                    </td>
                    <td style={{ ...tableRowStyle, ...clickableCellStyle }}>
                      <a href={paper.url} target="_blank" rel="noopener noreferrer" style={linkStyle}>
                        {paper.country}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            
            ) : (
              <p>No research papers found for this keyword.</p>
            )}
          </>
        ) : (
          <>
            <p>Keyword ID not specified.</p>
            <p>Click on a keyword below to view its research papers:</p>
            <ul>
              {keywords.map((kw) => (
                <li key={kw.id}>
                  <Link to={`/researchpapers/keyword/${kw.id}`} style={linkStyle}>
                    {kw.word}
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </Transitions2>
  );
};

export default ResearchPapersByKeyword;
