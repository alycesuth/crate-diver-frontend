import axios from "axios";

export function SignupPage() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const params = new FormData(event.target);
    console.log([...params]);
    axios.post("/users.json", params).then((response) => {
      console.log(response.data);
      event.target.reset();
      window.location.href = "/"; // Change this to hide a modal, or redirect page. or whatever
    });
  };

  return (
    <main className="bg-[#1c1c1e] min-h-screen px-8 py-12 text-gray-200 flex items-center justify-center">
      <div className="bg-[#2a2a2d] p-8 rounded-lg shadow max-w-md w-full">
        <h1 className="text-3xl font-bold text-[#e63946] mb-6 text-center">Create an Account</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm text-[#6e5a86] mb-1">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="w-full px-4 py-2 rounded-md bg-[#1c1c1e] border border-[#6e5a86] text-white focus:outline-none focus:ring-2 focus:ring-[#e63946]"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm text-[#6e5a86] mb-1">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full px-4 py-2 rounded-md bg-[#1c1c1e] border border-[#6e5a86] text-white focus:outline-none focus:ring-2 focus:ring-[#e63946]"
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm text-[#6e5a86] mb-1">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              className="w-full px-4 py-2 rounded-md bg-[#1c1c1e] border border-[#6e5a86] text-white focus:outline-none focus:ring-2 focus:ring-[#e63946]"
            />
          </div>

          {/* Password Confirmation */}
          <div>
            <label htmlFor="passwordConfirmation" className="block text-sm text-[#6e5a86] mb-1">
              Confirm Password
            </label>
            <input
              id="passwordConfirmation"
              name="password_confirmation"
              type="password"
              className="w-full px-4 py-2 rounded-md bg-[#1c1c1e] border border-[#6e5a86] text-white focus:outline-none focus:ring-2 focus:ring-[#e63946]"
            />
          </div>

          {/* Submit */}
          <div className="pt-2">
            <button
              type="submit"
              className="bg-[#e63946] hover:bg-[#c53030] text-white px-6 py-2 rounded-md w-full transition"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
