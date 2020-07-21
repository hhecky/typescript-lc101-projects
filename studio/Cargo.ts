import {Payload} from "./Payload";

export class Cargo implements Payload {
    // properties and methods
    massKg: number;
    material: string;

    constructor(massKg: number, material: string) {
        this.material = material;
        this.massKg = massKg;
    }
 }