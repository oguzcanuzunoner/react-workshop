import "./App.css";
import Movie from "./Components/Movie";
import Movies from "./Components/Movies";
import Nav from "./Components/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MoviesProvider } from "./Context/MoviesContext";

function App() {
  return (
    <MoviesProvider>
      <Router>
        <Nav />
        <Switch>
          <Route path="/" component={Movies} exact />
          <Route path="/:id" component={Movie} />
        </Switch>
      </Router>
    </MoviesProvider>
  );
}

export default App;
