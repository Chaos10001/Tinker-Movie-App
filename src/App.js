import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home.jsx";
import Search from "./components/pages/Search";
import NavBar from "./components/Header/NavBar";
import Contact from "./components/pages/Contact";
import Top from "./components/pages/Top";
import Premium from "./components/pages/Premium";
import About from "./components/pages/About";
import Decline from "./components/payment/decline";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/top">
          <Top />
        </Route>
        <Route path="/premium">
          <Premium />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/decline">
          <Decline />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
