import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  const location = useLocation();
  const hideFooterPaths = ["/about"]; // Add any other routes where footer should be hidden
  const hideFooter = hideFooterPaths.includes(location.pathname);

  return (
    <div className="bg-surface-light dark:bg-surface-dark text-text-light dark:text-text-dark transition-colors duration-300 min-h-screen flex flex-col">
      {/* Fixed Header */}
      <Header />

      {/* Page Content */}
      <main className="container mx-auto px-4 pt-20 pb-8 flex-1">
        {children}
      </main>

      {/* Footer that scrolls with page */}
      {!hideFooter && <Footer />}
    </div>
  );
};

export default MainLayout;
