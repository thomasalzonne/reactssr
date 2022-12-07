import { useEffect, useState } from 'react';
import './App.css';
import React from 'react'

function App() {
  const [wines, setWines] = useState([]);

  const getWines = () => {
  return fetch('http://localhost:8000')
    .then((response) => response.json())
    .then((data) => data);
  };

  useEffect(() => {
    getWines().then((wines) => setWines(wines));
  }, []);
  return (
    <div className="App">
      {wines && <div>Wines</div>}
      {wines &&
        wines.map( wine => 
            <div>
              {wine.name} - {wine.annee}
            </div>
          )
      }
    </div>
  );
}

export default App;
