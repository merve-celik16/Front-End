import  { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const StarshipDetail = () => {
  const { id } = useParams();
  const [starship, setStarship] = useState(null);

  useEffect(() => {
    fetch(`https://swapi.dev/api/starships/${id + 1}/`) // API id'si 1'den başlar
      .then(response => response.json())
      .then(data => setStarship(data));
  }, [id]);

  if (!starship) return <p>Yükleniyor...</p>;

  return (
    <div>
      <h2>{starship.name}</h2>
      <p>Model: {starship.model}</p>
      <p>Yolcu Sayısı: {starship.passengers}</p>
      <p>Atmosferdeki Maksimum Hız: {starship.max_atmosphering_speed}</p>
      <p>Üretici: {starship.manufacturer}</p>
      <p>Mürettebat: {starship.crew}</p>
      <p>Kargo Kapasitesi: {starship.cargo_capacity}</p>
      <Link to="/">Ana Sayfaya Dön</Link>
    </div>
  );
};

export default StarshipDetail;