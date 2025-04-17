import { useState } from "react";

const StarshipSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Yıldız gemisi ara..."
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
};

export default StarshipSearch;