import './App.css';
import Home from "../src/components/home/Home";
import Checkin from "../src/components/checkin/Checkin";
import Giftshop from "../src/components/giftshop/Giftshop";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/checkin">
          <Checkin />
        </Route>

        <Route exact path="/giftshop">
          <Giftshop />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
