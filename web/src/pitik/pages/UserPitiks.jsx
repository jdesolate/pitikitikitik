import PitikList from "../components/PitikList";
import { useParams } from "react-router-dom";

const DUMMY_PITIKS = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/d/df/NYC_Empire_State_Building.jpg",
    address: "20 W 34th St, New York, NY 10036",
    creator: "u1",
    coordinates: {
      lat: 40.7484405,
      lng: -73.923585,
    },
  },
  {
    id: "p2",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/d/df/NYC_Empire_State_Building.jpg",
    address: "20 W 34th St, New York, NY 10036",
    creator: "u2",
    coordinates: {
      lat: 40.7484405,
      lng: -73.923585,
    },
  },
];

const UserPitiks = () => {
  const userId = useParams().userId;
  const loadedPitiks = DUMMY_PITIKS.filter((pitik) => pitik.creator === userId);
  return <PitikList items={loadedPitiks} />;
};

export default UserPitiks;
