# Depo IQ

**Depo IQ** is a full-stack application for managing topics, built with modern technologies for scalability, security, and performance. The application is containerized using Docker and interacts with MongoDB for data persistence and Redis for caching.

## Features

- Full-stack application with a React.js frontend and Node.js backend.
- GraphQL API for efficient data management.
- Caching with Redis for optimized performance.
- Responsive UI with TailwindCSS and Ant Design.
- Secure data storage with MongoDB encryption.

---

## Project Structure

```
depo-iq/
├── frontend/          # React-based frontend
├── backend/           # Node.js and GraphQL backend
├── docker-compose.yml # Docker setup
└── README.md          # Main project README
```

---

## Prerequisites

- Node.js >= 18.x
- Docker and Docker Compose

---

## Setup and Run Instructions

### Frontend

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm run dev
   ```
4. Access the frontend at [http://localhost:3000](http://localhost:3000).

### Backend

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm run dev
   ```
4. Access the GraphQL Playground at [http://localhost:4000/graphql](http://localhost:4000/graphql).

### Docker Setup

1. Build and start the containers:
   ```bash
   docker-compose up --build
   ```
2. Access the application at [http://localhost:3000](http://localhost:3000).

### CI/CD

This project uses Github Actions CI/CD for automated testing and deployment.