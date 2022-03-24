import { IArea } from "./area.interface";
import { Triangle } from "./triangle";

export class TriangleAreaCalculator implements IArea {
  constructor(private t: Triangle) {}

  getArea(): number {
    return (this.t.getWidth() * this.t.getHeight()) / 2;
  }
}
