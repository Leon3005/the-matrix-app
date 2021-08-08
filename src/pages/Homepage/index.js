import Buttons from "../../components/Buttons/index";
import MediaCard from "../../components/MediaCard";

import "./Homepage.css";

const Homepage = () => {
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
