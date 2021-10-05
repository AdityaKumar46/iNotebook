import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import About from './components/About';
import NoteState from './context/notes/NoteState';

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar/>
          <div className="container"></div>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/about">
              <About/>
            </Route>
          </Switch>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
