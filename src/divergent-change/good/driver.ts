export interface IDriver {
  print(text: string): void;
}

export class BWDriver implements IDriver {
  public print(text: string): void {
    console.log("Printing " + text + " in Black and White.");
  }
}

export class ColorDriver implements IDriver {
  public print(text: string): void {
    console.log("Printing " + text + " in Colors");
  }
}
