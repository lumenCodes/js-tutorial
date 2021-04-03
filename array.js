const numb = [4, 4, 2];

numb.push(3,7, 1);// adds at the end
numb.unshift(2,3)

numb.splice(6,0, 'h', 'w') // index of the number, and no of elementas to be deleted, things to be added

console.log(numb);

// finding elements (primitives)
const arayu = [1,2,3,4]
console.log(arayu.indexOf(4));
console.log(arayu.lastIndexOf(2));

// refrence type
const courses = [
    {id: 1, name: 'ji'}, 
    {id: 2, name: 'ede'} 
]
const yam = ['sdsds', 'dadqdqd', 222, 94]
const bed = courses.findIndex(function(course) {
    return course.name === 'ede';
});
console.log(bed)
const combinedArray = [...yam, ...courses] // spread
console.log(combinedArray)

// iterating array
yam.forEach((food, index) => console.log(yam, index))
const jyam = yam.join();
console.log(jyam)

function filter() {
    
}
const myam = yam.map(function(n) {
    return (n + '  ~~~~~~~~~~em H')
})
console.log(myam)
const umam = courses.map((course) => 'i succeded  ' +courses
);
console.log(umam)


const keys =[ 7,3,2,5,3,2 ]
const keysMap = keys.map(key => (
     {id: 1,  name:'hello'} + key)
     )
    console.log(keysMap);
;


