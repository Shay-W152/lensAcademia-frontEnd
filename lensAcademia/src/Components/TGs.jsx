import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Transitions2 from './Transitions2';

const TGs = () => {
  const [tgs, setTGs] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/tgs/')
      .then((response) => response.json())
      .then((data) => {
        const sortedTGs = data.sort((a, b) => a.tg.localeCompare(b.tg));
        setTGs(sortedTGs);
      });
  }, []);

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

  const aStyle = {
    color: 'inherit',
    textDecoration: 'none',
  };

  return (
    <div>
      <Transitions2>
      <h2 style={{ textAlign: 'center', marginBottom: '1rem', marginTop:'2rem', color: '#CFCBC9' }}>Topic Groups</h2>
      <Table striped bordered hover style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Choose a Subject to explore</th>
          </tr>
        </thead>
        <tbody>
          {tgs.map((tg) => (
            <tr key={tg.id}>
              <td style={tdStyle}>
                <Link to={`/researchpapers/tg/${tg.id}`} style={aStyle}>
                  {tg.tg}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      </Transitions2>
    </div>
    
  );
};

export default TGs;
