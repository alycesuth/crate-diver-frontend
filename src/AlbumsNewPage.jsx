import { AlbumsNew } from "./AlbumsNew";
import axios from "axios";

export function AlbumsNewPage() {
  const handleCreate = (params, successCallback) => {
    axios
      .post("/albums.json", params)
      .then((response) => {
        console.log("Album created:", response.data);
        successCallback();
      })
      .catch((error) => {
        console.error("Create failed:", error.response?.data || error.message);
      });
  };

  return <AlbumsNew onCreate={handleCreate} />;
}
