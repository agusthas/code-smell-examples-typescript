export enum ACCOUNT_ROLES {
  ADMIN,
  USER,
}

export class Account {
  constructor(private accountNumber: string, private type: ACCOUNT_ROLES) {}

  public create(): void {
    if (this.type !== ACCOUNT_ROLES.ADMIN) {
      throw new Error("Unauthorized access!");
    }
    console.log("Creating ....");
  }

  public update(): void {
    if (this.type !== ACCOUNT_ROLES.ADMIN) {
      throw new Error("Unauthorized access!");
    }
    console.log("Updating ...");
  }

  public delete(): void {
    if (this.type !== ACCOUNT_ROLES.ADMIN) {
      throw new Error("Unauthorized access!");
    }
    console.log("Deleting ...");
  }
}
