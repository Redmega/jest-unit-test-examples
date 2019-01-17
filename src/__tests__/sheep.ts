import { countSheep } from "../lib";

describe("Sheep Counter", () => {
  it("exists", () => {
    expect(countSheep).not.toBe(undefined);
  });

  it("can count a number of sheep", () => {
    const sheepCount = countSheep(4);

    expect(sheepCount.match(/sheep/g)).toHaveLength(4);
  });
});
