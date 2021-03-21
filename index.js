// variables
console.log('Hello Paraclete');
let name = 'Chinwe';
console.log('name');

const age = 50

console.log('age');

// objects
let persons = {
    name: 'Livi',
    age: 29
};
console.log(persons);

persons.name = 'Ezeh Livinus'
console.log(persons.name)

// const vehicle = {
//     tire : 4,
//     door : 4,
//     colour : 'white',
//     accelarator : true,
//     move: function() {
//         console.log('Vehicle is on the move')
//     },
//     brake: function() {
//         console.log('the speed of the vehicle is reduced by half')
//     },
//     stop: function() {
//         console.log('the car has stopped')
//     }
// }


//factory functions
function vehicle (tire, door, colour, accelarator) {
 return {
    tire : Number,
    door : 4,
    colour : 'white',
    accelarator : true,
    move() {
        console.log('Vehicle is on the move');
    },
    brake() {
        console.log('the speed of the vehicle is reduced by half');
    },
    stop() {
        console.log('the car has stopped');
    }
 }
 
}
console.log(vehicle)
vehicle.stop
console.log('I will soon buy a ', vehicle.colour ,'Benz, with ', vehicle.tire, 'tires')

// another instance of a vehicle
const Jeep = vehicle(2, 2, 'black', 'none') //note that none is suposed to be a boolean value
console.log(Jeep)

// Constructor function
function User(name) {  //Pascal notation
    this.name = name;
    this.login = function() {
        console.log('User logged in');
    } 
}
const admin = new User('Obi');
User()


//arrays

let qualities = ['fair', 'programmer'];
console.log(qualities)
qualities[6] = 'kind'; //if you write it without the array literal it will change it to a string
console.log(qualities)

// functions
function blessing(name) {
    console.log('May the Spirit of God bless you ' + name);
}

blessing('Chinwe');

