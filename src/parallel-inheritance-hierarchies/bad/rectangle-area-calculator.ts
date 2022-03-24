import { IArea } from "./area.interface";
import { Rectangle } from "./rectangle";

export class RectangleAreaCalculator implements IArea {
  constructor(private r: Rectangle) {}

  public getArea(): number {
    return this.r.getWidth() * this.r.getHeight();
  }
}
