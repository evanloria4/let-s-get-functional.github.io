// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./let-s-get-functional.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */
/*
I: An array of customer object
O: Returns number of male customers
C: Use filter
E:
*/
var maleCount = function(array){
let males = _.filter(array, function(customer){
    return customer.gender === 'male';
});
return males.length;
}
/*
I: Array
O: A number
C: Use reduce
E:
*/
var femaleCount = function(array){ 
    let females = _.reduce(array, function(accumulator, current){
    if (current.gender === 'female'){ // If gender at current === 'female'
        return accumulator += 1; // Reassign accumulator to the sum of itself + 1
    } else {
        return accumulator; // No change to accumaltor for next current
    }
    }, 0)
return females; // Return females
};


/*
I: An array
O: String
C: n/a
E: n/a
*/
var oldestCustomer = function(array){
    var oldest = _.reduce(array, function(accumulator, current){
    if (current.age > accumulator.age){
        return current // Whatever callback function returns is the new accumaltor 
    } else {
        return accumulator;
}
});
return oldest.name
}

/* 
I: Array
O: String
C: n/a
E: n/a
*/
// Set youngest customer equal to a function
// Create a new var youngest inside the function()
// Set variable equal to using the function reduce to return single value of youngest customer 
// Return youngestCustomer name
var youngestCustomer = function(array){
let youngest = _.reduce(array, function(accumulator, current){
    if (current.age < accumulator.age){ // If current object age > accumulator object age
        return current; // Then current object becomes new accumulator
    } else {
        return accumulator // Otherwise, accumulator stays the same
    }
})
return youngest.name; // Return the name property of the final accumulator
}
/*
I: Array
O: Number
C: n/a
E: n/a
*/
// Find average balance of all the customers
// Find the sum of the balances of all the customers
// Divide the sum by the total number of people
    // Number of customers = length of array
var averageBalance = function(array){
    let balance = _.reduce(array, function(accumulator, current){
        accumulator += current.balance;
        return accumulator;
    }, 0);
    return balance / array.length;
};

/*
I: Array and a letter
O: Number
C: 
E: 
*/
// Find how many customers names begin with a certain letter
// Use filter method to determine how many elements of an array pass a test
var firstLetterCount = function(array, letter){
    let beginWith = _.filter(array, function(customer){
        return customer.name[0].toUpperCase() === letter.toUpperCase();
    })
    return beginWith.length;
}

var friendFirstLetterCount;

var friendsCount;

var topThreeTags;

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
