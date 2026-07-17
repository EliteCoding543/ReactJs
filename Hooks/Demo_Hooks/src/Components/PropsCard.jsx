import React from "react";

const PropsCard = (props) => {
  console.log(props);

  return (
    <div className="border-2 border-blue-500 p-5 rounded-lg">
      {props.children}
    </div>
  );
};

export default PropsCard;