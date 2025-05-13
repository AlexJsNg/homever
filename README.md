# Homever 🏡
**Homever** is a modern web application built with **Next.js 14**, **React 18**, and **Prisma**. Users can search and book accommodations worldwide, create and manage their own listings, leave reviews, and keep track of their bookings and favorite places.
---
## DEMO
[homever.vercel.app](https://homever.vercel.app/)
---
## 🚀 Features
- 🔐 Authentication and authorization via [Clerk](https://clerk.dev)
- 🏘️ Search and rent accommodations worldwide
- 📝 Create and manage personal listings
- ❤️ Add properties to favorites
- 📅 View booking history
- 🌗 Theme switching (light/dark)
- ✅ Data validation through [Zod](https://zod.dev)
---
## 🔐 Authentication with Clerk
The project integrates Clerk.js to provide secure and modern authentication. Users can quickly sign up or log in using GitHub or Google accounts — no need to create a separate password.

Key benefits:
- OAuth login via GitHub or Google
- Session management and user metadata via Clerk
- Seamless integration with Next.js App Router
---
## Vercel Hosting
This project is hosted on Vercel, providing:

- Zero-config deployment directly from GitHub repository
- Global CDN for lightning-fast content delivery
- Automatic HTTPS with SSL certificates included
- Preview deployments for each pull request
- Serverless functions support with Node.js runtime
- Real-time analytics and performance monitoring
---
## 📦 Tech Stack
- **Next.js** 14.2.10
- **React** 18
- **Zod** 3.23.8
- **Clerk** 5.5.2
- **Prisma** 5.21.1
- **Tailwind CSS** (default styling)
- **TypeScript** (strict typing)
---
## ⚙️ Prerequisites
Before running, ensure you have:
- Node.js v18 or higher
- NPM / Yarn
- PostgreSQL (or another Prisma-supported data source)
---
## 📄 Pages
### 🏠 `Home`  
The main page with a list of available real estate. Users can filter offers.

### ❤️ `Favorites`  
A list of all properties added to favorites. Quickly find and return to preferred options.

### 📅 `Bookings`  
Shows all your active and past bookings.

### ✍️ `Reviews`  
Section with user reviews. Leave a review for a booked property.

### ➕ `Create Rental`  
Interface for property owners to add a new listing. Supports photo uploads, amenities, pricing, geolocation, and more.

### 🏡 `My Rentals`  
A section where users can view or delete their active listings.

### 👤 `Profile`  
User profile page where you can update personal information.

## 🎨 Theme Switching
The application supports **switching between light and dark themes**. Theme settings are preserved between sessions for better UX.