import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    getNames();
  }
    , []);

  const getNames = async () => {
    const response = await axios.get('/names');

    console.log(response);
    setUserName(response.data);
  }
  return (
    <>
      <h1>My Website</h1>
      <h3>My name is {userName}</h3>
    </>
  );
}

export default App;
