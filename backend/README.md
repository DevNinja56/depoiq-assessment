# Depo IQ Backend

## Overview

This is the backend for **Depo IQ**, developed using Node.js and GraphQL. It handles API endpoints for managing topics, caching with Redis, and persistent storage in MongoDB.

## Features

- **GraphQL API**: Provides endpoints for fetching and adding topics.
- **Caching**: Topics data is cached using Redis for performance optimization.
- **Authentication**: Basic authentication implemented using Clerk.
- **Data Security**: Data in MongoDB is encrypted.

---

## Prerequisites

- Node.js >= 16.x
- Docker and Docker Compose

---

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/DevNinja56/depoiq-assessment
   cd depo-iq/backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Access the GraphQL Playground at [http://localhost:4000/graphql](http://localhost:4000/graphql).

---

## Scripts

- `dev`: Start the development server.
- `start`: Start the production server.

---

## API Endpoints

- `GET /api/topics`: Fetch topics (cached using Redis).
- `POST /api/topics`: Add a new topic and update the cache.

---

## Technologies

- **Runtime**: Node.js
- **Framework**: Express.js
- **API**: GraphQL
- **Database**: MongoDB
- **Caching**: Redis

---

## Security

- **Authentication**: Implemented via Clerk.
- **Data Encryption**: MongoDB data is encrypted.

---

## Docker Setup

1. Build the Docker image:
   ```bash
   docker build -t depo-iq-backend .
   ```
2. Run the Docker container:
   ```bash
   docker run -p 4000:4000 depo-iq-backend
   ```
