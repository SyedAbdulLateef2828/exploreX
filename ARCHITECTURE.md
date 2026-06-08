# ExploreX 2.0 - Complete Architecture Documentation

## 📐 System Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        CLIENT LAYER                              │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐             │
│  │   Web App   │  │  Mobile App │  │   PWA       │             │
│  │  (React)    │  │  (Future)   │  │  (Future)   │             │
│  └──────┬──────┘  └──────┬──────┘  └──────┬──────┘             │
└─────────┼────────────────┼────────────────┼────────────────────┘
          │                │                │
          └────────────────┴────────────────┘
                           │
                    ┌──────▼──────┐
                    │   Vercel    │
                    │   (CDN)     │
                    └──────┬──────┘
                           │ HTTPS
┌──────────────────────────┼──────────────────────────────────────┐
│                     API GATEWAY LAYER                            │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │              Express.js Server (Node.js)                │   │
│  │  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────────┐   │   │
│  │  │  Auth   │ │  Quiz   │ │ Booking │ │   Users     │   │   │
│  │  │ Routes  │ │ Routes  │ │ Routes  │ │   Routes    │   │   │
│  │  └────┬────┘ └────┬────┘ └────┬────┘ └──────┬──────┘   │   │
│  │       │           │           │             │          │   │
│  │  ┌────▼───────────▼───────────▼─────────────▼─────┐    │   │
│  │  │         Middleware Stack                        │    │   │
│  │  │  • JWT Authentication                         │    │   │
│  │  │  • Rate Limiting (100 req/15min)              │    │   │
│  │  │  • CORS Protection                            │    │   │
│  │  │  • Helmet Security Headers                    │    │   │
│  │  │  • Request Compression                        │    │   │
│  │  └─────────────────────────────────────────────┘    │   │
│  └─────────────────────────────────────────────────────────┘   │
└──────────────────────────┬──────────────────────────────────────┘
                           │
                    ┌──────▼──────┐
                    │ MongoDB Atlas│
                    │  (Database)  │
                    └─────────────┘
```

## 🎯 Feature Architecture

### 1. Smart Authentication & Onboarding
- **Components**: LoginPage, RegisterPage, AuthContext
- **Backend**: JWT tokens, bcrypt password hashing
- **Flow**: Register → Login → Token Storage → Protected Routes
- **Database**: Users collection

### 2. AI Career Compatibility Score
- **Components**: CareerQuiz, QuizResults
- **Logic**: 15 questions across 8 categories (analytical, creative, technical, etc.)
- **Scoring**: Weighted algorithm mapping responses to career scores
- **Backend**: QuizResults collection

### 3. Personalized Career Explorer
- **Components**: CareerExplorer, CareerDetails
- **Data**: 4 categories (Engineering, Commerce, Healthcare, Business)
- **Features**: Search, filter, sort, detailed career views
- **Data Structure**: Career cards with skills, salary, mentors, internships

### 4. Integrated Mentorship System
- **Components**: MentorExplorer, MentorDetails
- **Features**: Mentor cards, booking system, availability calendar
- **Backend**: Bookings collection with status tracking

### 5. Skill & Course Explorer
- **Components**: SkillExplorer, SkillDetails
- **Features**: Roadmaps, tools, career/business opportunities
- **Data**: 4 skills (Web Dev, AI/ML, Digital Marketing, Content Creation)

### 6. Career Comparison Tool
- **Components**: CareerComparison
- **Features**: Side-by-side comparison, 8 parameters
- **Visual**: Table with winner highlighting

### 7. Future Salary Predictor
- **Components**: SalaryPredictor
- **Features**: Bar charts, progression visualization
- **Data**: 4 stages (Fresher, 3yr, 5yr, 10yr)

### 8. Entrepreneurship Hub
- **Components**: BusinessExplorer
- **Features**: Business ideas, investment/revenue data, roadmaps
- **Data**: 4 business models (AI Agency, Content Agency, SaaS, Online Course)

### 9. AI Business & Freelancing Hub
- **Components**: AIToolsHub
- **Features**: AI tools catalog, use cases, business ideas, income potential
- **Data**: 6 tools (ChatGPT, Claude, Canva AI, Runway, Cursor, CapCut)

### 10. Success Stories & Career Journeys
- **Components**: SuccessStories
- **Features**: Timeline UI, journey visualization, quotes
- **Data**: 3 stories (Ravi, Priya, Arjun)

### 11. Internship & Opportunity Hub
- **Components**: InternshipHub
- **Features**: Job listings, filtering, application buttons
- **Data**: 6 internships across domains

### 12. Mock Interview (Static Data)
- **Data**: Technical, HR, Domain questions with answers
- **Integration**: Available in fakeData.js

## 🗄️ Database Schema

### Users Collection
```javascript
{
  _id: ObjectId,
  name: String (required, max 50),
  email: String (required, unique, validated),
  password: String (required, min 6, hashed),
  phone: String,
  education: String,      // 10th, 12th, B.Tech, etc.
  degree: String,         // MPC, BiPC, Engineering, etc.
  interests: String,
  hobbies: String,
  goals: String,
  avatar: String,         // URL to image
  role: String,           // enum: ['student', 'mentor', 'admin']
  isActive: Boolean,
  lastLogin: Date,
  createdAt: Date,
  updatedAt: Date
}
```

### QuizResults Collection
```javascript
{
  _id: ObjectId,
  user: ObjectId (ref: Users),
  answers: [{
    questionId: Number,
    category: String,     // analytical, creative, etc.
    value: Number         // 1-5 scale
  }],
  results: [{
    career: String,
    score: Number,        // 0-100 match percentage
    description: String
  }],
  topCareer: String,
  completedAt: Date,
  createdAt: Date,
  updatedAt: Date
}
```

### Bookings Collection
```javascript
{
  _id: ObjectId,
  student: ObjectId (ref: Users),
  mentor: ObjectId (ref: Users),
  date: Date,
  timeSlot: String,       // e.g., "10:00 AM - 11:00 AM"
  status: String,         // enum: ['pending', 'confirmed', 'completed', 'cancelled']
  price: Number,
  notes: String,
  meetingLink: String,    // Zoom/Google Meet URL
  feedback: {
    rating: Number,
    comment: String
  },
  createdAt: Date,
  updatedAt: Date
}
```

## 🔌 API Architecture

### Authentication Flow
```
POST /api/auth/register
├── Body: { name, email, password, education, degree }
├── Response: { success, token, user }
└── Error: 400 (user exists), 500 (server error)

