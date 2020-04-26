import React from "react";

const Dropdown = ({ id, label, state, setState, options }) => (
  <div className="form-group">
    <label className="frm-label" htmlFor={id}>
      {label}
    </label>
    <select
      id={id}
      className="form-select block w-full"
      value={state}
      onChange={(e) => setState(e.target.value)}
      onBlur={(e) => setState(e.target.value)}
      disabled={options.length === 0}
    >
      <option>All</option>
      {options.map((item) => (
        <option value={item} key={item}>
          {item}
        </option>
      ))}
    </select>
  </div>
);

export default Dropdown;
