export const countSheep = num => {
  let string = "";
  for (let i = 0; i < num; i++) {
    string += `${i} sheep, `;
  }
  return string;
};

export const carUtils = {
  paint: (car: ICar, color: string) => {
    return {
      ...car,
      Color: color
    };
  },
  fillUp: (car: ICar) => {
    if (car.Gas_Tank_in_Gallons > car.Gas_in_Tank) {
      return {
        ...car,
        Gas_in_Tank: car.Gas_Tank_in_Gallons
      };
    } else {
      throw new Error("Car is already full");
    }
  },
  drive: (car: ICar, miles: number) => {
    return {
      ...car,
      Gas_in_Tank: car.Gas_in_Tank - miles * car.Miles_per_Gallon,
      Mileage: car.Mileage + miles
    };
  }
};

export interface ICar {
  Name: string;
  Miles_per_Gallon: number;
  Cylinders: number;
  Displacement: number;
  Horsepower: number;
  Weight_in_lbs: number;
  Acceleration: number;
  Year: string;
  Origin: string;

  // Things we add in the test
  Gas_Tank_in_Gallons: number;
  Gas_in_Tank: number;
  Mileage: number;
  Color: string;
}

export default {
  carUtils
};
