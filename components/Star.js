import React from "react";

const Star = ({ selected = false, rateStarClick }) => {
  return (
    <div
      className={selected ? "star selected" : "star"}
      onClick={rateStarClick}
    />
  );
};

export default Star;
