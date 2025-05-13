export function Footer() {
  return (
    <footer className="bg-[#1c1c1e] text-gray-400 px-8 py-12 border-t border-[#2a2a2d]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {/* Column 1: Logo and Mission */}
        <div>
          <h2 className="text-[#e63946] text-xl font-bold mb-2">cratediver</h2>
          <p className="text-sm text-[#6e5a86]">
            A minimalist space to catalog and celebrate your favorite albums. Discover, collect, and share what moves
            you.
          </p>
        </div>

        {/* Column 2: Explore */}
        <div>
          <h3 className="text-white text-sm font-semibold mb-3">Explore</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white transition">
                Top Albums
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Recent Favorites
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Genres
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Staff Picks
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: About & Community */}
        <div>
          <h3 className="text-white text-sm font-semibold mb-3">Community</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white transition">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Our Vision
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Feedback
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="mt-12 border-t border-[#2a2a2d] pt-6 text-sm text-center text-[#6e5a86]">
        © {new Date().getFullYear()} cratediver. Built for music lovers, not algorithms.
      </div>
    </footer>
  );
}
