import { Rectangle } from "./rectangle";
import { RectangleAreaCalculator } from "./rectangle-area-calculator";
import { Triangle } from "./triangle";
import { TriangleAreaCalculator } from "./triangle-area-calculator";

const r = new Rectangle(4, 5);
const rCalc = new RectangleAreaCalculator(r);

const t = new Triangle(2, 5);
const tCalc = new TriangleAreaCalculator(t);

console.log(rCalc.getArea()); // 20

console.log(tCalc.getArea()); // 5
