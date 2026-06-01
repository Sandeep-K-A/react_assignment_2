# UserDirectory

A multi-page user directory application built with React, TypeScript, Tailwind CSS, and Vite. Browse users, view detailed profiles, and navigate seamlessly between pages using React Router.

## Features

- Multi-page routing with React Router
- User listing with profile cards
- Individual user detail pages
- Active link highlighting on navigation
- Responsive UI across all screen sizes

## Routes

| Path         | Page        |
| ------------ | ----------- |
| `/`          | Home        |
| `/about`     | About       |
| `/users`     | Users List  |
| `/users/:id` | User Detail |

## Tech Stack

- React
- TypeScript
- React Router v6
- Tailwind CSS
- Axios
- Vite

## Setup

1. Clone the repository

```bash
git clone https://github.com/Sandeep-K-A/react_assignment_2.git
cd react_assignment_2
```

2. Install dependencies

```bash
npm install
```

3. Create a `.env` file

```bash
cp .env.example .env
```

4. Start the development server

```bash
npm run dev
```

## Environment Variables

| Variable            | Description                    |
| ------------------- | ------------------------------ |
| `VITE_API_BASE_URL` | Base URL for the DummyJSON API |

```env
VITE_API_BASE_URL=https://dummyjson.com
```
