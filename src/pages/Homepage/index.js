import { useQuery } from "@apollo/client";
import { MATRIX } from "../../queries";

import Buttons from "../../components/Buttons/index";
import MediaCard from "../../components/MediaCard";

import "./Homepage.css";

const Homepage = () => {
  const { data, loading, error } = useQuery(MATRIX);

  console.log(data);

  return (
    <div>
      <div className="homepage">
        <div className="header">
          <h1>ENTER THE MATRIX</h1>
        </div>
        <Buttons />
      </div>
      <div className="mediaCards">
        <MediaCard />
      </div>
    </div>
  );
};

export default Homepage;
