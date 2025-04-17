
import {Routes, Route} from 'react-router-dom' 
import StarshipList from "./components/StarshipList";
import StarshipDetail from "./components/StarshipDetail";

function App() {
  return (
 
      <div className="App">
        <h1>Star Wars Starships</h1>
        <Routes>
          <Route path="/" element={<StarshipList />} />
          <Route path="/starship/:id" element={<StarshipDetail />} />
        </Routes>
      </div>
  
  );
}

export default App;