import React from "react";

const Card = ({ name, imgSrc }) => {

    // Button Click Handker

    function btnClickHandler(){
        console.log("Click Btn Using React")
    }

  return (
    <div style={{width: "220px", height: "220px", border: "2px solid black", objectFit: "cover"}}>
      <img style={{width: "100%"}} src={imgSrc} alt={name} />
      <p>{name}</p>

      <button className="h-5 w-5" onClick={btnClickHandler}>Click Me!</button>

      {/* without fn call button */}

      <button onClick={() => console.log("Button Clicked")}>
            Click Me2!
            </button>
    </div>
  );
};

export default Card;