import Buttons from "../../components/Buttons/index";
import MediaCard from "../../components/MediaCard";

import "./Homepage.css";

const Homepage = ({ apiData, setApiData }) => {
  const renderMedia = () => {
    if (apiData) {
      return apiData.map((media) => {
        return <MediaCard data={media} />;
      });
    }
  };

  return (
    <div>
      <div className="homepage">
        <div className="header">
          <h1>ENTER THE MATRIX</h1>
        </div>
        <Buttons setApiData={setApiData} />
      </div>
      <div className="cardsContainer">
        <div className="mediaCards">{renderMedia()}</div>
      </div>
    </div>
  );
};

export default Homepage;
