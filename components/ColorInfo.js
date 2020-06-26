import React from "react";
import ColorForm from "./ColorForm";
import ColorSelect from "./ColorSelect";

import { connect } from "react-redux";
import { getColorList } from "../redux/selectors";

const ColorInfo = ({ colorQuantity, colors }) => {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h2 className="display-4">Color Organizer</h2>
        <p className="lead">Всего цветов: {colorQuantity}</p>
        <ColorSelect colors={colors} />
        <ColorForm />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  const colorQuantity = getColorList(state).length;
  const colors = getColorList(state);
  return {
    colorQuantity,
    colors
  };
};

export default connect(
  mapStateToProps,
  null
)(ColorInfo);
