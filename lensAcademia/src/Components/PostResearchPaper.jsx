import React, { useState } from 'react';
import axios from 'axios';

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
    abstract: '',
    url: '',
    country: '',
    tg: '',
    // Keywords: ''
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
        // You can perform additional actions upon successful submission
      })
      .catch((error) => {
        alert('An error occurred while posting the research paper.');
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <h1>Post a New Research Paper</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required /><br />

        <label htmlFor="abstract">Abstract:</label>
        <textarea id="abstract" name="abstract" rows="4" cols="50" value={formData.abstract} onChange={handleInputChange} required></textarea><br />

        <label htmlFor="url">URL:</label>
        <input type="url" id="url" name="url" value={formData.url} onChange={handleInputChange} required /><br />

        <label htmlFor="country">Country:</label>
        <input type="text" id="country" name="country" value={formData.country} onChange={handleInputChange} required /><br />

        <label htmlFor="tg">Topic Group:</label>
        <input type="text" id="tg" name="tg" value={formData.tg} onChange={handleInputChange} required /><br />

        {/* <label htmlFor="keywords">Keywords:</label>
        <input type="text" id="keywords" name="keywords" value={formData.keywords} onChange={handleInputChange} required /><br /> */}

        

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PostResearchPaper;
