import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { useState } from "react";

import Homepage from "./pages/Homepage";

const client = new ApolloClient({
  uri: "https://lw-the-matrix-server.herokuapp.com/",
  cache: new InMemoryCache(),
});

const App = () => {
  const [apiData, setApiData] = useState();

  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Switch>
            <Route path="/">
              <Homepage apiData={apiData} setApiData={setApiData} />
            </Route>
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  );
};

export default App;
