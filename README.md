# GoFood

GoFood is a React-based web application that allows users to search for meals by name, browse food categories, and view detailed information about each meal using the [TheMealDB API](https://www.themealdb.com/api.php).

## Features

- Search for meals by name
- Browse meals by categories
- View detailed information about meals, including ingredients and instructions
- Responsive design using Tailwind CSS
- Smooth navigation with React Router DOM
- Popup modal for meal details

## Technologies Used

- [React](https://reactjs.org/)
- [React Router DOM](https://reactrouter.com/)
- [Axios](https://axios-http.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Emotion](https://emotion.sh/docs/introduction) for styling
- [Material UI](https://mui.com/) for icons and UI components

## Installation
### Clone the repository:
`git clone https://github.com/jatinjangra001/GoFood.git`

### Navigate to the project directory:
`cd GoFood`

### Install the dependencies:
`npm install`

## Usage
### Start the development server:
`npm run dev`

## Acknowledgments
- TheMealDB for providing the meal data API.
- React for the UI framework.
- Tailwind CSS for the styling framework.
- Material UI for the UI components.

## API Usage
### The application uses the TheMealDB API to fetch meal data. Below are some key endpoints used:

- Search meal by name: https://www.themealdb.com/api/json/v1/1/search.php?s={meal_name}
- List all meals by first letter: https://www.themealdb.com/api/json/v1/1/search.php?f={letter}
- Lookup full meal details by ID: https://www.themealdb.com/api/json/v1/1/lookup.php?i={meal_id}
- List all meal categories: https://www.themealdb.com/api/json/v1/1/categories.php

## Dependencies

```json
"dependencies": {
    "@emotion/react": "^11.11.4",
    "@emotion/styled": "^11.11.5",
    "@mui/icons-material": "^5.15.20",
    "@mui/material": "^5.15.20",
    "axios": "^1.7.2",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.23.1"
}
