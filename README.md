# Perfume Collection

A small React + React-Bootstrap demo app for storing, searching and rating perfumes.

## Overview
This is a **front-end only** React application that allows you to:

- Load an initial list of perfumes from a local JSON file  
- Display them in a sortable & searchable list  
- Add new perfumes (name, description, image URL, rating 1–5)  
- Edit the rating of any perfume  
- Delete perfumes from the list  

All changes live **only in browser memory**—no back-end required. Styling and layout are handled with **React-Bootstrap**.

---

## Tech Stack
- **React 18** (functional components + hooks)  
- **React-Bootstrap 5** (grid, cards, forms, buttons)  
- **JavaScript (ES6)** features: `import`/`export`, arrow functions, spread operator  
- **Create React App** for project scaffolding  

---

## Features
- **Client-side search** (case-insensitive, searches name + description)  
- **Client-side sort** (by name, description or rating; ascending/descending)  
- **Add & remove** items with instant UI updates  
- **Rating selector** for each perfume (1–5 stars)  
- **Responsive layout** via Bootstrap grid  
- **Placeholder image** auto-added when no URL is provided  

---

## Getting Started

```bash

# 1. Install dependencies
npm install    # or: yarn

# 2. Run in development mode (http://localhost:3000)
npm start      # or: yarn start
