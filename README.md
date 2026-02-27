# Hotel & Restaurant Management Web Application (MERN)

Production-oriented MERN stack solution for a Hotel + Restaurant business with:

- Hotel room listing and booking
- Restaurant menu showcase and table reservations
- Contact inquiry management
- Admin dashboard with protected routes
- Secure backend with JWT, bcrypt, Helmet, CORS, rate limiting

## Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- React Router DOM
- Axios
- Context API (Auth)
- Framer Motion
- React Helmet Async (SEO)

### Backend
- Node.js + Express
- MongoDB + Mongoose
- JWT authentication
- bcryptjs
- dotenv
- CORS
- Helmet
- express-rate-limit
- Multer
- Nodemailer
- express-validator

## Project Structure

- `frontend/` React + Vite application
- `backend/` Express MVC API

## Quick Start

### 1. Clone and install

```bash
cd backend
npm install

cd ../frontend
npm install
```

### 2. Configure environment

```bash
cd backend
cp .env.example .env
```

Set:
- `MONGO_URI`
- `JWT_SECRET`
- `ADMIN_EMAIL`, `ADMIN_PASSWORD`, `ADMIN_NAME`
- SMTP settings for booking/inquiry notifications
- `FRONTEND_URL`

For frontend:

```bash
cd ../frontend
cp .env.example .env
```

Set:
- `VITE_API_BASE_URL` (e.g., `http://localhost:5000/api`)

### 3. Run locally

Backend:

```bash
cd backend
npm run dev
```

Frontend:

```bash
cd frontend
npm run dev
```

## API Endpoints

- `POST /api/auth/login`
- `GET /api/rooms`
- `GET /api/rooms/:id`
- `POST /api/rooms` (admin)
- `PUT /api/rooms/:id` (admin)
- `DELETE /api/rooms/:id` (admin)
- `POST /api/bookings`
- `GET /api/bookings` (admin)
- `POST /api/reservations`
- `GET /api/reservations` (admin)
- `POST /api/contact`
- `GET /api/contact` (admin)

## Deployment

### MongoDB Atlas
Set Atlas URI in backend `MONGO_URI`.

### Backend (Render)
- Root directory: `backend`
- Build command: `npm install`
- Start command: `npm start`
- Set all backend environment variables in Render dashboard

### Frontend (Vercel)
- Root directory: `frontend`
- Build command: `npm run build`
- Output directory: `dist`
- Configure `VITE_API_BASE_URL` with deployed backend URL (`https://<backend-domain>/api`)
- `vercel.json` included for SPA route rewrites

## Security Notes

- Passwords are hashed using bcrypt
- JWT required for admin routes
- Rate limiting and Helmet enabled globally
- Input validation implemented with express-validator
- `.env` files are gitignored

## Git Workflow

Recommended branches:
- `main` -> production
- `develop` -> integration/testing
- `feature/*` -> new features
- `fix/*` -> bug fixes

Conventional commits examples:
- `feat: add room booking system`
- `fix: correct date validation`
- `refactor: improve controller logic`
- `style: update hero section design`
- `chore: setup environment variables`
