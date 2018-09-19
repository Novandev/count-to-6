// map just the first letters of every word to this list
list = process.argv.slice(2, process.argv.length)
// list = ['Strategic','Hazard','Intervention','Enforcement','Logistics','Division']
list =list.map(x => x[0]);
console.log(list);
//  reduce this list into a string containing the first position of each string in the array above
list = list.reduce((x,y) => x+y);
console.log(`[${process.argv.slice(2, process.argv.length)}] becomes \"${list}\"`)
