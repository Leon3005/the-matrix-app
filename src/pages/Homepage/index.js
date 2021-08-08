import MatrixButton from "../../components/Buttons/MatrixButton/index";

import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="homepage">
      <div>
        <h1>This is the homepage</h1>
      </div>
      <div>
        <MatrixButton buttonName="The Matrix" />
      </div>
    </div>
  );
};

export default Homepage;
