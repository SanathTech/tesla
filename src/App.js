import React from 'react';
import './App.css';
import profileImage from './img/model-s.jpg'

function App() {
  return (
    <div className="App">
      <h1>My React App</h1>
      <h2>Author: Sanath Punchibandage</h2>
      <img src={profileImage} alt="profile-image" />
    </div>
  );
}

export default App;
