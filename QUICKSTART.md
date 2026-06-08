# ExploreX 2.0 - Quick Start Guide

## 🚀 5-Minute Setup

### Step 1: Install Dependencies

```bash
# Terminal 1 - Backend
cd explorex/backend
npm install

# Terminal 2 - Frontend
cd explorex/frontend
npm install
```

### Step 2: Configure Environment

```bash
# In backend/.env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/explorex
JWT_SECRET=explorex_hackathon_secret_2024
FRONTEND_URL=http://localhost:3000
```

### Step 3: Start Development Servers

```bash
# Terminal 1 - Backend
cd explorex/backend
npm run dev
# Server running on http://localhost:5000

# Terminal 2 - Frontend
cd explorex/frontend
npm run dev
# App running on http://localhost:3000
```

### Step 4: Open Browser

Navigate to `http://localhost:3000` and explore the platform!

## 🎯 Demo Credentials

For testing without registration:
- Email: demo@explorex.com
- Password: demo123

## 📱 Pages Available

| Page | Route | Description |
|------|-------|-------------|
| Landing | `/` | Hero, features, stats, CTA |
| Login | `/login` | JWT authentication |
| Register | `/register` | Account creation with education |
| Dashboard | `/dashboard` | Personalized student dashboard |
| Career Quiz | `/quiz` | 15-question AI assessment |
| Career Explorer | `/careers` | Browse all career paths |
| Career Details | `/careers/:id` | Detailed career info |
| Mentors | `/mentors` | Expert mentor directory |
| Mentor Details | `/mentors/:id` | Book mentorship sessions |
| Skills | `/skills` | Learning roadmaps |
| Skill Details | `/skills/:id` | Step-by-step guides |
| Comparison | `/compare` | Side-by-side career compare |
| Salary | `/salary-predictor` | Salary progression charts |
| Business | `/business` | Entrepreneurship ideas |
| AI Tools | `/ai-tools` | AI-powered income tools |
| Internships | `/internships` | Job opportunities |
| Success Stories | `/success-stories` | Student journeys |
| Profile | `/profile` | Edit student profile |
| Settings | `/settings` | App preferences |

## 🎨 Customization

### Change Colors
Edit `frontend/tailwind.config.js`:
```javascript
colors: {
  primary: { DEFAULT: '#6366F1' },
  secondary: { DEFAULT: '#8B5CF6' },
  accent: { DEFAULT: '#06B6D4' },
}
```

### Add More Careers
Edit `frontend/src/data/fakeData.js`:
```javascript
export const careerCategories = [
  // Add new categories and careers here
];
```

### Add More Mentors
Edit `frontend/src/data/fakeData.js`:
```javascript
export const mentorsData = [
  // Add new mentor objects here
];
```

## 🔧 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000
npx kill-port 3000

# Or change port in vite.config.js
server: { port: 3001 }
```

### MongoDB Connection Error
```bash
# Ensure MongoDB is running
mongod --dbpath /path/to/data

# Or use MongoDB Atlas (cloud)
# Update MONGODB_URI in .env
```

### Module Not Found
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

## 📦 Build for Production

```bash
# Frontend
cd frontend
npm run build
# Output in frontend/dist/

# Backend
cd backend
npm start
```

## 🚀 Deploy to Vercel

```bash
# Frontend
cd frontend
vercel --prod

# Backend (separate project)
cd backend
vercel --prod
```

## 🤝 Need Help?

- Check `ARCHITECTURE.md` for detailed system design
- Check `README.md` for full documentation
- All components are in `frontend/src/components/`
- All pages are in `frontend/src/pages/`
- All data is in `frontend/src/data/fakeData.js`

---

**Built for Hackathons. Ready for Production.** 🚀
