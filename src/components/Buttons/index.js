import { MATRIX, MATRIXRELOADED, MATRIXREVOLUTIONS } from "../../queries";

import MatrixButton from "./MatrixButton";

const Buttons = ({ setApiData, setApiLoading }) => {
  return (
    <div className="buttonsContainer">
      <MatrixButton
        buttonName="The Matrix"
        query={MATRIX}
        queryArray="matrix"
        setApiData={setApiData}
        setApiLoading={setApiLoading}
      />
      <MatrixButton
        buttonName="The Matrix Reloaded"
        query={MATRIXRELOADED}
        queryArray="matrixReloaded"
        setApiData={setApiData}
        setApiLoading={setApiLoading}
      />
      <MatrixButton
        buttonName="The Matrix Revolutions"
        query={MATRIXREVOLUTIONS}
        queryArray="matrixRevolutions"
        setApiData={setApiData}
        setApiLoading={setApiLoading}
      />
    </div>
  );
};

export default Buttons;
