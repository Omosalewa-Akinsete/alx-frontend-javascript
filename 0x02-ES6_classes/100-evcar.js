// 100-evcar.js

import Car from './10-car.js';

class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super();
    this._brand = brand;
    this._motor = motor;
    this._color = color;
    this._range = range;
  }

  cloneCar() {
    const { _brand, _motor, _color } = this;
    const clonedCar = new Car();
    clonedCar._brand = _brand;
    clonedCar._motor = _motor;
    clonedCar._color = _color;
    return clonedCar;
  }
}

export default EVCar;
