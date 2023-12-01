import React, { useState } from 'react';

// ImageCounter component
function ImageCounter({ imageUrl }) {
  // State variable for count and the function to update it
  // useState is a function that returns an array of two elements
  // The first element is the state variable and the second is the function
  // to update the state variable
  // lines 13 and 19 are examples of setting it to a new value
  //                                this 0 sets it to 0 initially
  const [count, setCount] = useState(0);

  // Event handler function to increment the count
  const handleIncrement = () => {
    setCount(count + 1);
  };

  // Event handler function to reset the count
  const handleReset = () => {
    setCount(0);
  };

  // JSX to define the component structure
  return (
    <div className="image-counter-card">
      <img
        src={imageUrl}
        alt="Click me"
        className="image-counter-image"
        onClick={handleIncrement}
      />
      <p className="image-counter-count">Click Count: {count}</p>
      <button className="reset-button" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}

export default ImageCounter;
