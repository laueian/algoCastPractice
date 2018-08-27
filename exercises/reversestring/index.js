// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {

    var reversed = '';

    for (const char of str) {
        reversed = char + reversed;
    }

    return reversed;
}

module.exports = reverse;



/*
Using JS string and array library
*/
// var reverse = str => str.split('').reverse().join('');


/*
Using Forin syntax 
*/
// function reverse(str) {

//     var reversed = '';

//     for (const char of str) {
//         reversed = char + reversed;
//     }

//     return reversed;
// }


/*
Using Classic For Loop
*/
// function reverse(str) {

//     var reversed = '';

//     for (let index = str.length - 1; index >= 0; index--) {
//         reversed += str[index];
//     }

//     return reversed;
// }


/*
Using Advanced arrray helper function
*/
// function reverse(str) {

//     return str.split('').reduce((rev, char) => char + rev, '');
// }