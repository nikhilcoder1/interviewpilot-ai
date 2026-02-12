![Next.js](https://img.shields.io/badge/Next.js-16-black)
![Firebase](https://img.shields.io/badge/Firebase-Auth%20%26%20Firestore-orange)
![Gemini](https://img.shields.io/badge/Gemini-AI-blue)
![Vapi](https://img.shields.io/badge/Vapi-Voice%20AI-purple)

# InterviewPilot AI - Project Summary

## Overview

InterviewPilot AI is a real-time AI-powered voice interview platform that simulates technical and HR interviews using conversational voice agents. 

Users can take live AI-driven interviews, receive structured performance feedback, and track improvement over time through an analytics dashboard.

This project is designed as a SaaS-ready production MVP — not a demo.

---

## ✨ Why InterviewPilot?

Most mock interview platforms:
- Use text-based chatbots
- Provide generic feedback
- Lack structured performance tracking

InterviewPilot goes further by offering:

- 🎙 Real-time voice-based interviews
- 🧠 Adaptive AI question generation
- 📊 Structured performance analytics
- 📄 Resume-based custom interviews
- 💳 SaaS-ready credit-based model

Built with scalability, modular architecture, and production-quality practices.

---

## 🎯 What's Been Built

### Full-Stack SaaS Architecture
- **Frontend**: Next.js 15 (App Router), React 19, TypeScript
- **Backend**: Firebase (Authentication + Firestore)
- **AI Engine**: Google Gemini (question generation + feedback)
- **Voice Layer**: Vapi AI (real-time conversational agent)
- **Validation**: Zod schema validation
- **UI**: Tailwind CSS + shadcn/ui
- **Deployment**: Vercel

---

## 🚀 Core Features

### 1️⃣ Authentication
- Secure Email/Password authentication via Firebase
- Protected dashboard routes
- User metadata storage (plan, credits, usage)

---

### 2️⃣ AI Interview Generation
- Select role (Frontend, Backend, HR, DSA, etc.)
- Choose difficulty level
- Gemini generates structured interview questions
- Vapi conducts voice-based interview session

---

### 3️⃣ Real-Time Voice Interview
- AI voice agent asks questions
- User responds via microphone
- Transcript captured and stored
- Dynamic follow-up questions generated

---

### 4️⃣ AI-Powered Feedback System
After interview completion:
- Technical Knowledge Score
- Communication Score
- Confidence Score
- Strength Analysis
- Weakness Breakdown
- Personalized Improvement Suggestions

All feedback is structured and stored for analytics.

---

### 5️⃣ Dashboard & Analytics
- View interview history
- Performance trend tracking
- Score improvement charts
- Weak topic identification
- Detailed transcript review

---

### 6️⃣ SaaS-Ready Credit System
- Free plan with limited interview credits
- Pro plan with unlimited interviews
- Credit deduction per interview
- Usage tracking per user

---

## 📁 Project Structure

```
interviewpilot-ai/
├── app/
│ ├── api/                # Backend endpoints
│ ├── dashboard/          # User dashboard
│ ├── interview/          # Interview session pages
│ ├── auth/               # Login & Signup
│ └── page.tsx            # Landing page
│
├── components/
│ ├── ui/                 # Reusable UI components
│ ├── interview/          # Interview-related UI
│ └── dashboard/          # Dashboard components
│
├── lib/
│ ├── firebase.ts         # Firebase config
│ ├── gemini.ts           # Gemini integration
│ ├── vapi.ts             # Vapi integration
│ └── utils.ts
│
├── services/
│ ├── interview.service.ts
│ ├── feedback.service.ts
│ └── credit.service.ts
│
├── schemas/
│ └── interview.schema.ts
│
├── types/
│ └── index.ts
│
├── README.md
└── .env.local
```

---

## 🔑 Required Setup

### 1. Firebase
- Enable Email/Password Authentication
- Create Firestore Database
- Add security rules

---

### 2. Google Gemini API
- Get API key from Google AI Studio
- Add to `.env.local`

---

### 3. Vapi AI
- Create voice agent
- Configure API key
- Connect to interview session

---

## 🔐 Environment Variables

Create `.env.local`:


```
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=

GEMINI_API_KEY=
VAPI_API_KEY=
```

---

## 🎨 Design System

### Visual Philosophy
- Clean, modern SaaS layout
- Minimal distraction during interviews
- Professional interview environment feel

### UI Characteristics
- Rounded corners (2xl)
- Smooth transitions
- Dark/Light mode
- Structured dashboard layout
- Real-time loading indicators

---

## 💰 Business Model

### Free Plan
- 2 interviews/month
- Basic feedback
- Standard question set

### Pro Plan
- Unlimited interviews
- Resume-based custom interviews
- Advanced analytics
- Adaptive AI difficulty

---

## 📊 Technical Highlights

### Real-Time System Design
- Voice input → Transcript → AI analysis pipeline
- Modular AI service layer
- Structured Firestore schema
- Credit-based access control

### Security
- Protected routes
- Environment variable safety
- Firestore security rules
- Input validation via Zod

### Performance
- Lazy loading components
- Optimized API calls
- Minimal re-renders
- Structured data storage for analytics

---

## 🔄 Interview Flow Architecture

```
User Starts Interview
        ↓
Gemini Generates Questions
        ↓
Vapi Conducts Voice Session
        ↓
Transcript Captured
        ↓
Gemini Evaluates Responses
        ↓
Structured Feedback Stored
        ↓
Dashboard Updated
```

---

## 📈 Metrics To Track (Post Launch)

- Total interviews conducted
- Average score per user
- Free → Pro conversion rate
- Most selected job roles
- Interview completion rate
- Average response length
- Weak topic trends

---

## 🔜 Future Enhancements

- Resume PDF upload → custom interview mode
- AI adaptive difficulty engine
- Interview replay (audio playback)
- Coding round simulation with timer
- Admin analytics dashboard
- Team-based mock interview mode
- Multi-language support
- Stripe integration for subscriptions

---

## 🛠️ Tech Stack Summary

| Category | Technology |
|----------|------------|
| Framework | Next.js 16 |
| Language | TypeScript |
| Styling | Tailwind CSS |
| UI | shadcn/ui |
| Backend | Firebase |
| AI | Google Gemini |
| Voice | Vapi AI |
| Validation | Zod |
| Deployment | Vercel |

---

## 🎓 Engineering Goals

- Clean, scalable architecture
- Service-layer abstraction
- Reusable component design
- Production-ready code quality
- SaaS-ready business logic

---

## 🚀 Deployment

1. Push to GitHub
2. Import to Vercel
3. Add environment variables
4. Deploy
5. Test interview flow
6. Launch 🚀

---

## 🧠 Resume Highlight

> Architected and deployed a real-time AI voice interview SaaS platform integrating Vapi AI for conversational voice agents and Google Gemini for adaptive interview generation and structured performance analytics using Next.js and Firebase.

---

## 📜 License

MIT

---

## 🔥 Status

🚧 In Active Development (SaaS-Ready Architecture)