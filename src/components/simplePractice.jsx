import React from 'react';
import "../styles/gridPractice.css";

const SimplePractice = () => {
  let arr = [];
  for (let i = 0; i < 9; i++) {
    arr.push(i);
  }
  console.log(arr);
  return (
    <>
      <div className="grid-container">
        {arr.map((elem, index) => <div className={`item${index}`}>{elem}</div> )}
      </div>
    </>
  )
  }

export default SimplePractice