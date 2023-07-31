import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container } from 'react-bootstrap';
import Transtions2 from './Transitions2'

function getCookie(name) {
  const cookieValue = document.cookie
    .split('; ')
    .find(cookie => cookie.startsWith(name + '='));
  
  if (cookieValue) {
    return cookieValue.split('=')[1];
  }
  
  return null;
}

const PostResearchPaper = () => {
  const [formData, setFormData] = useState({
    name: '',
    researchers:'',
    abstract: '',
    url: '',
    country: '',
    tg: '',
    // keywords: '',
   
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const csrftoken = getCookie('csrftoken');

    axios
      .post(
        'http://127.0.0.1:8000/api/researchpapers/',
        formData,
        {
          headers: {
            'X-CSRFToken': csrftoken,
          },
        }
      )
      .then((response) => {
        alert('Research paper successfully posted!');
         
      })
      .catch((error) => {
        alert('An error occurred while posting the research paper.');
        console.error('Error:', error);
      });
  };

  return (
    <Container>
        <Transtions2>
      <h1 style={{ color:'#A6A0A0', textAlign: 'center', marginTop:'2rem' }}>Submit a New Paper</h1>
      <Form onSubmit={handleSubmit} style={{ color:'#A6A0A0', maxWidth: '600px', margin: '0 auto' }}>
        <Form.Group>
          <Form.Label>Name:</Form.Label>
          <Form.Control type="text" name="name" value={formData.name} onChange={handleInputChange} required style={{ backgroundColor:'#A6A0A0'}}></Form.Control> 
        </Form.Group>

          <Form.Group>
          <Form.Label>Researchers:</Form.Label>
          <Form.Control type="text" name="researchers" value={formData.researchers} onChange={handleInputChange} required style={{ backgroundColor:'#A6A0A0'}} />
        </Form.Group>

        <Form.Group>
          <Form.Label>Abstract:</Form.Label>
          <Form.Control as="textarea" rows="4" name="abstract" value={formData.abstract} onChange={handleInputChange} required style={{ backgroundColor:'#A6A0A0'}}/>
        </Form.Group>

        <Form.Group>
          <Form.Label>URL:</Form.Label>
          <Form.Control type="url" name="url" value={formData.url} onChange={handleInputChange} required style={{ backgroundColor:'#A6A0A0'}}/>
        </Form.Group>

        <Form.Group>
          <Form.Label>Country:</Form.Label>
          <Form.Control type="text" name="country" value={formData.country} onChange={handleInputChange} required style={{ backgroundColor:'#A6A0A0'}}/>
        </Form.Group>

        <Form.Group>
          <Form.Label>Topic Group:</Form.Label>
          <Form.Control type="text" name="tg" value={formData.tg} onChange={handleInputChange} required style={{ backgroundColor:'#A6A0A0'}}/>
        </Form.Group>

        {/* <Form.Group>
          <Form.Label>Keywords:</Form.Label>
          <Form.Control type="text" name="keywords" value={formData.keywords} onChange={handleInputChange} required />
        </Form.Group> */}

      

        <div style={{ textAlign: 'center' }}>
          <Button type="submit" style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#A6A0A0', color: 'white', border: 'none', marginTop:'1rem', borderRadius: '4px', cursor: 'pointer' }}>Submit</Button>
        </div>
      </Form>
      </Transtions2>
    </Container>
  );
};

export default PostResearchPaper;
