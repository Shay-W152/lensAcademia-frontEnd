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

  return (
    <div>
      <h2>Topic Groups</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Choose a Subject to explore</th>
          </tr>
        </thead>
        <tbody>
          {tgs.map((tg) => (
            <tr key={tg.id}>
              <td>
                <Link to={`/researchpapers/tg/${tg.id}`}>{tg.tg}</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TGs;
