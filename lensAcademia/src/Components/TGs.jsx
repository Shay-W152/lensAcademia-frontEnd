// src/components/TGs.js
import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';

const TGs = () => {
  const [tgs, setTGs] = useState([]);

  useEffect(() => {
    // Fetch data from your API endpoint: http://127.0.0.1:8000/api/tgs/
    fetch('http://127.0.0.1:8000/api/tgs/')
      .then((response) => response.json())
      .then((data) => setTGs(data));
  }, []);

  return (
    <div>
      <h2>TGs</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>TG</th>
          </tr>
        </thead>
        <tbody>
          {tgs.map((tg) => (
            <tr key={tg.id}>
              <td>{tg.id}</td>
              <td>{tg.tg}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TGs;
