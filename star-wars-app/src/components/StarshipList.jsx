import  { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import StarshipSearch from "./StarshipSearch";

const StarshipList = () => {
  const [starships, setStarships] = useState([]);
  const [nextPage, setNextPage] = useState(null);

  // Yıldız gemilerini API'den çekme
  const fetchStarships = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setStarships(data.results);
        setNextPage(data.next);
      });
  };

  useEffect(() => {
    fetchStarships("https://swapi.dev/api/starships/");
  }, []);

  const loadMore = () => {
    if (nextPage) {
      fetchStarships(nextPage);
    }
  };

  return (
    <div>
      <StarshipSearch />
      <ul>
        {starships.map((starship) => (
          <li key={starship.name}>
            <Link to={`/starship/${starship.name}`}>
              <h2>{starship.name}</h2>
              <p>Model: {starship.model}</p>
              <p>Speed: {starship.max_atmosphering_speed}</p>
            </Link>
          </li>
        ))}
      </ul>
      {nextPage && <button onClick={loadMore}>Daha Fazla</button>}
    </div>
  );
};

export default StarshipList;