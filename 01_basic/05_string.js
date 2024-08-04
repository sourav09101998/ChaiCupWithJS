const name = 'sourav'
const repoCount = 34

// console.log(name + repoCount + "value");


console.log(`Hello my name is ${name} and myrepo count is ${repoCount}`);

const gameName = new String('sourav-au')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('r'));

const newString = gameName.substring(0,4)
// console.log(newString);

const anotherString = gameName.slice(-6,5)
// console.log(anotherString);


const anotherStringone = "     anand     "
// console.log(anotherStringone);
// console.log(anotherStringone.trim());


const URL = "https://sourav.com/sourav%20Anand"
console.log(URL.replace('%20','-'));
console.log(URL.includes('anand'));

console.log(gameName.split('-'));
