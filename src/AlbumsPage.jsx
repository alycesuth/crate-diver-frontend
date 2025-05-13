import { useEffect, useState } from "react";
import { AlbumsIndex } from "./AlbumsIndex";
import axios from "axios";

export function AlbumsPage() {
  // const albums = [
  //   {
  //     id: 1,
  //     name: "Achtung Baby",
  //     artist: "U2",
  //     genre: "Rock",
  //     image_url: "https://upload.wikimedia.org/wikipedia/en/7/72/Achtung_Baby.png",
  //     type: "Album",
  //   },
  //   {
  //     id: 2,
  //     name: "Three Cheers For Sweet Revenge",
  //     artist: "My Chemical Romance",
  //     genre: "Emo",
  //     image_url:
  //       "https://target.scene7.com/is/image/Target/GUEST_25de9496-08c7-4db5-b0bf-890b8520d76d?wid=300&hei=300&fmt=pjpeg",
  //     type: "Album",
  //   },
  //   {
  //     id: 3,
  //     name: "From Under The Cork Tree",
  //     artist: "Fall Out Boy",
  //     genre: "Pop Punk",
  //     image_url:
  //       "https://upload.wikimedia.org/wikipedia/en/0/00/Fall_Out_Boy_-_From_Under_the_Cork_Tree_-_CD_album_cover.jpg",
  //     type: "Album",
  //   },
  //   {
  //     id: 4,
  //     name: "You're Gonna Miss It All",
  //     artist: "Modern Baseball",
  //     genre: "Pop Punk",
  //     image_url: "https://i.scdn.co/image/ab67616d00001e0293e88bb4055872ca4ed31b8d",
  //     type: "Album",
  //   },
  //   {
  //     id: 5,
  //     name: "A Fever You Can't Sweat Out",
  //     artist: "Panic! at the Disco",
  //     genre: "Emo",
  //     image_url:
  //       "https://target.scene7.com/is/image/Target/GUEST_a24ef7d8-2118-41cf-b156-08bd70cb2a75?wid=300&hei=300&fmt=pjpeg",
  //     type: "Album",
  //   },
  //   {
  //     id: 6,
  //     name: "Milo Goes to College",
  //     artist: "Descendents",
  //     genre: "Punk",
  //     image_url: "https://upload.wikimedia.org/wikipedia/en/a/a1/Descendents_-_Milo_Goes_to_College_cover.jpg",
  //     type: "Album",
  //   },
  //   {
  //     id: 8,
  //     name: "Razor Wrath",
  //     artist: "Ginger Muff",
  //     genre: "Punk",
  //     image_url: "https://img.artpal.com/353121/10-45-59t.jpg",
  //     type: "Album",
  //   },
  // ];

  const [albums, setAlbums] = useState([]);

  const handleIndex = () => {
    console.log("handleIndex");
    axios.get("/albums.json").then((response) => {
      console.log(response.data);
      setAlbums(response.data);
    });
  };

  useEffect(handleIndex, []);

  return (
    <main>
      <AlbumsIndex albums={albums} />
    </main>
  );
}
