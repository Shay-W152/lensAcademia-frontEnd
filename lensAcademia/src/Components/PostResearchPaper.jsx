import React, { useState } from 'react';
import axios from 'axios';

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
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="abstract" className="form-label">Abstract</label>
        <textarea className="form-control" id="abstract" name="abstract" value={formData.abstract} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="url" className="form-label">URL</label>
        <input type="text" className="form-control" id="url" name="url" value={formData.url} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="country" className="form-label">Country</label>
        <input type="text" className="form-control" id="country" name="country" value={formData.country} onChange={handleChange} />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default PostResearchPaperForm;
