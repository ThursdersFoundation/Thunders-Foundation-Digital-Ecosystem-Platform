
<div align="center">

<!-- 🎨 ANIMATED THUNDER LOGO -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="280" height="280">
  <defs>
    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="6" result="blur1"/>
      <feGaussianBlur stdDeviation="12" result="blur2"/>
      <feGaussianBlur stdDeviation="20" result="blur3"/>
      <feMerge>
        <feMergeNode in="blur3"/>
        <feMergeNode in="blur2"/>
        <feMergeNode in="blur1"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
    <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="15" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
    <linearGradient id="boltGrad" x1="0%" y1="0%" x2="30%" y2="100%">
      <stop offset="0%" stop-color="#FFF7AA"/>
      <stop offset="25%" stop-color="#FFD700"/>
      <stop offset="55%" stop-color="#FFA500"/>
      <stop offset="100%" stop-color="#FF6B00"/>
    </linearGradient>
    <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFD700"/>
      <stop offset="50%" stop-color="#FF8C00"/>
      <stop offset="100%" stop-color="#FFD700"/>
    </linearGradient>
    <radialGradient id="bgGlow" cx="50%" cy="45%" r="50%">
      <stop offset="0%" stop-color="#FFD700" stop-opacity="0.15"/>
      <stop offset="60%" stop-color="#FF8C00" stop-opacity="0.05"/>
      <stop offset="100%" stop-color="#000" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <!-- Background -->
  <rect width="400" height="400" rx="30" fill="#0A0A0F"/>

  <!-- Ambient glow -->
  <circle cx="200" cy="185" r="160" fill="url(#bgGlow)">
    <animate attributeName="r" values="155;170;155" dur="3s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="1;0.6;1" dur="3s" repeatCount="indefinite"/>
  </circle>

  <!-- Outer rotating ring -->
  <circle cx="200" cy="200" r="140" fill="none" stroke="url(#ringGrad)" stroke-width="1" stroke-dasharray="8 12" opacity="0.4">
    <animateTransform attributeName="transform" type="rotate" from="0 200 200" to="360 200 200" dur="30s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.4;0.15;0.4" dur="4s" repeatCount="indefinite"/>
  </circle>

  <!-- Middle rotating ring (opposite) -->
  <circle cx="200" cy="200" r="125" fill="none" stroke="#FFD700" stroke-width="0.5" stroke-dasharray="4 20" opacity="0.25">
    <animateTransform attributeName="transform" type="rotate" from="360 200 200" to="0 200 200" dur="20s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.25;0.1;0.25" dur="3s" repeatCount="indefinite"/>
  </circle>

  <!-- Pulse ring -->
  <circle cx="200" cy="200" r="100" fill="none" stroke="#FFD700" stroke-width="1.5" opacity="0">
    <animate attributeName="r" values="95;140" dur="2.5s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.5;0" dur="2.5s" repeatCount="indefinite"/>
  </circle>
  <circle cx="200" cy="200" r="100" fill="none" stroke="#FFA500" stroke-width="1" opacity="0">
    <animate attributeName="r" values="95;140" dur="2.5s" begin="1.25s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.35;0" dur="2.5s" begin="1.25s" repeatCount="indefinite"/>
  </circle>

  <!-- Glow layer behind bolt -->
  <polygon points="225,60 155,195 205,195 145,340 275,170 215,170 270,60" fill="#FFD700" opacity="0.2" filter="url(#softGlow)">
    <animate attributeName="opacity" values="0.2;0.08;0.25;0.2" dur="2s" repeatCount="indefinite"/>
  </polygon>

  <!-- Main lightning bolt -->
  <polygon points="225,60 155,195 205,195 145,340 275,170 215,170 270,60" fill="url(#boltGrad)" filter="url(#glow)">
    <animate attributeName="opacity" values="1;0.85;1;0.9;1" dur="1.8s" repeatCount="indefinite"/>
  </polygon>

  <!-- Bright core highlight -->
  <polygon points="218,75 168,190 203,190 158,310 258,178 218,178 258,75" fill="#FFFBE6" opacity="0.5">
    <animate attributeName="opacity" values="0.5;0.25;0.5;0.3;0.5" dur="1.2s" repeatCount="indefinite"/>
  </polygon>

  <!-- Spark particles -->
  <circle cx="130" cy="170" r="2" fill="#FFD700" opacity="0" filter="url(#glow)">
    <animate attributeName="cx" values="130;100;85" dur="1.5s" repeatCount="indefinite"/>
    <animate attributeName="cy" values="170;160;150" dur="1.5s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0;0.8;0" dur="1.5s" repeatCount="indefinite"/>
    <animate attributeName="r" values="2;1;0.5" dur="1.5s" repeatCount="indefinite"/>
  </circle>
  <circle cx="270" cy="155" r="1.5" fill="#FFA500" opacity="0" filter="url(#glow)">
    <animate attributeName="cx" values="270;295;310" dur="1.8s" begin="0.5s" repeatCount="indefinite"/>
    <animate attributeName="cy" values="155;145;135" dur="1.8s" begin="0.5s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0;0.7;0" dur="1.8s" begin="0.5s" repeatCount="indefinite"/>
  </circle>
  <circle cx="170" cy="290" r="1.5" fill="#FFD700" opacity="0" filter="url(#glow)">
    <animate attributeName="cx" values="170;145;130" dur="2s" begin="0.8s" repeatCount="indefinite"/>
    <animate attributeName="cy" values="290;305;320" dur="2s" begin="0.8s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0;0.6;0" dur="2s" begin="0.8s" repeatCount="indefinite"/>
  </circle>
  <circle cx="260" cy="180" r="2" fill="#FFF7AA" opacity="0" filter="url(#glow)">
    <animate attributeName="cx" values="260;285;300" dur="1.3s" begin="1.2s" repeatCount="indefinite"/>
    <animate attributeName="cy" values="180;170;155" dur="1.3s" begin="1.2s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0;0.9;0" dur="1.3s" begin="1.2s" repeatCount="indefinite"/>
    <animate attributeName="r" values="2;1.2;0.3" dur="1.3s" begin="1.2s" repeatCount="indefinite"/>
  </circle>
  <circle cx="155" cy="200" r="1" fill="#FFD700" opacity="0" filter="url(#glow)">
    <animate attributeName="cx" values="155;120;105" dur="1.6s" begin="0.3s" repeatCount="indefinite"/>
    <animate attributeName="cy" values="200;210;220" dur="1.6s" begin="0.3s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0;0.5;0" dur="1.6s" begin="0.3s" repeatCount="indefinite"/>
  </circle>

  <!-- Text: THUNDERS -->
  <text x="200" y="378" text-anchor="middle" font-family="'Segoe UI', Arial, sans-serif" font-size="22" font-weight="700" letter-spacing="8" fill="#FFD700" opacity="0.9">THUNDERS</text>
  <text x="200" y="378" text-anchor="middle" font-family="'Segoe UI', Arial, sans-serif" font-size="22" font-weight="700" letter-spacing="8" fill="#FFD700" filter="url(#softGlow)" opacity="0.4">THUNDERS</text>

  <!-- Subtle flicker overlay on entire bolt -->
  <rect width="400" height="400" rx="30" fill="#FFD700" opacity="0">
    <animate attributeName="opacity" values="0;0.03;0;0.02;0;0;0.04;0" dur="3s" repeatCount="indefinite"/>
  </rect>
