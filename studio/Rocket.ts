import {Payload} from "./Payload";
import { Cargo } from './Cargo';
import { Astronaut } from './Astronaut';

export class Rocket implements Payload {
    // properties and methods
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = []; //now I have to import Cargo file! (above); =[] initializes it to an empty array
    astronauts: Astronaut[] = [];  //nnow I have to import Astronaut file! (above); and again, =[] initializes it to an empty array
    massKg: number;
    material: string;
    items: Payload[];

    constructor(name: string, totalCapacityKg: number) {
        this.name=name;
        this.totalCapacityKg=totalCapacityKg;
    }
    sumMass(items: Payload[]): number {
        //return the full sum of massKg
        let total = 0;
        for (let i:number = 0; i < items.length; i++) {
            total += items[i].massKg;
        }
        return total;
    }

    currentMassKg(): number {
        //return total mass of cargo items and astronauts
        const totalMassOfCargoItems: number = this.sumMass(this.cargoItems);
        const totalAstroMass: number = this.sumMass(this.astronauts);
        return totalMassOfCargoItems + totalAstroMass;
    }

    canAdd(item: Payload): boolean {
        let totalMassWithItem: number = this.currentMassKg() + item.massKg;
        return totalMassWithItem <= this.totalCapacityKg;
    }

    addCargo(item: Cargo): boolean {
        if (this.canAdd(item)) {
            this.cargoItems.push(item);
            return true;
        } else {
            return false;
        }
    }

    addAstronaut(astronaut: Astronaut): boolean {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        } else {
            return false;
        }
    }
}