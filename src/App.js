import React from 'react';
import ImageCounter from './ImageCounter'; // Import the ImageCounter component
import './App.css';

function App() {
  const images = [
    'https://picsum.photos/seed/piccy1/200/300',
    'https://picsum.photos/seed/piccy2/200/300',
    'https://picsum.photos/seed/piccy3/200/300',
  ];

  return (
    <div>
      <h1>Image Counter App</h1>
      <div className="flex-container">
        {images.map((imageUrl) => (
          // each child in a list should have a unique "key" prop
          // this makes sure that when the list is rerednered, React can
          // uniquely identify each element and only update the ones that
          // have changed
          <ImageCounter key={imageUrl} imageUrl={imageUrl} />
        ))}
      </div>
    </div>
  );
}

export default App;
