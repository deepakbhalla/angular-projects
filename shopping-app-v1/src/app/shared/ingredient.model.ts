export class Ingredient {

    // Typescript provides below two options to create instance variables and its constructor.

    /* public name: string;
    public amount: number;

    constructor(name: string, amount: number) {
        this.name = name;
        this.amount = amount;
    } */

    constructor(public name: string, public amount: number) {};
}