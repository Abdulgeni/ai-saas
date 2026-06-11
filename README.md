# AI SaaS Starter

A complete, production-ready SaaS platform with user authentication, AI-powered content summarization, and Stripe billing. Built with Next.js, TypeScript, and Google Gemini AI.

## Features

- User authentication (sign up, login, sessions)
- AI content summarizer (Gemini 2.5 Flash)
- Stripe subscription billing (ready to integrate)
- User dashboard with stats
- Pricing page
- Beautiful, responsive UI
- PostgreSQL database with Prisma
- Fallback summarizer when AI is unavailable

## Tech Stack

Next.js 16 | TypeScript | Tailwind CSS | NextAuth.js | PostgreSQL (Neon) | Prisma | Google Gemini 2.5 Flash | Stripe | Vercel

## Live Demo

ai-saas.vercel.app

## Quick Start

git clone https://github.com/Abdulgeni/ai-saas.git
cd ai-saas
npm install

Create .env file:
DATABASE_URL="your_postgresql_url"
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_secret_string
GEMINI_API_KEY=your_gemini_api_key

npx prisma generate
npx prisma db push
npm run dev

## Project Structure

ai-saas/
  app/
    api/
      auth/[...nextauth]/route.ts
      signup/route.ts
      summarize/route.ts
    login/page.tsx
    signup/page.tsx
    dashboard/page.tsx
    pricing/page.tsx
    page.tsx
  lib/
    auth.ts
    gemini.ts
    prisma.ts
  prisma/
    schema.prisma
  package.json

## Deploy to Vercel

1. Push to GitHub
2. Go to vercel.com
3. Import repository
4. Add environment variables: DATABASE_URL, NEXTAUTH_URL, NEXTAUTH_SECRET, GEMINI_API_KEY
5. Deploy

## Author

Abdulgeni - github.com/Abdulgeni

Built with Next.js, TypeScript, and Google Gemini AI.

https://ai-saas-iota-ten.vercel.app
