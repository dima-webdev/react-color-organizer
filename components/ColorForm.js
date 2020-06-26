import React, { useState } from "react";
import { addColor } from "../redux/actions";

import { connect } from "react-redux";

// class ColorForm2 extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       textInputValue: "",
//       colorInputValue: "#eeeeee"
//     };
//     this.baseState = this.state;
//     this.handleChange = evt => {
//       this.setState({ [evt.target.name]: evt.target.value });
//     };
//     this.handleSubmit = e => {
//       const { textInputValue, colorInputValue } = this.state;
//       e.preventDefault();
//       this.props.addColor(textInputValue, colorInputValue);
//       this.setState(this.baseState);
//     };
//   }
//   render() {
//     const { textInputValue, colorInputValue } = this.state;
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <div className="form-group">
//           <label>Color name</label>
//           <input
//             type="text"
//             className="form-control"
//             name="textInputValue"
//             onChange={this.handleChange}
//             value={textInputValue}
//             placeholder="Color title"
//             required
//           />
//           <input
//             type="color"
//             className="color-input"
//             name="colorInputValue"
//             onChange={this.handleChange}
//             value={colorInputValue}
//           />
//           <button className="btn btn-dark">Add color</button>
//         </div>
//       </form>
//     );
//   }
// }

const ColorForm = ({ addColor }) => {
  const baseState = {
    textInputValue: "",
    colorInputValue: "#eeeeee"
  };

  const [state, setState] = useState(baseState);

  const handleChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    addColor(state.textInputValue, state.colorInputValue);
    setState(baseState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row justify-content-md-center align-items-center">
        <div className="col-md-3">
          <input
            type="text"
            className="form-control"
            name="textInputValue"
            onChange={handleChange}
            value={state.textInputValue}
            placeholder="Color title"
            required
          />
        </div>
        <div className="col-md-1">
          <input
            type="color"
            className="color-input"
            name="colorInputValue"
            onChange={handleChange}
            value={state.colorInputValue}
          />
        </div>
        <div className="col-md-auto">
          <button className="btn btn-success">Add color</button>
        </div>
      </div>
    </form>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    addColor: (inputValue, colorValue) =>
      dispatch(addColor(inputValue, colorValue))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ColorForm);
