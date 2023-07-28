import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TGs = () => {
  const [tgs, setTGs] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/tgs/')
      .then((response) => response.json())
      .then((data) => setTGs(data));
  }, []);

  const tableStyle = {
    maxWidth: '600px',
    margin: '0 auto',
    marginTop: '2rem',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const thStyle = {
    backgroundColor: '#f0f0f0',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: '1rem',
  };

  const tdStyle = {
    textAlign: 'center',
    padding: '1rem',
  };

  const aStyle = {
    color: 'inherit',
    textDecoration: 'none',
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Topic Groups</h2>
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
    </div>
  );
};

export default TGs;
