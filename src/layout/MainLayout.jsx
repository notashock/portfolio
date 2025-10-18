import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  const location = useLocation();
  const hideFooterPaths = ["/about"];
  const hideFooter = hideFooterPaths.includes(location.pathname);

  return (
    <div className="min-h-screen flex flex-col bg-surface-light dark:bg-surface-dark text-text-light dark:text-text-dark transition-colors duration-300">
      {/* Fixed Header */}
      <Header />

      {/* Page Content */}
      <main className="flex-1 container mx-auto px-4 pt-20 pb-8">
        {children}
      </main>

      {/* Footer */}
      {!hideFooter && <Footer />}
    </div>
  );
};

export default MainLayout;
