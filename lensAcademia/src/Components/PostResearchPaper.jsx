import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';

const PostResearchPaperForm = () => {
  const initialFormState = {
    tg: 'http://127.0.0.1:8000/api/tgs/6/',
    researchers: [],
    keywords: [],
    name: '',
    abstract: '',
    url: '',
    country: '',
  };

  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://127.0.0.1:8000/api/researchpapers/', formData)
      .then((response) => {
        console.log('Research paper posted:', response.data);
        // Reset the form after successful submission
        setFormData(initialFormState);
      })
      .catch((error) => {
        console.error('Error posting research paper:', error);
      });
  };

  return (
    <Form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: '0 auto', marginTop:'2rem' }}>
          <h1 style={{textDecoration:'underline'}}>Add a New paper</h1>

      <Form.Group controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          style={{ marginBottom: '10px' }}
        />
      </Form.Group>
      <Form.Group controlId="abstract">
        <Form.Label>Abstract</Form.Label>
        <Form.Control
          as="textarea"
          name="abstract"
          value={formData.abstract}
          onChange={handleChange}
          style={{ marginBottom: '10px' }}
        />
      </Form.Group>
      <Form.Group controlId="url">
        <Form.Label>URL</Form.Label>
        <Form.Control
          type="text"
          name="url"
          value={formData.url}
          onChange={handleChange}
          style={{ marginBottom: '10px' }}
        />
      </Form.Group>
      <Form.Group controlId="country">
        <Form.Label>Country</Form.Label>
        <Form.Control
          type="text"
          name="country"
          value={formData.country}
          onChange={handleChange}
          style={{ marginBottom: '20px' }}
        />
      </Form.Group>
      <div style={{ textAlign: 'center' }}>
        <Button variant="primary" type="submit" style={{backgroundColor:'#A6A0A0', borderColor:'white'}}>Submit</Button>
      </div>
    </Form>
  );
};

export default PostResearchPaperForm;
