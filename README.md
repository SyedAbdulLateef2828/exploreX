# ExploreX 2.0

**AI-Powered Career, Mentorship, Entrepreneurship & Opportunity Discovery Platform**

## 🚀 Tech Stack

### Frontend
- React.js 18 + Vite
- Tailwind CSS
- Framer Motion (Animations)
- React Router DOM
- Axios
- Lucide React Icons
- Recharts (Charts)

### Backend
- Node.js + Express.js
- MongoDB Atlas + Mongoose
- JWT Authentication
- bcryptjs
- Helmet, CORS, Rate Limiting

## 📁 Project Structure

```
explorex/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── layout/          # Navbar, Footer
│   │   │   ├── ui/              # GlassCard, GradientButton, AnimatedSection
│   │   │   ├── landing/         # Landing page sections
│   │   │   ├── career/          # Career components
│   │   │   ├── mentor/          # Mentor components
│   │   │   ├── skill/           # Skill components
│   │   │   ├── business/        # Business components
│   │   │   ├── quiz/            # Quiz components
│   │   │   ├── profile/         # Profile components
│   │   │   ├── settings/        # Settings components
│   │   │   ├── internship/      # Internship components
│   │   │   ├── salary/          # Salary components
│   │   │   ├── comparison/      # Comparison components
│   │   │   ├── success-stories/ # Success stories components
│   │   │   └── ai-tools/        # AI tools components
│   │   ├── pages/               # All page components
│   │   ├── hooks/               # Custom hooks
│   │   ├── contexts/            # Auth & Theme contexts
│   │   ├── services/            # API services
│   │   ├── utils/               # Utility functions
│   │   ├── data/                # Fake data
│   │   └── styles/              # Global styles
│   ├── public/                  # Static assets
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── postcss.config.js
│
└── backend/
    ├── config/
    │   └── db.js                 # Database configuration
    ├── controllers/
    │   ├── auth.controller.js    # Auth logic
    │   ├── user.controller.js    # User logic
    │   ├── quiz.controller.js    # Quiz logic
    │   └── booking.controller.js # Booking logic
    ├── models/
    │   ├── User.js               # User schema
    │   ├── QuizResult.js         # Quiz result schema
    │   └── Booking.js            # Booking schema
    ├── routes/
    │   ├── auth.routes.js
    │   ├── user.routes.js
    │   ├── quiz.routes.js
    │   └── booking.routes.js
    ├── middleware/
    │   └── auth.middleware.js    # JWT protection
    ├── server.js
    ├── package.json
    └── .env
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- MongoDB Atlas account (or local MongoDB)

### 1. Clone and Setup

```bash
git clone <repository-url>
cd explorex
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create `.env` file:
```env
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
FRONTEND_URL=http://localhost:3000
```

Start backend:
```bash
npm run dev
```

### 3. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

## 📱 Features

### Core Features
1. **Smart Authentication & Onboarding** - JWT auth with personalized profiles
2. **AI Career Compatibility Score** - Quiz-based career matching
3. **Personalized Career Explorer** - Domain-specific career recommendations
4. **Integrated Mentorship System** - Book sessions with industry experts
5. **Skill & Course Explorer** - Learning roadmaps with resources
6. **Career Comparison Tool** - Side-by-side career comparison
7. **Future Salary Predictor** - Salary progression visualization
8. **Entrepreneurship Hub** - Business ideas and roadmaps
9. **AI Business & Freelancing Hub** - AI tools for income generation
10. **Success Stories & Career Journeys** - Real student journeys
11. **Internship & Opportunity Hub** - Apply to internships
12. **Mock Interview** - Practice interviews

### Design Features
- Dark mode by default
- Glassmorphism UI
- Framer Motion animations
- Responsive mobile-first design
- Modern SaaS aesthetic (Linear/Stripe inspired)

## 🎨 Color System

| Token | Value | Usage |
|-------|-------|-------|
| Primary | #6366F1 | Buttons, links, accents |
| Secondary | #8B5CF6 | Gradients, highlights |
| Accent | #06B6D4 | Information, alerts |
| Success | #22C55E | Success states |
| Background | #0F172A | Main background |
| Card | #1E293B | Card backgrounds |
| Text | #F8FAFC | Primary text |
| Muted | #94A3B8 | Secondary text |

## 📄 API Endpoints

### Auth
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user

### Users
- `PUT /api/users/profile` - Update profile
- `GET /api/users/mentors` - Get all mentors

### Quiz
- `POST /api/quiz/results` - Save quiz result
- `GET /api/quiz/results` - Get quiz history

### Bookings
- `POST /api/bookings` - Create booking
- `GET /api/bookings` - Get bookings
- `PUT /api/bookings/:id/status` - Update booking status

## 🚀 Deployment

### Frontend (Vercel)
```bash
cd frontend
vercel --prod
```

### Backend (Vercel/Railway/Render)
```bash
cd backend
# Set environment variables
# Deploy to platform of choice
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

MIT License - see LICENSE file for details

## 👥 Team

Built with ❤️ for students across India

---

**ExploreX** - "Explore Careers, Skills, Businesses, Mentorships, AI Opportunities, and Internships Before Choosing Your Future."
