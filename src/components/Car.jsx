import React from "react";

function newCar(props) {
  return (
    <tr>
      <td>{props.car_reg}</td>
      <td>{props.num_occupants}</td>
      <td>{props.parking_day}</td>
      <td>{props.parking_hours}</td>
    </tr>
  );
}

export default newCar;
