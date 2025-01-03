# Depo IQ Backend

## Overview

This is the backend for **Depo IQ**, developed using Node.js and GraphQL. It handles API endpoints for managing topics, caching with Redis, and persistent storage in MongoDB.

## Features

- **GraphQL API**: Provides endpoints for fetching and adding topics.
- **Caching**: Topics data is cached using Redis for performance optimization.
- **Authentication**: Basic authentication implemented using Clerk.
- **Data Security**: Data in MongoDB is encrypted.

## Prerequisites

- Node.js >= 16.x
- Docker and Docker Compose

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/depo-iq.git
   cd depo-iq/backend
   Install dependencies:
   ```

npm install
Start the development server:

npm run dev
Access the GraphQL Playground at http://localhost:4000/graphql.

Scripts
dev: Start the development server.
start: Start the production server.
API Endpoints
GET /api/topics: Fetch topics (cached using Redis).
POST /api/topics: Add a new topic and update cache.
Technologies
Runtime: Node.js
API: GraphQL
Database: MongoDB
Caching: Redis
Security
Authentication via Clerk.
MongoDB data encryption.
Docker Setup
Build the Docker image:

docker build -t depo-iq-backend .
Run the Docker container:

docker run -p 4000:4000 depo-iq-backend
CI/CD
This project uses GitLab CI/CD for automated testing and deployment.
