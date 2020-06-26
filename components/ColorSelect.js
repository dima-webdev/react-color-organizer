import React from "react";
import Select from "react-select";

const ColorSelect = ({ colors }) => {
  const options = colors.map(color => {
    return { value: color.title, label: color.title };
  });

  return (
    <div>
      <Select
        options={options}
        clearable={true}
        placeholder="Search colors"
        isClearable={true}
        className="select-margin"
      />
    </div>
  );
};

export default ColorSelect;
