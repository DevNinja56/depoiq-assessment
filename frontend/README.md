# Depo IQ Frontend

## Overview

This is the frontend for **Depo IQ**, built using React, Next.js, Ant Design, and TailwindCSS. It provides a responsive, modern UI for managing topics, including listing and adding topics.

## Features

- **Topics Listing Page**: Displays all topics with pagination or infinite scrolling.
- **Add Topic Form**: A form to submit new topics with client-side validation.
- **Responsive Design**: Ensures optimal experience on all devices.
- **API Integration**: Communicates with the backend GraphQL API.

## Prerequisites

- Node.js >= 16.x
- Yarn or npm

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/depo-iq.git
   cd depo-iq/frontend
   Install dependencies:
   ```

npm install

Start the development server:

npm run dev 

Access the application at http://localhost:5173.

Scripts
dev: Start the development server.
build: Build the application for production.
start: Start the production server.
Technologies
Framework: React with Next.js
Styling: TailwindCSS and Ant Design
State Management: React Hooks
Testing
Unit testing and End-to-End (E2E) testing are implemented using Playwright.

npm run test
Docker Setup
Build the Docker image:

docker build -t depo-iq-frontend .
Run the Docker container:

docker run -p 3000:3000 depo-iq-frontend

CI/CD
This project uses GitLab CI/CD for automated testing and deployment.