</svg>

<br/>

# ⚡ Thunders Foundation
### Digital Ecosystem Platform

**Building the future through intelligent systems, modern web technologies, and interactive digital experiences.**

[![Status](https://img.shields.io/badge/Status-Active-success?style=flat-square)]()
[![License](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)]()
[![Version](https://img.shields.io/badge/Version-0.1.0-orange?style=flat-square)]()
[![Next.js](https://img.shields.io/badge/Frontend-Next.js-black?style=flat-square&logo=next.js)]()
[![Node.js](https://img.shields.io/badge/Backend-Node.js-green?style=flat-square&logo=node.js)]()

---
```
</div>
```
## 🚀 Overview

**Thunders Foundation** is a next-generation, scalable digital infrastructure designed to integrate web applications, backend systems, artificial intelligence, and interactive environments into a unified ecosystem.

This is not just a website — it is a **complete platform** engineered to support innovation, experimentation, and real-world digital solutions.

---

## 🧠 Vision

To create a powerful digital ecosystem where:

- **Technology meets intelligence** — AI-driven features woven into every layer
- **Systems scale without limits** — Built for growth from day one
- **Innovation becomes the standard** — Not a feature, but a foundation

---

## ⚙️ Core Features

### 🌐 Web Platform
- Modern UI/UX powered by Next.js + Tailwind CSS
- High-performance rendering with SSR/SSG
- Fully responsive across all devices
- SEO-optimized architecture

### 🔐 Authentication System
- Secure login & registration flow
- Role-based access control (Admin / User)
- JWT + session-based authentication
- Protected routes & middleware

### 📊 Admin Dashboard
- Real-time user management
- Project & content management
- Analytics overview with visual charts
- System health monitoring

### 🤖 AI Integration
- AI-powered chatbot (future-ready architecture)
- Intelligent content recommendations
- Data-driven insights & reporting
- Extensible model integration layer

### 🎮 Interactive Systems
- Web-based gaming experiences
- Simulation environments
- Experimental features playground
- Real-time interaction engine

### 📡 API Infrastructure
- RESTful + GraphQL support
- Scalable microservice architecture
- Modular, versioned services
- Comprehensive API documentation

---

## 🏗️ Project Structure

```
thunders-foundation/
│
├── apps/
│   ├── web/              # Main website (Next.js)
│   ├── admin/            # Admin dashboard
│   ├── api/              # Backend API server
│   └── game/             # Interactive web game
│
├── packages/             # Shared modules & libraries
├── services/             # Microservices
├── database/             # Schema, migrations, seeds
├── ai/                   # AI models & experiments
├── infrastructure/       # DevOps, CI/CD, deployment
├── docs/                 # Technical documentation
└── assets/               # Images, branding, media
```

---

## 🧱 Tech Stack

| Layer         | Technology                          |
|---------------|-------------------------------------|
| **Frontend**  | Next.js, React, Tailwind CSS        |
| **Backend**   | Node.js, Express / FastAPI          |
| **Database**  | PostgreSQL, MongoDB                 |
| **Auth**      | JWT, NextAuth.js                    |
| **AI**        | Python, TensorFlow / PyTorch        |
| **DevOps**    | Docker, GitHub Actions, Vercel      |
| **Monitoring**| Sentry, Analytics                   |

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/thunders-foundation.git
cd thunders-foundation
```

### 2. Configure Environment

Create a `.env.local` file in the root directory:

```env
DATABASE_URL=your_database_url
API_KEY=your_api_key
JWT_SECRET=your_jwt_secret
NEXT_PUBLIC_URL=http://localhost:3000
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📊 Roadmap

### Phase 1 — Foundation
- [x] Repository & monorepo setup
- [ ] Website homepage & core pages
- [ ] Basic backend API structure

### Phase 2 — Identity
- [ ] Authentication system (login / register)
- [ ] Admin dashboard MVP
- [ ] Database integration & migrations

### Phase 3 — Intelligence
- [ ] AI integration layer
- [ ] Analytics & insights system
- [ ] Notification system

### Phase 4 — Experience
- [ ] Interactive web game
- [ ] Real-time features (WebSocket)
- [ ] Advanced performance optimization

---

## 🧠 Philosophy

This project is built on three principles:

> **Scalability** — Architecture that grows with ambition.
>
> **Cleanliness** — Code that reads like intent.
>
> **Future-readiness** — Not built for today, but for what comes next.

---

## 🤝 Contributing

We welcome contributions from developers who share our vision.

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/name`)
3. **Commit** your changes (`git commit -m 'Add feature'`)
4. **Push** to your branch (`git push origin feature/name`)
5. **Open** a Pull Request

Please read our [Contributing Guidelines](docs/CONTRIBUTING.md) before submitting.

---

## 📜 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

<div align="center">

**Thunders Foundation is more than a project — it's a foundation for building the future.**

*Stay consistent. Build smart. Think long-term.*

<br/>
<sup>Built with ⚡ by Thunders Foundation</sup>

</div>
```

---

| Element | Effect |
|---------|--------|
| **Lightning bolt** | Gradient fill + glow filter + flicker opacity animation |
| **Pulse rings** | Dua ring yang expand & fade bergantian — kayak sonar |
| **Orbit rings** | Dua ring putar berlawanan arah dengan dash pattern |
| **Spark particles** | 5 partikel yang terbang keluar dari bolt secara random |
| **Ambient glow** | Background radial gradient yang "napas" |
| **Screen flash** | Seluruh logo kadang flash tipis — efek petir sesungguhnya |
| **Text glow** | "THUNDERS" punya double layer (solid + glow blur) |
