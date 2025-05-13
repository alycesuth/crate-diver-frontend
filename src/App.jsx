import axios from "axios";

import { AlbumsPage } from "./AlbumsPage";
import "./App.css";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { AlbumsShowPage } from "./AlbumsShowPage";

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
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
