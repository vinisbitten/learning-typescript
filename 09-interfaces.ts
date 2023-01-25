// setting up an interface
interface TeslaModelS {
    type: string;
    length: number;
    width: number;
    wheelbase: number;
    seatingCapacity: number;
    getTyrePressure: () => number;
    getRemCharging: () => number;
}

// implementing
function buildTeslaModelS (teslaObj: TeslaModelS) {
    return {
        type: 'Tesla Model S',
        length: teslaObj.length,
        width: teslaObj.width,
        wheelbase: teslaObj.wheelbase,
        seatingCapacity: teslaObj.seatingCapacity,
        getTyrePressure: () => {
            let tyrePressure = 20;  // Evaluated after doing a few complex computations!
            return tyrePressure;
        },
        getRemCharging: () => {
            let remCharging = 20 // Evaluated after doing a few complex computations!
            return remCharging
        }
    }
}

class car implements TeslaModelS {
    type: string;
    length: number;
    width: number;
    wheelbase: number;
    seatingCapacity: number;
    constructor(public color: string){
        this.type = 'Tesla Model S';
        this.length = 196;
        this.width = 86;
        this.wheelbase = 116;
        this.seatingCapacity = 4;
    }
    getTyrePressure: () => 30; // got it after doing a few complex computations!
    getRemCharging: () => 30 // got it after doing a few complex computations!
}

// creating an object
let myCar = new car('red')

// showing the new object
console.log("My Tesla car: ", myCar);