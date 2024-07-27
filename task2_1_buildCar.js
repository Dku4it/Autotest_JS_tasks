// Description: the mini-plant in Ukraine has built 1 car of bmw model using project documentation of the official BMW.
// The car has the following properties:
//      color: red
//      transmission: auto
//      type: sedan
//      engine
//      cooling system
// The engine was built at the official BMW plant in Germany, but has a custom fuel system built in Ukraine.
// By default, the cooling system was present, but couldn't cool seats.
// The customer requested changing modification of the cooling system and set the audio system.

// Task: create classes, which will re-present the scenario above. Use ES6 standard or higher and implement all OOP principles.



class Engine {
    constructor(origin = 'Germany', fuelSys = 'Stock') {
        this.origin = origin
        this.fuelSys = fuelSys
        }
        modFuelSys(fuelSys) {
            this.fuelSys = fuelSys
        }
    }

// testing Engine class
// const EnginV5 = new Engine()
// console.log(EnginV5)
// EnginV5.modFuelSys('UA Custom')
// console.log(EnginV5)


class CoolSys {
    constructor(Presented = true, Seats = false) {
      this.Seats = Seats
      this.Presented = Presented
    }  
    modCoolSys() {
        this.Seats = !this.Seats
    }
}

// testing CoolSys class
// const Cooler2000 = new CoolSys()
// console.log(Cooler2000)
// Cooler2000.modCoolSys()


class Car {
    constructor(color, transmission, type) {
        this.color = color
        this.transmission = transmission
        this.type = type
        this.engine = new Engine('Germany', 'UA Custom')
        this.coolingSys = new CoolSys()
        this.addition = []
    }
    addOption(item) {
          this.addition.push(item)
    }
}

function printCar(vin) {
console.log(`
<<< Details about car >>>
Color: ${vin.color}
Transmission: ${vin.transmission}
Type: ${vin.type}
Engine: ${vin.engine.origin} (fuel system: ${vin.engine.fuelSys})
Cooling System: ${vin.coolingSys.Presented} (CoolSeats: ${vin.coolingSys.Seats})
Additional options: ${vin.addition}`)
}

const vin0001 = new Car("Red", "Auto", "Sedan") // Made a car
vin0001.coolingSys.modCoolSys() // Cool seats option
vin0001.addOption('Audio system') // Add audio
printCar(vin0001) // Printing function
