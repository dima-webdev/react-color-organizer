import React, { useState } from "react";
import { removeColorAsync } from "../redux/actions";
import StarRating from "../components/StarRating";

import { connect } from "react-redux";

const Color = ({ color, dispatch }) => {
  const [state, setState] = useState({
    isOnRemove: false
  });

  const loadingRemove = () => {
    setState({ isOnRemove: true });
    dispatch(removeColorAsync(color.id));
    setTimeout(() => {
      setState({ isOnRemove: false });
    }, 1000);
  };

  return (
    <div className="color-wrapper">
      {state.isOnRemove ? (
        <div className="spinner-border text-danger" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <React.Fragment>
          <h2>{color.title}</h2>
          <div
            className="color"
            style={{ backgroundColor: color.color, minHeight: 120 }}
          />
          <h3>{color.color}</h3>
          <StarRating currentColor={color} totalStars={5} />
          <button className="btn btn-danger" onClick={loadingRemove}>
            Remove
          </button>
        </React.Fragment>
      )}
    </div>
  );
};

export default connect(
  null,
  null
)(Color);
