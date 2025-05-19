import axios from "axios";

import { AlbumsPage } from "./AlbumsPage";
import "./App.css";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { AlbumsShowPage } from "./AlbumsShowPage";
import { AlbumsNewPage } from "./AlbumsNewPage";
import { SignupPage } from "./SignupPage";
import { LoginPage } from "./LoginPage";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

const router = createBrowserRouter([
  {
    element: (
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    ),
    children: [
      {
        path: "/",
        element: <AlbumsPage />,
      },
      {
        path: "/albums/:id",
        element: <AlbumsShowPage />,
        loader: ({ params }) => axios.get(`/albums/${params.id}.json`).then((response) => response.data),
      },
      {
        path: "/albums/new",
        element: <AlbumsNewPage />,
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
