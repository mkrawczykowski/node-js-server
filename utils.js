const greeting = () => {
    console.log('hello Node!');
}

const add = (a, b) => {
    console.log(a + b);
}

console.log('utils is loaded');

// module.exports = greeting; // name of function same as at the top of this file

module.exports = {
    greeting,
    add
}