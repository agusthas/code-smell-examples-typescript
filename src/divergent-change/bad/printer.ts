export class Printer {
  constructor() {}

  print(text: string, style: "bw" | "color" = "bw"): void {
    if (style === "bw") {
      console.log("Printing " + text + "in Black and White.");
    } else {
      console.log("Printing " + text + "in Colors.");
    }
  }
}
