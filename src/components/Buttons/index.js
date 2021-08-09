import { MATRIX, MATRIXRELOADED, MATRIXREVOLUTIONS } from "../../queries";

import MatrixButton from "./MatrixButton";

const Buttons = ({ setApiData }) => {
  return (
    <div>
      <MatrixButton
        buttonName="The Matrix"
        query={MATRIX}
        queryArray="matrix"
        setApiData={setApiData}
      />
      <MatrixButton
        buttonName="The Matrix Reloaded"
        query={MATRIXRELOADED}
        queryArray="matrixReloaded"
        setApiData={setApiData}
      />
      <MatrixButton
        buttonName="The Matrix Revolutions"
        query={MATRIXREVOLUTIONS}
        queryArray="matrixRevolutions"
        setApiData={setApiData}
      />
    </div>
  );
};

export default Buttons;
