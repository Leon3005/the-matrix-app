import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Homepage from "./pages/Homepage";

const App = () => {
  return (
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
  );
};

export default App;
