# Ashok Babu Bavireddy – Interactive Portfolio Web App

## Overview

This is a personal portfolio web application for **Ashok Babu Bavireddy**, showcasing skills, projects, and professional experience. The app is fully responsive, supports dark/light mode, and dynamically fetches data from a **MongoDB** backend via REST APIs.

It is designed with **React.js**, **Vite**, **Tailwind CSS**, and **Node.js/Express** for the backend.

---

## Features

* **Home Page** – Brief introduction with quick links to projects, skills, work experience, and contact.
* **Projects Page** – Displays all projects in cards with title, summary, and tags. Clicking a project navigates to a **Details Page**.
* **Skills Page** – Displays all skills as badges; each badge links to a **Details Page** showing skill details.
* **Work Experience Page** – Shows professional experiences with company, role, duration, and contributions. Each entry links to a detailed view.
* **Details Page** – Universal page for projects, skills, or experience with summary, description, source, confidence, and relevant links.
* **Dark/Light Mode** – Toggleable theme using **Tailwind CSS**.
* **Reusable Fetcher Hook** – `useFetcher` handles all GET requests across the frontend for maintainable data fetching.
* **REST Backend** – Express server connected to MongoDB, serving projects, skills, and experiences.

---

## Tech Stack

* **Frontend**: React.js, Vite, Tailwind CSS, React Router
* **Backend**: Node.js, Express.js
* **Database**: MongoDB
* **Other**: CORS, dotenv, reusable hooks

---

## Folder Structure (Frontend)

```
src/
├── assets/             # Images, icons, profile photos
├── components/         # Reusable UI components (Header, Footer, ProjectCard, SkillBadge, etc.)
├── layout/             # Layout wrappers (MainLayout, DetailsLayout)
├── pages/              # Route-level components (Home, Projects, Skills, WorkExperience, Details)
├── data/               # Mock/static data (projects, skills, experience)
├── hooks/              # Custom hooks (useFetcher, useTheme)
├── styles/             # Global styles (globals.css)
├── App.jsx             # Router & app shell
└── main.jsx            # Vite entry point
```

---

## API Endpoints (Backend)

* `GET /api/projects` – Get all projects

* `GET /api/projects/:id` – Get a project by ID

* `POST /api/projects` – Create a new project

* `GET /api/skills` – Get all skills

* `GET /api/skills/:id` – Get a skill by ID

* `POST /api/skills` – Create a new skill

* `GET /api/experience` – Get all work experiences

* `GET /api/experience/:id` – Get an experience by ID

* `POST /api/experience` – Create a new experience

---

## Installation

### Frontend

```bash
git clone <repository_url>
cd portfolio-frontend
npm install
npm run dev
```

### Backend

```bash
cd portfolio-backend
npm install
npm run dev
```

> Make sure `.env` contains MongoDB connection URI:
>
> ```
> MONGO_URI=<your_mongo_connection_string>
> PORT=5000
> ```

---

## Usage

1. Navigate to the **Home Page** to see a brief intro.
2. Click on **Projects**, **Skills**, or **Work Experience** to see detailed content.
3. Toggle dark/light mode using the icon in the header.
4. Admin can add new projects, skills, or experiences using **Postman** or a future admin panel.

---

## Future Enhancements

* Add authentication and admin panel for dynamic content management.
* Implement search and filter for projects and skills.
* Add animations and transitions for better UX.
* Deploy the app with cloud backend (Render/Netlify/Vercel).

---

## License

MIT License
