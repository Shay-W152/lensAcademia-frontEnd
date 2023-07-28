# LensAcademia

LensAcademia is a web application that provides access to academic research papers, authors, and keywords. Users can explore and search for research papers based on various criteria.

![LensAcademia Screenshot](screenshot.png)

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- Browse and search for research papers by title, abstract, country, or keyword.
- View details of individual research papers, including their abstracts.
- Navigate through research papers using the Carousel feature.
- Access information about authors and keywords related to research papers.

## Technologies Used

- Front-end: React.js
- Styling: CSS, Bootstrap
- State Management: React Hooks
- API: [Admin Panel](http://127.0.0.1:8000/admin/)
- Carousel: react-bootstrap
- HTTP Requests: Fetch API

## Installation

To run locally, follow these steps:

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `lensAcademia-frontEnd`
3. Install the dependencies: `npm install`
4. Start the development server: `npm run dev`

## Api End points

The lensAcademia API provides the following endpoints:

## Authors:

    List all authors: /api/authors/
    Get details for a specific author: http://127.0.0.1:8000/api/authors/<author_id>/

Keywords:

    List all keywords: /api/keywords/
    Get details for a specific keyword: http://127.0.0.1:8000/api/keywords/<keyword_id>/

Research Papers:

    List all research papers: http://127.0.0.1:8000/api/researchpapers/
    Get details for a specific research paper: http://127.0.0.1:8000/api/researchpapers/<research_paper_id>/

Research Groups (TG):

    List all research groups: http://127.0.0.1:8000/api/tgs/
    Get details for a specific research group: http://127.0.0.1:8000/api/tgs/<tg_id>

## Django Admin Interface

You can access the Django admin interface at [Admin Panel](http://127.0.0.1:8000/admin/). Use your superuser credentials to log in and manage venues and events through the admin panel.