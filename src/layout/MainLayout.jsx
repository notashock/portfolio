import Header from '../components/Header';
import Footer from '../components/Footer';

const MainLayout = ({ children }) => {
  return (
    <div className="bg-surface-light dark:bg-surface-dark text-text-light dark:text-text-dark transition-colors duration-300 min-h-screen flex flex-col">
      {/* Make header fixed from here */}
      <Header />
      {/* Push content down so it doesn’t hide behind header */}
      <main className="flex-1 container mx-auto px-4 pt-20 pb-8">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
