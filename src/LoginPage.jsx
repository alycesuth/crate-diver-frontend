import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function LoginPage() {
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("/sessions.json", params)
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("email", response.data.email);
        event.target.reset();
        navigate("/", { state: { message: "Successfully logged in." } });
        window.location.href = "/";
      })
      .catch((error) => {
        console.log(error.response);
        setErrors(["Invalid email or password"]);
      });
  };

  return (
    <main className="bg-[#1c1c1e] min-h-screen flex items-center justify-center px-6 text-gray-200">
      <div className="bg-[#2a2a2d] shadow-md p-10 rounded-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-[#e63946] mb-8 text-center">Log In</h2>

        {errors.length > 0 && (
          <ul className="mb-6 text-red-400 text-center text-sm">
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm text-[#6e5a86] mb-1">Email</label>
            <input
              name="email"
              type="email"
              required
              className="w-full px-4 py-2 bg-[#1c1c1e] border border-[#6e5a86] rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#e63946]"
            />
          </div>

          <div>
            <label className="block text-sm text-[#6e5a86] mb-1">Password</label>
            <input
              name="password"
              type="password"
              required
              className="w-full px-4 py-2 bg-[#1c1c1e] border border-[#6e5a86] rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#e63946]"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#e63946] hover:bg-[#c53030] text-white font-semibold py-2 rounded-md transition"
          >
            Log In
          </button>
        </form>
      </div>
    </main>
  );
}
