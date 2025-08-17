# Interactive Portfolio — ChatGPT-Style

An interactive portfolio website built with **Vite + React + TailwindCSS** that simulates a ChatGPT-style assistant. Users can ask questions or click quick-action buttons to view projects, skills, about info, and contact details in a conversational interface.

---

## Features

* **Chat-style interface:** Simulates conversation between user and portfolio assistant.
* **Dynamic content:** Projects, skills, and contact info displayed as rich UI blocks.
* **Quick buttons:** Sidebar buttons for instant access to common portfolio sections.
* **Dark mode ready:** TailwindCSS dark mode classes included.
* **Easy integration:** Replace sample data with your backend or API.
* **Extensible:** Can integrate real assistant logic for smarter responses.

---

## Demo

Currently uses sample data in `InteractivePortfolioApp.jsx`. Replace with your backend endpoints for live data.

---

## Installation

1. **Clone the repository**

```bash
git clone <your-repo-url>
cd <your-repo-folder>
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up TailwindCSS** (if not done already)

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Update `tailwind.config.js` content:

```js
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: { extend: {} },
  plugins: [],
}
```

Add directives to `src/index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

4. **Start the development server**

```bash
npm run dev
```

Open the URL shown in the console to interact with your portfolio.

---

## Usage

* **Typing commands:** Type queries such as:

  * `show projects`
  * `show skills`
  * `about`
  * `contact`
  * `resume`
* **Quick buttons:** Click sidebar buttons to automatically trigger commands.
* **Extending:** Replace `PROFILE` in `InteractivePortfolioApp.jsx` with your own data or API fetch logic.

---

## File Structure

```
src/
 ├─ App.jsx                   # Main interactive portfolio component
 ├─ index.jsx                 # ReactDOM render
 ├─ index.css                 # Tailwind directives and base styles
 └─ components/              # Optional: split UI elements (Message, Sidebar, QuickButton)
```

---

## Future Improvements

* Integrate a backend API to fetch live projects, skills, and experiences.
* Implement a smarter assistant using AI/intent classification.
* Add animations using Framer Motion for smoother interactions.
* Include voice input/output for accessibility and novelty.
* Persist chat history for user-specific personalization.

---

## License

MIT License. Free to use and modify for personal or professional purposes.
