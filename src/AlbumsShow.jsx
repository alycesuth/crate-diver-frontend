import { Link } from "react-router-dom";

export function AlbumsShow({ album }) {
  return (
    <main className="bg-[#1c1c1e] min-h-screen px-8 py-12 text-gray-200">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Back Button */}
        <div className="w-fit">
          <Link
            to="/"
            className="inline-block bg-[#1c1c1e] border border-[#6e5a86] text-[#e63946] px-4 py-2 rounded-md hover:bg-[#2a2a2d] hover:text-white transition"
          >
            ← Back to All Albums
          </Link>
        </div>

        {/* Album Card */}
        <div className="bg-[#2a2a2d] p-6 rounded-lg shadow flex flex-col md:flex-row gap-8 items-start">
          {/* Album Cover */}
          <div className="w-full md:w-1/3 aspect-square">
            <img src={album.image_url} alt={`${album.name} cover`} className="w-full h-full object-cover rounded" />
          </div>

          {/* Album Details */}
          <div className="flex-1 space-y-4">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">{album.name}</h1>
              <p className="text-[#6e5a86] text-lg mb-2">Artist: {album.artist}</p>
              <p className="text-gray-400 mb-1">Genre: {album.genre}</p>
              <p className="text-gray-400">Type: {album.type}</p>
            </div>

            {/* Favorite Button */}
            <button className="bg-[#e63946] hover:bg-[#c53030] text-white px-5 py-2 rounded-md transition">
              ☆ Add to Favorites
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
