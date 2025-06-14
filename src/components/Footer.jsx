export default function Footer() {
  return (
    <footer className="bg-muted-light dark:bg-muted-dark text-center text-sm text-text-light dark:text-text-dark py-6">
      <p>© {new Date().getFullYear()} Kiddo. All rights reserved.</p>
      <p className="text-xs mt-1">Built with React + TailwindCSS + Vite</p>
    </footer>
  );
}
