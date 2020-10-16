const companies = [
  { name: 'Company One', category: 'Finance', start: 1981, end: 2003 },
  { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
  { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
  { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
  { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
  { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
  { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
  { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
  { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// forEach
//regular for loop
for (let i = 0; i < companies.length; i++) {
  console.log(companies[i]);
}

//forEach
// a better way to loop through an array. Does not return anything.
//takes in a synchronous callback function to run for each iteration
//can take in: an iterator, index, entire array
companies.forEach(function (company) {
  console.log(company.name);
});

// filter
// for loop version
let canDrink = [];
for (let i = 0; i < ages.length; i++) {
  if (ages[i] >= 21) {
    canDrink.push(ages[i]);
  }
}
console.log(canDrink);

//filter takes in a function just like foreach
//just return true, no need to push to an array
const canDrink2 = ages.filter(function (age) {
  if (age >= 21) {
    return true;
  }
});
console.log(canDrink2);

//can also be one line with es6 syntax
const canDrink3 = ages.filter((age) => age >= 21);
const retailCompanies = companies.filter(
  (company) => company.category === 'Retail'
);
const eightiesCompanies = companies.filter(
  (company) => company.start >= 1980 && company.start <= 1989
);
const lastedTenYears = companies.filter(
  (company) => company.end - company.start >= 10
);
console.log(canDrink3);
console.log(retailCompanies);
console.log(eightiesCompanies);
console.log(lastedTenYears);

// MAP
//Allows you to create a new array out of anything from a current array
//The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
//make a new array, fill it with 1's for however many companies there are
const testMap = companies.map((company) => 1);
//make a new array with the name and start and end year of the company
const testMap2 = companies.map(
  (company) => `${company.name} [${company.start} - ${company.end}]`
);
//// Create array of company names
const companyNames = companies.map((company) => company.name);
//// Square each number in the ages array
const agesSquare = ages.map((age) => Math.sqrt(age));
const agesSquare2 = ages.map((age) => age * 2);
//first squares the number then multiply by 2
const agesSquare3 = ages.map((age) => Math.sqrt(age)).map((age) => age * 2);
console.log(testMap);
console.log(companyNames);
console.log(agesSquare);
console.log(agesSquare2);
console.log(agesSquare3);

///SORT
//The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
//
//Sorts arrays
//Sort the array by the company started date
const sortedCompanies = companies.sort((c1, c2) =>
  c1.start > c2.start ? 1 : -1
);

const sortAges = ages.sort((a, b) => a - b);

console.log(sortedCompanies);
console.log(sortAges);

//// Reduce
//The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in single output value.
//Your reducer function's returned value is assigned to the accumulator, whose value is remembered across each iteration throughout the array, and ultimately becomes the final, single resulting value.
const ageSum = ages.reduce((total, age) => total + age, 0);

//get total years for all companies
const totalYears = companies.reduce(
  (total, company) => total + (company.end - company.start),
  0
);
console.log(ageSum);
console.log(totalYears);

//// Combination of methods
const combined = ages
  .map((age) => age * 2)
  .filter((age) => age >= 40)
  .sort((a, b) => a - b)
  .reduce((a, b) => a + b, 0);
console.log(combined);
