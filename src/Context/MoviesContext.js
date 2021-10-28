import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const MoviesContext = createContext();

const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get("https://imdb-api.com/en/API/MostPopularTVs/#burayagiriniz")
      .then((response) => setMovies(response.data.items))
      .catch((err) => alert(err));
  }, []);

  const values = { movies };

  return (
    <MoviesContext.Provider value={values}>{children}</MoviesContext.Provider>
  );
};

const useMovies = () => useContext(MoviesContext);

export { MoviesProvider, useMovies };
