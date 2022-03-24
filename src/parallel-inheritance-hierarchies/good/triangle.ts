import { IArea } from "./area.interface";
import { Shape } from "./shape";

export class Triangle extends Shape implements IArea {
  public getArea(): number {
    return (this.getWidth() * this.getHeight()) / 2;
  }
}
