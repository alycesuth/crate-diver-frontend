import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="flex justify-between items-center px-8 py-4 bg-[#1c1c1e] shadow-md">
      {/* Left: Logo and Navigation */}
      <div className="flex items-center space-x-10">
        <div className="text-2xl font-bold tracking-wide text-[#e63946]">cratediver</div>
        <nav className="flex space-x-6 text-sm font-medium">
          <a href="/" className="text-[#6e5a86] hover:text-white transition-colors duration-200">
            Home
          </a>
          <a href="/about" className="text-[#6e5a86] hover:text-white transition-colors duration-200">
            About
          </a>
        </nav>
      </div>

      {/* Right: Auth & Actions */}
      <div className="flex items-center space-x-4 text-sm font-medium">
        <Link to="/signup" className="text-gray-300 hover:text-white transition-colors duration-200">
          Sign Up
        </Link>
        <Link to="/login" className="text-gray-300 hover:text-white transition-colors duration-200">
          Login
        </Link>
        <Link
          to="/albums/new"
          className="bg-[#e63946] text-white px-4 py-2 rounded-md hover:bg-[#c53030] transition-all duration-200"
        >
          + Add Album
        </Link>
      </div>
    </header>
  );
}
