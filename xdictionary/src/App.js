import './App.css';
import React, { useState, useEffect } from "react";



function App() {
  const [dictionary, setDictionary] = useState([
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [isClicked, setIsClicked] = useState(false)
  const [searchResult, setSearchResult] = useState('');

  
  const handleSearch = async () => {
    setIsClicked(true);
    if (searchTerm !== '') {
      const foundWord = dictionary.find(entry =>
        entry.word.toLowerCase() === searchTerm.toLowerCase()
      );
  
      await new Promise(resolve => setTimeout(resolve, 500));
      
      setSearchResult(foundWord ? foundWord.meaning : 'Word not found in the dictionary.');
    }
  };


  useEffect(() => {
    
    handleSearch();
  }, [dictionary]);
  
  return (
    <div>
      <h1>Dictionary App</h1>
      <input
        type="text"
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


};





export default App;
