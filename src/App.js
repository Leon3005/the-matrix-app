import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import Homepage from "./pages/Homepage";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Switch>
            <Route path="/">
              <Homepage />
            </Route>
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  );
};

export default App;
