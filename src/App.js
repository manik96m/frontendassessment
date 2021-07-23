import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import Landing from "./screens/landing/Landing";
import Payment from "./screens/payment/Payment";
import Pricing from "./screens/pricing/Pricing";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route path="/pricing" component={Pricing} />
        <Route path="/payment" component={Payment} />
        <Route path="/" component={Landing} />
      </Switch>
    </Router>
  );
}

export default App;
