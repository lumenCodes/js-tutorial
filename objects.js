

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

    set fullname(value) {

        if (typeof value !== 'string'){
          throw new Error('value not a string')};

        const makeupnames = value.split(" ");
        this.brand = makeupnames[0]  +  makeupnames[1],
        this.model = makeupnames[2]
}
};

console.log(car)

try{
    car.fullname = null
} 

catch(e) {
    alert(e);
}
console.log(car.fullname)
console.log(car)

