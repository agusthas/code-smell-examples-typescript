import { Printer } from "./printer";
import { ColorDriver, BWDriver } from "./driver";

const cDriver = new ColorDriver();
const bwDriver = new BWDriver();
const cPrinter = new Printer(cDriver);
const bwPrinter = new Printer(bwDriver);

bwPrinter.print("hello"); // Printing hello in Black and White.
cPrinter.print("hello"); // Printing hello in Colors.
