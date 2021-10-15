import React from 'react';
import './App.css';
// import profileImage from './img/model-s.jpg'

function App() {

  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
  const images = importAll(require.context('./img', false, /\.(png|jpe?g|svg)$/));
  
  <img src={images['doggy.png']} />
  return (
    <div className="App">
      <h1>My React App</h1>
      <h2>Author: Sanath Punchibandage</h2>
      <img src={images['model-s.jpg']} alt="profile-image" />
      <img src={images['model-3.jpg']} alt="profile-image" />
    </div>
  );
}

export default App;
