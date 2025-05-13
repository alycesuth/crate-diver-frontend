export function AlbumsIndex({ albums }) {
  return (
    <main className="bg-[#1c1c1e] text-gray-200 min-h-screen px-8 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {albums.map((album) => (
            <div
              key={album.id}
              className="bg-[#2a2a2d] p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-200"
            >
              <img
                src={album.image_url}
                alt={`${album.name} cover`}
                className="w-full h-64 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-semibold text-white">{album.name}</h2>
              <p className="text-sm text-[#6e5a86] mt-1">{album.artist}</p>
              <p className="text-sm text-gray-400">Genre: {album.genre}</p>
              <p className="text-sm text-gray-400">Type: {album.type}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
