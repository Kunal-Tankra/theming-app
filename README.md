# 🎨 Theming App (CRA + TypeScript + Tailwind CSS)

A responsive, multi-theme React application built with **Create React App**, **TypeScript**, and **Tailwind CSS**. The app features **dynamic theme switching**, **product card UI**, and **routing** across multiple pages.

---

## 📌 Project Highlights

- 🌗 Switch between **3 unique themes**
- 📦 Showcases products with card-based layout
- 🧭 Multi-page navigation: Home, About, Contact
- ⚙️ Custom hook for fetching products (`useGetProducts`)
- 🌀 Smooth theme transitions and subtle animations
- 📁 Clean architecture and reusable components

---

## ⚙️ Tech Stack

- ⚛️ **React** (Create React App)
- 🔷 **TypeScript**
- 🎨 **Tailwind CSS**
- 🔗 **React Router DOM**
- 🌍 **Context API** for theme management

---

## 📁 Folder Structure

src/
├── assets/ # Static assets like logos
├── components/ # Reusable UI components
│ ├── Header.tsx
│ ├── ProductCard.tsx
│ ├── SideBar.tsx
├── context/ # Theme context (React Context API)
│ └── ThemeContext.tsx
├── hooks/ # Custom hooks
│ └── useGetProducts.ts
├── pages/ # Route pages
│ ├── About.tsx
│ ├── Contact.tsx
│ └── Home.tsx
├── router/ # Routing setup
│ ├── index.tsx
│ ├── path.ts
│ └── routes.ts
├── App.tsx # Root component
├── custom.d.ts # For SVG or asset module declarations
├── index.tsx # App entry point
├── App.css / index.css # Base styling
├── tailwind.config.js # Tailwind config
├── tsconfig.json # TypeScript config

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/theming-app.git
cd theming-app

### 21. Install dependencies
npm install

### 21. Run the development server
npm start





```
