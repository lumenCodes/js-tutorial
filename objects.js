

walk = () => console.log('walk');
walk()

function sum(a,b) {
    const result = a + b
    console.log(result)
    return result;
}
console.log(sum(1,2));

function sum(...args){
    return args.reduce((_new, total) => _new +total) 
}

console.log(sum(1,2,3,8,9))

// default faunctions argument
function interest (principal,rate = 7,years) {
    return (principal * rate * years) /100;
}
console.log(_interest = interest(10000,undefined,1))
console.log(_interest)

// getters and setters
const car = {
    brand: 'Benz',
    model: 'G300',
    get fullname(){
        return(`${car.brand} ${car.model}`)
    },

//     set fullname(value) {

//         if (typeof value !== 'string'){
//           throw new Error('value not a string')};

//         const makeupnames = value.split(" ");
//         this.brand = makeupnames[0]  +  makeupnames[1],
//         this.model = makeupnames[2]
// }
// };

// console.log(car)

// try{
//     car.fullname = null
// } 

// catch(e) {
//     alert(e);
// }
// console.log(car.fullname)
// console.log(car) 
 
 
//stopwatch object

// function watch(){
//     let startT, endT, running, duration = 0;

//     this.startT = function(){
//         for (let i = 0; i <5; i++) {
//             if (i === 1)
//             console.log('watch is already running');
//             else
//             console.log('starting watch')
//         }
            

//         return console.log('watch is on')
//     };

//     // this.endT = function() {

//     // };
// }
// watch.startT

 
// // Abstraction
// // A function that multiplies the arguement by 5
// let multiplier = function (a){
//     console.log(a*5)
// };  
// function multiplierC (a){
//     console.log(a*5)
// };
// let multiplierA = (a) => console.log(a*5);



/**
 * the difference between the two ways of creating objects is these:
 * 1. Object litereals: 
 *          const phone = {
 *              name: 'tecno',
 *              color: 'green'
 *              ring() {
 *                 return 'ding dong, ding'
 *              }}
 * 
 * 2.  Constructor functions: This basically functions that are modified to be object.
 *          function phone (color, name){
 *                  this. color = color,
 *                  this.name = name,
 *                  ring(){
 *                      return 'ding dong ding'
 *                          }}
 * 
 * so ocnstructor functions are like functions but it can't have this.theFunctionArguments
 * 
 * with  literals if tou want to create new function then you have to go throught the stress of writing a complete function everythime. 
 * but with constructor to crete newfunction you use the 'new' keyword. The new keyword will make a new instance of the object. more like copying  a file and giving it a neew name and you can also give the file newproperties or modify exostinf ones without affecting the parent file.
 * 
 *  to create a new fincion withthe new keyword yoy use 
 *                const Nokia = new phone // note it is advised to use capital letters while creating constructor function this is so that it can be easily diffrebtiated from normal functions.
 * 
 * 
 * Another way of creating a nameless constructor function is 
 *                  let phone = new function (then the funcyion parAMETERS)
 *                      this.functionParameter = functuntion parameter,
 *                      this.functuonParameter = function parameter
 *                              }
 * 
 *
 * 
 */