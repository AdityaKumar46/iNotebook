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
          <Route path="/">
            <About />
          </Route>
          <Route exact path="/about">
            <Users />
          </Route>
          <Route exact path="/users">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
