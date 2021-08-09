import Button from "@material-ui/core/Button";

import "../Buttons.css";

const MatrixButton = (props) => {
  return (
    <Button variant="contained" className="matrixBtn" onClick={props.onClick}>
      {props.buttonName}
    </Button>
  );
};

export default MatrixButton;