POST /api/auth/login
├── Body: { email, password }
├── Response: { success, token, user }
└── Error: 401 (invalid credentials), 500 (server error)

GET /api/auth/me
├── Headers: Authorization: Bearer <token>
├── Response: { success, user }
└── Error: 401 (unauthorized), 500 (server error)
```

### User Management Flow
```
PUT /api/users/profile
├── Headers: Authorization: Bearer <token>
├── Body: { name, phone, education, degree, interests, hobbies, goals }
├── Response: { success, user }
└── Error: 401 (unauthorized), 500 (server error)

GET /api/users/mentors
├── Headers: Authorization: Bearer <token>
├── Response: { success, users }
└── Error: 401 (unauthorized), 500 (server error)
```

### Quiz Flow
```
POST /api/quiz/results
├── Headers: Authorization: Bearer <token>
├── Body: { answers, results, topCareer }
├── Response: { success, quizResult }
└── Error: 401 (unauthorized), 500 (server error)

GET /api/quiz/results
├── Headers: Authorization: Bearer <token>
├── Response: { success, quizResults }
└── Error: 401 (unauthorized), 500 (server error)
```

### Booking Flow
```
POST /api/bookings
├── Headers: Authorization: Bearer <token>
├── Body: { mentor, date, timeSlot, price, notes }
├── Response: { success, booking }
└── Error: 401 (unauthorized), 500 (server error)

GET /api/bookings
├── Headers: Authorization: Bearer <token>
├── Response: { success, bookings }
└── Error: 401 (unauthorized), 500 (server error)

PUT /api/bookings/:id/status
├── Headers: Authorization: Bearer <token>
├── Body: { status }
├── Response: { success, booking }
└── Error: 401 (unauthorized), 404 (not found), 500 (server error)
```

## 🎨 UI/UX Architecture

### Design System
```
Color Palette:
├── Primary: #6366F1 (Indigo)
├── Secondary: #8B5CF6 (Violet)
├── Accent: #06B6D4 (Cyan)
├── Success: #22C55E (Green)
├── Background: #0F172A (Slate 900)
├── Card: #1E293B (Slate 800)
├── Text: #F8FAFC (Slate 50)
└── Muted: #94A3B8 (Slate 400)

Typography:
├── Font: Poppins (primary), Inter (fallback)
├── Headings: Bold (700-800)
├── Body: Medium (400-500)
└── Scale: xs (12px) to 7xl (72px)

Spacing:
├── Section Padding: py-16 to py-24
├── Card Padding: p-6
├── Grid Gap: gap-6
└── Component Gap: space-y-4 to space-y-6

