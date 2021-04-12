// function stopWatch (){
//     let count = 0;
//     return function(){
//         count++;
//         return count;
//     }
// }
// const clock1 = stopWatch();
// const clock2 = stopWatch();
// console.log (clock1());
// console.log (clock1());
// console.log (clock1());
// // console.log (clock1); 
// // stopWatch();
// console.log (clock2());
// console.log (clock2());
// console.log (clock1());


const students = [
    {id: 21, name:"sun"},
    {id: 31, name: "moon"},
    {id: 41, name: "soil"},
    {id: 71, name: "water"}
];
const output = [];

for (let i=0; i<students.length; i++){
    const name = students[i].name;
    output.push(name);
}
console.log (...output);