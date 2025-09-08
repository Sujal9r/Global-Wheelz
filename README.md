# Dxyra Website

A modern Next.js website for Dxyra - Smart Solutions for Smarter Enterprises.

## Project Structure

```
src/
├── app/                    # Next.js 13+ App Router
│   ├── products/          # Product pages with dynamic routing
│   │   ├── layout.tsx     # Products layout wrapper
│   │   └── page.tsx       # Single products page with query-based routing
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/             # React components
│   ├── Common/            # Reusable/common components
│   │   └── Button.jsx     # Button component
│   ├── Layout/            # Layout components
│   │   ├── Header.jsx     # Header component
│   │   ├── Footer.jsx     # Footer component
│   │   └── Navbar.jsx     # Navigation component
│   ├── Product/           # Product-specific components
│   │   ├── Payroll.tsx
│   │   ├── Performance.tsx
│   │   ├── HR.tsx
│   │   ├── TimeAttendance.tsx
│   │   ├── HiringOnboarding.tsx
│   │   ├── TimesheetsProjects.tsx
│   │   └── ProductPage.tsx
│   └── Sections/          # Page section components
│       ├── Section2.jsx
│       ├── Section5.jsx
│       ├── Section6.jsx
│       ├── Slider.jsx
│       ├── Tabs.jsx
│       ├── Application.jsx
│       ├── Commitments.jsx
│       └── Features.jsx
└── public/                 # Static assets
    ├── Logo.png
    ├── Various icons and images
    └── ...
```

## Features

- **Modern Next.js 13+** with App Router
- **Responsive Design** with Tailwind CSS
- **Dynamic Product Routing** using query parameters
- **Organized Component Structure** for better maintainability
- **Clean Folder Organization** separating layout, sections, and product components

## Product Routing

All products are accessible through a single page (`/products`) using query parameters:
- `/products?product=payroll` - Payroll Software
- `/products?product=performance` - Performance & Careers
- `/products?product=hr` - Modern HR
- `/products?product=time-attendance` - Time & Attendance
- `/products?product=hiring-onboarding` - Hiring & Onboarding
- `/products?product=timesheets-projects` - Timesheets & Projects

## Getting Started

1. Install dependencies: `npm install`
2. Run development server: `npm run dev`
3. Open [http://localhost:3000](http://localhost:3000)

## Technologies Used

- Next.js 13+
- React 18
- Tailwind CSS
- TypeScript
