# Depo IQ Frontend

## Overview

This is the frontend for **Depo IQ**, built using React.js, Ant Design, and TailwindCSS. It provides a responsive, modern UI for managing topics, including listing and adding topics.

## Features

- **Topics Listing Page**: Displays all topics with pagination or infinite scrolling.
- **Add Topic Form**: A form to submit new topics with client-side validation.
- **Responsive Design**: Ensures optimal experience on all devices.
- **API Integration**: Communicates with the backend GraphQL API.

---

## Prerequisites

- Node.js >= 18.x
- Yarn or npm

---

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/DevNinja56/depoiq-assessment
   cd depo-iq/frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Access the application at [http://localhost:5173](http://localhost:5173).

---

## Scripts

- `dev`: Start the development server.
- `build`: Build the application for production.
- `start`: Start the production server.

---

## Technologies

- **Framework**: React.Js
- **Styling**: TailwindCSS and Ant Design
- **State Management**: React Hooks

---

## Testing

Unit testing and End-to-End (E2E) testing are implemented using Playwright.

Run the tests:

```bash
npm run test
```

---

## Docker Setup

1. Build the Docker image:
   ```bash
   docker build -t depo-iq-frontend .
   ```
2. Run the Docker container:
   ```bash
   docker run -p 3000:3000 depo-iq-frontend
   ```
