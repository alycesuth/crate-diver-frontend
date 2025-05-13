import { useLoaderData } from "react-router-dom";
import { AlbumsShow } from "./AlbumsShow";

export function AlbumsShowPage() {
  const album = useLoaderData();
  return (
    <div>
      <AlbumsShow album={album} />
    </div>
  );
}
