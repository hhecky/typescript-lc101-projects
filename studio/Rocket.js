"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.cargoItems = []; //now I have to import Cargo file! (above); =[] initializes it to an empty array
        this.astronauts = []; //nnow I have to import Astronaut file! (above); and again, =[] initializes it to an empty array
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    Rocket.prototype.sumMass = function (items) {
        //return the full sum of massKg
        var total = 0;
        for (var i = 0; i < items.length; i++) {
            total += items[i].massKg;
        }
        return total;
    };
    Rocket.prototype.currentMassKg = function () {
        //return total mass of cargo items and astronauts
        var totalMassOfCargoItems = this.sumMass(this.cargoItems);
        var totalAstroMass = this.sumMass(this.astronauts);
        return totalMassOfCargoItems + totalAstroMass;
    };
    Rocket.prototype.canAdd = function (item) {
        var totalMassWithItem = this.currentMassKg() + item.massKg;
        return totalMassWithItem <= this.totalCapacityKg;
    };
    Rocket.prototype.addCargo = function (item) {
        if (this.canAdd(item)) {
            this.cargoItems.push(item);
            return true;
        }
        else {
            return false;
        }
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        }
        else {
            return false;
        }
    };
    return Rocket;
}());
exports.Rocket = Rocket;
