import { HashRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import About from "./pages/About";
import WorkExperience from "./pages/WorkExperience";
import Details from "./pages/Details";
// import Login from "./pages/Login";
// import AddNew from "./pages/AddNew";
import ChatPage from "./pages/ChatPage";

// 🔒 Protected Route Wrapper
const ProtectedRoute = ({ element }) => {
  const token = localStorage.getItem("authToken");
  if (!token) {
    // redirect to login if no token
    window.location.href = "/#/login";
    return null;
  }
  return element;
};

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<WorkExperience />} />
          <Route path="/details/:type/:id" element={<Details />} />
          <Route path="/chat" element={<ChatPage />} />

          {/* Auth + Protected */}
          {/* <Route path="/login" element={<Login />} />
          <Route
            path="/add-new"
            element={<ProtectedRoute element={<AddNew />} />}
          /> */}
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
