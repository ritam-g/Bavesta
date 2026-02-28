# Bavesta Hospitality Services Platform (MERN)

Production-ready MERN web application for a premium Hospitality Services company.

## Core Capabilities

- Corporate service website with premium animated UI
- Services catalog with dynamic service detail pages
- Inquiry submission workflow with DB persistence
- Email confirmation + admin notification for inquiries
- Protected admin panel for:
  - Service CRUD
  - Inquiry status updates and deletion
- Secure backend (JWT, bcrypt, Helmet, rate limiting, validation)

## Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- Framer Motion
- React Router DOM
- Axios
- Context API (Auth)
- React Helmet Async (SEO)

### Backend
- Node.js
- Express
- MongoDB + Mongoose
- JWT + bcryptjs
- Helmet + express-rate-limit
- Nodemailer
- express-validator

## Architecture

### Backend (MVC)
- `models/User.js`
- `models/Service.js`
- `models/Inquiry.js`
- `controllers/authController.js`
- `controllers/serviceController.js`
- `controllers/inquiryController.js`
- `routes/authRoutes.js`
- `routes/serviceRoutes.js`
- `routes/inquiryRoutes.js`

### Frontend
- Public pages: `Home`, `Services`, `ServiceDetails`, `About`, `Contact`
- Admin pages: `Login`, `Dashboard`, `ManageServices`, `ManageInquiries`
- Reusable components for animations, cards, forms, and SEO

## API Endpoints

### Auth
- `POST /api/auth/login`

### Services
- `GET /api/services`
- `GET /api/services/:id`
- `POST /api/services` (admin)
- `PUT /api/services/:id` (admin)
- `DELETE /api/services/:id` (admin)

### Inquiries
- `POST /api/inquiries`
- `GET /api/inquiries` (admin)
- `PUT /api/inquiries/:id` (admin)
- `DELETE /api/inquiries/:id` (admin)

## Local Setup

### 1. Install dependencies

```bash
cd backend
npm install

cd ../frontend
npm install
```

### 2. Configure environment files

Backend:

```bash
cd backend
cp .env.example .env
```

Set values for:
- `MONGO_URI`
- `JWT_SECRET`
- `ADMIN_EMAIL`, `ADMIN_PASSWORD`, `ADMIN_NAME`
- SMTP variables for email sending
- `FRONTEND_URL`

Frontend:

```bash
cd ../frontend
cp .env.example .env
```

Set:
- `VITE_API_BASE_URL` (e.g. `http://localhost:5000/api`)
- `VITE_SITE_NAME`

### 3. Run development

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

## Deployment

### Backend (Render / Railway)
- Root: `backend`
- Build: `npm install`
- Start: `npm start`
- Set backend environment variables in provider dashboard

### Frontend (Vercel)
- Root: `frontend`
- Build: `npm run build`
- Output: `dist`
- Env var: `VITE_API_BASE_URL=https://<backend-domain>/api`

## Security Notes

- Password hashing with bcrypt
- JWT-protected admin routes
- Helmet security headers
- Rate limiting enabled
- Request validation with express-validator
- `.env` files are gitignored
