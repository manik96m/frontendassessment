import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Landing from './screens/landing/Landing';
import Pricing from "./screens/pricing/Pricing";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/pricing">
          <Pricing />
        </Route>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
  </Router>
  );
}

export default App;
