import React, { useState, useEffect } from "react";
import './App.css';

const initialDictionary = [
 { word: "React", meaning: "A JavaScript library for building user interfaces." },
 { word: "Component", meaning: "A reusable building block in React." },
 { word: "State", meaning: "An object that stores data for a component." }
];

function App() {
 const [searchTerm, setSearchTerm] = useState('');
 const [isClicked, setIsClicked] = useState(false)
 const [searchResult, setSearchResult] = useState('');

 const handleSearch = async () => {
    setIsClicked(true);
    if (searchTerm !== '') {
      const foundWord = initialDictionary.find(entry =>
        entry.word.toLowerCase() === searchTerm.toLowerCase()
      );

      await new Promise(resolve => setTimeout(resolve, 500));
      
      setSearchResult(foundWord ? foundWord.meaning : 'Word not found in the dictionary.');
    }
 };

 useEffect(() => {
    handleSearch();
 }, []);
  
 return (
    <div>
      <h1>Dictionary App</h1>
      <input
        type="text"
        name='searchInput'
        placeholder="Search for a word..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <div>
        <p><strong>Definition: </strong></p>
        {isClicked && searchResult && <p>{searchResult}</p>}
      </div>
    </div>
 );
}

export default App;