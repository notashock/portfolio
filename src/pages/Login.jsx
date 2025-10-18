import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // For now, mock auth (replace with API later)
    if (username === "admin" && password === "password") {
      localStorage.setItem("authToken", "sample-token");
      navigate("/add-new");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-surface text-text transition-colors duration-300">
      <div className="w-full max-w-md p-8 rounded-lg shadow-lg bg-surface/90">
        <h1 className="text-3xl font-bold text-heading mb-6 text-center">
          Login
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-text/80"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full mt-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary bg-surface text-text"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-text/80"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary bg-surface text-text"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-primary-light text-white font-semibold rounded-md hover:bg-primary/90 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
