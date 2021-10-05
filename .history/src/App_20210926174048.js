import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>

      <Router>
        <Navbar />
        <Home />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/users">
            <Users />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
