# MediSearch

![MediSearch Logo](favicon.svg)

**MediSearch** is a fast, responsive, and modern web application designed for medical professionals to quickly search and browse an available drug database in a hospital setting. Built for doctors, designed for care.

## 🌟 Features

- **Instant Search:** Quickly find medicines by drug name, composition, or form with a dynamic search bar and real-time suggestions.
- **Category Filtering:** Browse medicines by dose form (Tablet, Capsule, Injection, Syrup, etc.) using a beautiful card grid on desktop and a clean list view on mobile.
- **Light & Dark Themes:** Built-in theme toggle to switch between a crisp light mode and a sleek dark mode. The app remembers your preference.
- **Responsive Design:** A fully responsive interface that looks great on large screens and features a mobile-optimized layout with a bottom navigation bar for phones.
- **Drug Details:** Click on any drug card to open a detailed modal showing the serial number, dose form, and full drug name.

## 🚀 Tech Stack

MediSearch is built entirely with vanilla web technologies, ensuring maximum speed and zero dependencies:
- **HTML5:** Semantic and accessible markup.
- **CSS3:** Custom styling with CSS variables for seamless theme switching and responsive layouts (no external CSS frameworks used).
- **JavaScript (Vanilla):** Client-side logic for searching, filtering, and DOM manipulation.

## 📂 Project Structure

- `index.html` - The main layout and structure of the application.
- `style.css` - All styling, including light/dark theme variables and responsive media queries.
- `app.js` - The application logic, including the drug database array, category rendering, and search functionality.
- `favicon.svg` - The vector logo used for the browser tab.
- `drug_data.json` & `Available Drug List.xlsx` - The raw data sources for the medicines.

## 🛠️ Usage

Simply open `index.html` in any modern web browser to start using MediSearch. No build step or local server is strictly required, although using a simple local server (like VS Code Live Server) is recommended for the best experience.

## 🎨 UI/UX Highlights

The UI was completely overhauled to match modern design aesthetics:
- **Scalable Vector Icons:** Custom SVG icons are used for all drug categories.
- **Micro-animations:** Smooth transitions on hover states, modal popups, and theme switching.
- **Mobile First Navigation:** The mobile view utilizes a bottom tab bar for ergonomic one-handed use on smartphones.

---
*Built with ❤️ for better healthcare.*
