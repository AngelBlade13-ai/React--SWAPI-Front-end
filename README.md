# React SWAPI Front End

A React frontend for browsing Star Wars data from the public SWAPI Tech API. The app includes separate sections for characters, planets, and starships, with list pages and detail pages connected through React Router.

This was built as a school project to practice API consumption, routing, component structure, and Bootstrap-based UI layout in React.

## Features

- Home page with navigation to SWAPI resource sections
- Character list and character detail views
- Planet list and planet detail views
- Starship list and starship detail views
- Dynamic routes for individual records
- Axios API helper modules for each resource type
- Bootstrap and React Bootstrap layout/components
- Loading spinner while detail data is being fetched
- Cross-link from a character detail page to that character's homeworld when available

## Tech Stack

- React
- Create React App
- React Router
- Axios
- Bootstrap
- React Bootstrap
- SWAPI Tech API
- `change-case` for display formatting

## Project Structure

```text
swapi/
  src/
    API/
      CharacterAPI.js
      PlanetAPI.js
      StarshipAPI.js
    Components/
      NavBar.js
      CharacterComponent.js
      CharacterViewer.js
      PlanetComponent.js
      PlanetViewer.js
      StarshipComponent.js
      StarshipViewer.js
    Pages/
      Home.js
      Characters.js
      ViewCharacter.js
      Planets.js
      ViewPlanet.js
      Starships.js
      ViewStarship.js
    App.js
```

## External API

The app reads data from:

```text
https://swapi.tech/api
```

Resource endpoints used:

```text
/people
/planets
/starships
```

No API key is required.

## How To Run

Go into the React app folder:

```bash
cd swapi
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

Open:

```text
http://localhost:3000
```

## Available Scripts

From the `swapi/` folder:

```bash
npm start      # Run the app locally
npm test       # Run the CRA test runner
npm run build  # Build for production
```

## Routes

```text
/                    Home
/Characters           Character list
/ViewCharacter/:id    Character detail
/Planets              Planet list
/ViewPlanet/:id       Planet detail
/Starships            Starship list
/ViewStarship/:id     Starship detail
```

## Notes

- The app depends on the public SWAPI Tech API being available.
- This is a frontend-only project; it does not store data locally or use a backend database.
- Some fields are displayed directly from the API response, so missing API data may show as unavailable.

## What I Practiced

- Creating route-based React pages
- Fetching external API data with Axios
- Splitting API calls into helper modules
- Passing API records into reusable display components
- Building detail pages with URL parameters
- Styling with Bootstrap and React Bootstrap
