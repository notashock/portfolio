import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  const location = useLocation();

  // Define routes where footer is hidden
  const hideFooterPaths = ["/about", "/chat"];
  const hideFooter = hideFooterPaths.includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen bg-surface-light dark:bg-surface-dark text-text-light dark:text-text-dark transition-colors duration-300">
      {/* Fixed Header */}
      <Header />

      {/* Page Content */}
      <main className="flex-1 container mx-auto px-4 pt-20">
        {children}
      </main>

      {/* Footer always visible unless hidden */}
      {!hideFooter && (
        <Footer />
      )}
    </div>
  );
};

export default MainLayout;