Border Radius:
├── Buttons: rounded-xl (12px)
├── Cards: rounded-2xl (16px)
├── Avatars: rounded-full
└── Badges: rounded-md (6px)

Shadows:
├── Glass: backdrop-blur-lg + border-white/10
├── Soft: 0 4px 20px -2px rgba(0,0,0,0.2)
├── Neon: 0 0 20px rgba(99,102,241,0.5)
└── Card: 0 8px 32px 0 rgba(31,38,135,0.37)
```

### Animation System
```
Framer Motion Patterns:
├── Page Transitions: AnimatePresence + motion.div
├── Card Hover: whileHover={{ y: -4, scale: 1.02 }}
├── Button Press: whileTap={{ scale: 0.95 }}
├── Scroll Reveal: useInView + AnimatedSection
├── Stagger Children: staggerChildren: 0.1
├── Progress Bars: animate={{ width: "75%" }}
└── Floating Elements: animate={{ y: [0, -20, 0] }}
```

## 📱 Responsive Breakpoints

```
Mobile First:
├── Default: < 640px (sm)
├── sm: >= 640px
├── md: >= 768px
├── lg: >= 1024px
├── xl: >= 1280px
└── 2xl: >= 1536px

Layout Adaptations:
├── Mobile: Single column, hamburger menu, stacked cards
├── Tablet: 2 columns, expanded navigation
├── Desktop: 3-4 columns, full navigation, sidebar layouts
```

## 🔒 Security Architecture

```
Authentication:
├── JWT Tokens (30-day expiry)
├── bcryptjs Password Hashing (12 rounds)
├── Protected Routes (middleware)
└── Token Refresh Strategy

API Security:
├── Helmet.js (security headers)
├── CORS (origin whitelist)
├── Rate Limiting (100 req/15min)
├── Input Validation (express-validator)
└── Error Handling (no stack traces in prod)

Data Security:
├── MongoDB Atlas (SSL/TLS)
├── Environment Variables (.env)
├── No sensitive data in frontend
└── Password never returned in API
```

## 🚀 Deployment Architecture

```
Development:
├── Frontend: Vite dev server (localhost:3000)
├── Backend: Nodemon (localhost:5000)
└── Database: MongoDB Atlas or local

Production:
├── Frontend: Vercel (static hosting + CDN)
├── Backend: Vercel Serverless / Railway / Render
├── Database: MongoDB Atlas (M10 cluster)
└── Domain: Custom domain with SSL

CI/CD Pipeline:
├── GitHub Actions (lint, test, build)
├── Vercel auto-deploy on push
├── Environment-specific configs
└── Monitoring with Vercel Analytics
```

## 📊 Performance Optimizations

```
Frontend:
├── Code Splitting (React.lazy + Suspense)
├── Image Optimization (WebP, lazy loading)
├── Font Optimization (preload, display=swap)
├── CSS Purging (Tailwind JIT mode)
├── Component Memoization (React.memo)
└── State Management (Context API)

Backend:
├── Response Compression (gzip)
├── Database Indexing (email, role)
├── Query Optimization (select fields)
├── Caching Strategy (Redis future)
└── Connection Pooling (MongoDB)
```

## 🧪 Testing Strategy

```
Unit Tests:
├── Jest + React Testing Library
├── Component rendering tests
├── Hook behavior tests
└── Utility function tests

Integration Tests:
├── API endpoint tests (Supertest)
├── Authentication flow tests
├── Database operation tests
└── Mock data validation

E2E Tests:
├── Cypress/Playwright (future)
├── User journey tests
├── Cross-browser testing
└── Mobile responsiveness tests
```

## 🗺️ Development Roadmap

### Phase 1: MVP (Hackathon)
- ✅ All core features implemented
- ✅ Fake data for demo
- ✅ JWT authentication
- ✅ Responsive design
- ✅ Dark mode UI

### Phase 2: Production Ready
- 🔄 Real mentor profiles
- 🔄 Live internship API integration
- 🔄 Payment gateway (Razorpay/Stripe)
- 🔄 Video call integration (Zoom API)
- 🔄 Email notifications (SendGrid)

### Phase 3: Scale
- 🔄 AI recommendation engine (OpenAI API)
- 🔄 Mobile app (React Native)
- 🔄 Real-time chat (Socket.io)
- 🔄 Analytics dashboard (Mixpanel)
- 🔄 Multi-language support

### Phase 4: Enterprise
- 🔄 College/institution partnerships
- 🔄 White-label solution
- 🔄 Advanced analytics
- 🔄 API for third-party integrations
- 🔄 Enterprise support
