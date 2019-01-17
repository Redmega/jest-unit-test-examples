import { carUtils } from "../lib";

import mockCarData from "../data-json";

// import mockCarData from "../data-json";

describe("Car Methods", () => {
  // Picks a random car from our array
  let car = {
    ...mockCarData[Math.floor(Math.random() * mockCarData.length)],
    Color: "green",
    Gas_Tank_in_Gallons: 20,
    Gas_in_Tank: 20,
    Mileage: 5000
  };

  describe("Body Shop", () => {
    it("can paint a car", () => {
      expect(carUtils.paint).not.toBe(undefined);

      expect(carUtils.paint(car, "yellow")).toEqual(
        expect.objectContaining({
          Color: "yellow"
        })
      );
    });
  });

  describe("Gas Station", () => {
    it("can fill up a car", () => {
      expect(carUtils.fillUp).not.toBe(undefined);
      car.Gas_in_Tank = 0;
      car = carUtils.fillUp(car);
      expect(car).toEqual(
        expect.objectContaining({
          Gas_in_Tank: car.Gas_Tank_in_Gallons
        })
      );

      expect(() => carUtils.fillUp(car)).toThrow();
    });
  });

  describe("Driver", () => {
    it("can drive", () => {
      expect(carUtils.drive).not.toBe(undefined);
      const arrayA = [1, 2, 3];
      const arrayB = [4, 5, 6];
      const total = [...arrayA, ...arrayB];

      const originalCar = { ...car };

      car = carUtils.drive(car, 400);
      expect(car).toEqual(
        expect.objectContaining({
          Mileage: 5400,
          Gas_in_Tank:
            originalCar.Gas_in_Tank - originalCar.Miles_per_Gallon * 400
        })
      );
    });
  });
});
