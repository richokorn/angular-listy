export class Ingredient {
  // We can remove this because we are adding an accessor in the constructor
  // public name: string;
  // public amount: number;
  // public unit: string;

  constructor(
    public name: string,
    public amount: number,
    public unit: string
  ) {}
  // this.name = name;
  // this.amount = amount;
  // this.unit = unit;
}
