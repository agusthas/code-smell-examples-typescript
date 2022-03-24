import { IArea } from "./area.interface";
import { Shape } from "./shape";

export class Rectangle extends Shape implements IArea {
  public getArea(): number {
    return this.getWidth() * this.getHeight();
  }
}
