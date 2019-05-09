import React from "react";

const FormGroup = ({ type, id, extra, value, onChange, placeHolder }) => {
  switch (type) {
    case "select":
      return (
        <div className="form-group">
          <label className="font-weight-bold" htmlFor={extra + id}>
            {extra}
          </label>
          <select
            className="form-control"
            id={extra + id}
            value={value}
            onChange={onChange}
          >
            <option value="1">1</option>
            <option value="0.1">0.1</option>
            <option value="0.01">0.01</option>
          </select>
        </div>
      );
    default:
      return (
        <div className="form-group">
          <label className="font-weight-bold" htmlFor={extra + id}>
            {extra}
          </label>
          <input
            type="text"
            className="form-control"
            id={extra + id}
            value={value}
            onChange={onChange}
            placeholder={placeHolder}
          />
        </div>
      );
  }
};

export default FormGroup;
