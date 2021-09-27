import React from "react";

const Cards = ({ name, typeValue }) => {
  return (
    <div className="card mt-3 mb-2">
      <h5 className="card-header">{name}</h5>
      <div className="card-body">
        <h5 className="card-title">{typeValue}</h5>
      </div>
    </div>
  );
};

export default Cards;
