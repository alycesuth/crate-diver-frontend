import axios from "axios";

import { AlbumsPage } from "./AlbumsPage";
import "./App.css";
import { Footer } from "./Footer";
import { Header } from "./Header";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <div>
      <Header />
      <AlbumsPage />
      <Footer />
    </div>
  );
}

export default App;
