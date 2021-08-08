import MatrixButton from "../../components/Buttons/MatrixButton/index";

import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="header">
        <h1>ENTER THE MATRIX</h1>
      </div>
      <div>
        <MatrixButton buttonName="The Matrix" />
        <MatrixButton buttonName="The Matrix Reloaded" />
        <MatrixButton buttonName="The Matrix Revolutions" />
      </div>
    </div>
  );
};

export default Homepage;
