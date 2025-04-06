# Skip Selection Page Redesign – WeWantWaste

This project is a redesign of the Skip Selection Page on [WeWantWaste](https://wewantwaste.co.uk) website. My focuse was on improving UI/UX, responsiveness, and code maintainability while preserving core functionality.

## 🚀 Tech Stack

- Framework: [Next.js](https://nextjs.org/) – A powerful React framework that supports server-side rendering and optimized performance out of the box.
- HTTP Client: [Axios](https://axios-http.com/) – A promise-based HTTP client with built-in support for request cancellation, interceptors, and cleaner syntax compared to the traditional `fetch` API.
- Styling: Tailwind

## 🎯 Goal

Redesign the existing skip selection page to:

- Improve the overall user interface and experience
- Ensure responsiveness across both mobile and desktop
- Keep all functional aspects of skip selection intact

## ✨ Features

- Dark/Light Theme Toggle  
  A sleek toggle switch in the fixed navigation bar allows users to switch between light and dark modes, enhancing accessibility and personalization.

- Responsive Design  
  The layout adapts beautifully to both mobile and desktop browsers.

- Dynamic Skip Data  
  Skips are populated using live data fetched from:  
  `https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft`

- Data Handling

  - Integrated loading states while fetching skip data
  - Displays a user-friendly error message if the fetch fails
  - Clean fallback UI to avoid blank screens

- Interactive Skip Cards

  - Users can select skips, and the UI will dynamically reflect the selected item with distinct styles and colors
  - Visual feedback helps users know exactly what they've chosen

- Bottom Navigation for Skip Details  
  A persistent bottom nav displays key details about the selected skip and includes a cancel option for quick changes.

## 🧠 Thought Process

1. Framework Selection:  
   I chose Next.js for its out-of-the-box performance optimizations, including automatic image optimization using the built-in next/image component.

2. Design Review:  
   I explored the original WeWantWaste site to understand the user journey and visual gaps. My goal was to create a cleaner, more modern interface while maintaining all existing functionality.

3. Theme & UX Enhancements:  
   Instead of the default black theme, I implemented a light/dark theme switcher for better accessibility. Placing the toggle in a fixed nav bar makes it easily accessible across the app.

4. Data Handling with Axios:  
   Axios was used for fetching skip data, offering cleaner error handling, response intercepting, and improved readability compared to `fetch`.

5. State Management:  
   State is carefully managed to reflect skip selections, loading, and error statuses without affecting app performance or user flow.

## 🛠 How to Run

1. Clone the repo:
   git clone https://github.com/kingsholly/remwaste.git
   cd remwaste

2. Install dependencies:
   npm install

3. Run the development server:
   npm run dev

4. Visit the app in your browser:
   http://localhost:3000
