import { useLazyQuery } from "@apollo/client";
import { MATRIX, MATRIXRELOADED, MATRIXREVOLUTIONS } from "../../queries";

import MatrixButton from "./MatrixButton";

const Buttons = ({ setApiData }) => {
  const [
    getMatrixData,
    { data: matrixData, loading: matrixLoading, error: matrixError },
  ] = useLazyQuery(MATRIX);

  const [
    getMatrixReloadedData,
    { data: reloadedData, loading: reloadedLoading, error: reloadedError },
  ] = useLazyQuery(MATRIXRELOADED);

  const [
    getMatrixRevolutionsData,
    {
      data: revolutionsData,
      loading: revolutionsLoading,
      error: revolutionsError,
    },
  ] = useLazyQuery(MATRIXREVOLUTIONS);

  if (matrixError || reloadedError || revolutionsError) {
    console.log("error!");
  }

  if (matrixData) {
    setApiData(matrixData);
  }
  if (reloadedData) {
    setApiData(reloadedData);
  }
  if (revolutionsData) {
    setApiData(revolutionsData);
  }

  return (
    <div>
      <MatrixButton buttonName="The Matrix" onClick={getMatrixData} />
      <MatrixButton
        buttonName="The Matrix Reloaded"
        onClick={getMatrixReloadedData}
      />
      <MatrixButton
        buttonName="The Matrix Revolutions"
        onClick={getMatrixRevolutionsData}
      />
    </div>
  );
};

export default Buttons;
