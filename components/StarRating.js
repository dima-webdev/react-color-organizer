import React from "react";
import Star from "../components/Star";

import { connect } from "react-redux";
import { rateColor } from "../redux/actions";

const StarRating = ({ currentColor, totalStars, rateColor }) => {
  return (
    <div className="star-wrapper">
      <div className="star-rating">
        {[...Array(totalStars)].map((key, i) => {
          return (
            <Star
              key={i}
              selected={i < currentColor.rating}
              rateStarClick={() => rateColor(currentColor.id, i + 1)}
            />
          );
        })}
      </div>
      <div className="star-stats">
        {currentColor.rating} of {totalStars}
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    rateColor: (id, rating) => dispatch(rateColor(id, rating))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(StarRating);
