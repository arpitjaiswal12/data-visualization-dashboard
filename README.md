# Project Setup and Deployment Guide

## Step 1: Installation

### Download Zip file

### Open 2 terminals in separate windows/tabs.

#### Terminal 1: Setting Up Backend

1. Navigate to the backend directory:
    ```bash
    cd backend
    ```

2. Install the required node modules:
    ```bash
    npm install
    ```

3. Start the backend server:
    ```bash
    npm run dev
    ```

    If you are using MongoDB Compass, you can use the provided database link. If you are using MongoDB Atlas, replace the link with your own database connection string.

#### Terminal 2: Setting Up Frontend

1. Navigate to the frontend directory:
    ```bash
    cd frontend
    ```

2. Install the required node modules:
    ```bash
    npm install
    ```

3. Start the frontend server:
    ```bash
    npm start
    ```

Now, navigate to `localhost:5173` in your browser. The Backend API will be running at `localhost:3001`.

---

## Deployment Details

The backend is deployed at `https://data-visualization-dashboardbackend-gzlx56w91.vercel.app/`. You can access the given JSON data by making an API request to: 
"https://data-visualization-dashboardbackend-gzlx56w91.vercel.app/api/get/insights"

The frontend is deployed on Vercel and can be accessed at:

