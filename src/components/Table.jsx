import React from "react";
import Car from "./Car";
import carPark from "../carPark";

function newCar(carPark) {
  return (
    <Car
      key={carPark.parking_id}
      car_reg={carPark.car_reg}
      num_occupants={carPark.num_occupants}
      parking_day={carPark.parking_day}
      parking_hours={carPark.parking_hours}
    />
  );
}

function sortedOccupants(carPark) {
  return carPark.num_occupants >= 5;
}

function sortedTime(carPark) {
  return carPark.parking_hours >= 11;
}

function sortedDay(carPark) {
  return carPark.parking_day === "Saturday" || carPark.parking_day === "Sunday";
}

function Table1() {
  return (
    <table className="table table-striped table-dark">
      <thead>
        <tr>
          <th scope="col">Registration number</th>
          <th scope="col">Occupants</th>
          <th scope="col">Day</th>
          <th scope="col">Hours</th>
        </tr>
      </thead>
      <tbody>{carPark.map(newCar)}</tbody>
    </table>
  );
}

function Table2() {
  return (
    <table className="table table-hover table-dark">
      <thead>
        <tr>
          <th scope="col">Over 4 Occupants</th>
        </tr>
      </thead>
      <tr>
        <th scope="col">Registration number</th>
        <th scope="col">Occupants</th>
        <th scope="col">Day</th>
        <th scope="col">Hours</th>
      </tr>
      <tbody>{carPark.filter(sortedOccupants).map(newCar)}</tbody>
    </table>
  );
}

function Table3() {
  return (
    <table className="table table-hover table-dark">
      <thead>
        <tr>
          <th scope="col">Over 6 Hours</th>
        </tr>
      </thead>
      <tr>
        <th scope="col">Registration number</th>
        <th scope="col">Occupants</th>
        <th scope="col">Day</th>
        <th scope="col">Hours</th>
      </tr>
      <tbody>{carPark.filter(sortedTime).map(newCar)}</tbody>
    </table>
  );
}

function Table4() {
  return (
    <table className="table table-hover table-dark">
      <thead>
        <tr>
          <th scope="col">Weekend Parking</th>
        </tr>
      </thead>
      <tr>
        <th scope="col">Registration number</th>
        <th scope="col">Occupants</th>
        <th scope="col">Day</th>
        <th scope="col">Hours</th>
      </tr>
      <tbody>{carPark.filter(sortedDay).map(newCar)}</tbody>
    </table>
  );
}

export { Table1, Table2, Table3, Table4 };
