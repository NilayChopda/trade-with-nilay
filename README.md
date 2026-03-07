# Trade with Nilay

This is the main repository for Trade with Nilay, containing both the React frontend and FastAPI backend.

## Structure

- `/frontend`: React application using TailwindCSS, Recharts, and Framer Motion.
- `/backend`: FastAPI backend for pattern detection.
- `.env.example`: Environment variables template.

## Running Locally

### Frontend

Navigate to the frontend directory and start the development server:

```bash
cd frontend
npm install
npm run dev
```

### Backend

Navigate to the backend directory, install requirements, and run the FastAPI server:

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

## Deployment

- **Frontend**: Automatically deployed to Vercel upon pushing to the main branch.
- **Backend**: Automatically deployed to Render upon pushing to the main branch.
