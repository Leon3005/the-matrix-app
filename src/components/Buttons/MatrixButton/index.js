import { useApolloClient } from "@apollo/client";
import Button from "@material-ui/core/Button";

import "../Buttons.css";

const MatrixButton = ({
  query,
  setApiData,
  setApiLoading,
  buttonName,
  queryArray,
}) => {
  const client = useApolloClient();

  return (
    <Button
      variant="contained"
      className="matrixBtn"
      onClick={async () => {
        const { data, loading } = await client.query({
          query: query,
        });
        if (loading) {
          setApiLoading(true);
        }
        setApiData(data[queryArray]);
      }}
    >
      {buttonName}
    </Button>
  );
};

export default MatrixButton;
