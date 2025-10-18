import { useState } from "react";
import { Navigate } from "react-router-dom";
import fetcher from "../hooks/useFetcher";

export default function AddNew() {
  // Check auth → (you can replace this with JWT/Context-based check later)
  const token = localStorage.getItem("authToken");
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  const [type, setType] = useState("projects");
  const [formData, setFormData] = useState({});
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetcher.post(`${type}`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res) {
        setMessage("✅ Item added successfully!");
        setFormData({});
      }
    } catch (err) {
      setMessage("❌ Error adding item.");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 p-6">
      <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-xl w-full max-w-2xl transition-all duration-300">
        <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">
          Add New Item
        </h1>

        {/* Select type */}
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 mb-2 font-semibold">
            Select Type
          </label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 dark:bg-gray-800 dark:text-white"
          >
            <option value="projects">Project</option>
            <option value="skills">Skill</option>
            <option value="experience">Experience</option>
            <option value="certifications">Certification</option>
          </select>
        </div>

        {/* Dynamic form fields */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="title"
            placeholder="Title / Name"
            value={formData.title || ""}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 dark:bg-gray-800 dark:text-white"
          />

          <textarea
            name="description"
            placeholder="Description"
            value={formData.description || ""}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 dark:bg-gray-800 dark:text-white"
          />

          <input
            type="text"
            name="link"
            placeholder="Link (if any)"
            value={formData.link || ""}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 dark:bg-gray-800 dark:text-white"
          />

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded-lg transition duration-300"
          >
            Add {type}
          </button>
        </form>

        {message && (
          <p className="mt-4 text-center text-lg font-medium text-gray-700 dark:text-gray-300">
            {message}
          </p>
        )}
      </div>
    </div>
  );
}
