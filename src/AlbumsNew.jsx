export function AlbumsNew({ onCreate }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const params = new FormData(form);
    const successCallback = () => form.reset();
    onCreate(params, successCallback);
  };

  return (
    <main className="bg-[#1c1c1e] min-h-screen px-8 py-12 text-gray-200">
      <div className="max-w-xl mx-auto bg-[#2a2a2d] p-8 rounded-lg shadow">
        <h1 className="text-2xl font-bold text-[#e63946] mb-6">Add Album</h1>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm text-[#6e5a86] mb-1">
              Title
            </label>
            <input
              name="name"
              type="text"
              id="name"
              className="w-full px-4 py-2 rounded-md bg-[#1c1c1e] border border-[#6e5a86] text-white focus:outline-none focus:ring-2 focus:ring-[#e63946]"
            />
          </div>

          <div>
            <label htmlFor="artist" className="block text-sm text-[#6e5a86] mb-1">
              Artist
            </label>
            <input
              name="artist"
              type="text"
              id="artist"
              className="w-full px-4 py-2 rounded-md bg-[#1c1c1e] border border-[#6e5a86] text-white focus:outline-none focus:ring-2 focus:ring-[#e63946]"
            />
          </div>

          <div>
            <label htmlFor="genre" className="block text-sm text-[#6e5a86] mb-1">
              Genre
            </label>
            <input
              name="genre"
              type="text"
              id="genre"
              className="w-full px-4 py-2 rounded-md bg-[#1c1c1e] border border-[#6e5a86] text-white focus:outline-none focus:ring-2 focus:ring-[#e63946]"
            />
          </div>

          <div>
            <label htmlFor="image_url" className="block text-sm text-[#6e5a86] mb-1">
              Album Cover URL
            </label>
            <input
              name="image_url"
              type="text"
              id="image_url"
              className="w-full px-4 py-2 rounded-md bg-[#1c1c1e] border border-[#6e5a86] text-white focus:outline-none focus:ring-2 focus:ring-[#e63946]"
            />
          </div>

          <div>
            <label htmlFor="type" className="block text-sm text-[#6e5a86] mb-1">
              Album Type &#40;ie. Album, Compilation, EP&#41;
            </label>
            <input
              name="type"
              type="text"
              id="type"
              className="w-full px-4 py-2 rounded-md bg-[#1c1c1e] border border-[#6e5a86] text-white focus:outline-none focus:ring-2 focus:ring-[#e63946]"
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="bg-[#e63946] text-white px-6 py-2 rounded-md hover:bg-[#c53030] transition"
            >
              Create Album
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
