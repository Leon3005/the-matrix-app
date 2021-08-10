import Buttons from "../../components/Buttons/index";
import MediaCard from "../../components/MediaCard";

import "./Homepage.css";

const Homepage = ({ apiData, setApiData, apiLoading, setApiLoading }) => {
  const renderMedia = () => {
    if (apiLoading) {
      return <h1> Loading data... </h1>;
    }

    if (apiData) {
      setApiLoading(false);
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
        <Buttons setApiData={setApiData} setApiLoading={setApiLoading} />
      </div>
      <div className="cardsContainer">
        <div className="mediaCards">{renderMedia()}</div>
      </div>
    </div>
  );
};

export default Homepage;
