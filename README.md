# Depo IQ

**Depo IQ** is a full-stack application for managing topics, built with modern technologies for scalability, security, and performance. The application is containerized using Docker and interacts with MongoDB for data persistence and Redis for caching.

## Features

- Full-stack application with a Next.js frontend and Node.js backend.
- GraphQL API for efficient data management.
- Caching with Redis for optimized performance.
- Responsive UI with TailwindCSS and Ant Design.
- Secure data storage with MongoDB encryption.

---

## Project Structure

depo-iq/ ├── frontend/ # React-based frontend ├── backend/ # Node.js and GraphQL backend ├── docker-compose.yml # Docker setup └── README.md # Main project README

---

## Prerequisites

- Node.js >= 16.x
- Docker and Docker Compose

---

## Setup and Run Instructions

### Frontend

1. Navigate to the frontend directory:
   cd frontend
   Install dependencies and start the server:

npm install
npm run dev
Access at http://localhost:3000.

Backend
Navigate to the backend directory:

cd backend
Install dependencies and start the server:

npm install
npm run dev
Access the GraphQL Playground at http://localhost:4000/graphql.

Docker Setup
Build and start the containers:

docker-compose up --build
Access the application at http://localhost:3000.

CI/CD
GitLab CI/CD pipelines are configured for automated testing and deployment.
