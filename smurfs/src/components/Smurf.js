import React from "react";

const Smurf = props => {
  return (
    <li className="Smurf">
      <div className="Smurf-buttons">
        {/* <span onClick={deleteItem}>X</span> */}
      </div>
      <h3>{props.smurf.name}</h3>
      <strong>{props.smurf.height} tall</strong>
      <p>{props.smurf.age} smurf years old</p>
    </li>
  );
};

export default Smurf;
