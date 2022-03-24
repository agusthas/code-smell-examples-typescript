import { Rectangle } from "./rectangle";
import { Triangle } from "./triangle";

const r = new Rectangle(4, 5);
const t = new Triangle(2, 5);

console.log(r.getArea()); // 20
console.log(t.getArea()); // 5
