import React from "react";
import Color from "../components/Color";

import { connect } from "react-redux";
import { getColorList } from "../redux/selectors";

const ColorList = ({ colors }) => {
  return (
    <div className="color-list">
      <div className="row align-items-center">
        {colors.length === 0 ? (
          <div className="col-md-12">
            <div className="alert alert-secondary" role="alert">
              0 colors...
            </div>
          </div>
        ) : (
          colors.map((color, i) => (
            <div className="col-lg-3 col-md-6" key={i}>
              <Color key={i} color={color} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  const colors = getColorList(state);
  return {
    colors
  };
};

export default connect(
  mapStateToProps,
  null
)(ColorList);
