import { IDriver } from "./driver";

export class Printer {
  constructor(private driver: IDriver) {}

  setDriver(driver: IDriver) {
    this.driver = driver;
  }

  print(text: string): void {
    this.driver.print(text);
  }
}
