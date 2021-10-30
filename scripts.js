/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
/* eslint-disable no-bitwise */
// const matchHouses = (num) => (num !== 0 ? 6 * num - (num - 1) : 0);

// const minMax = (arr) => [Math.min(...arr), Math.max(...arr)];

// function timeForMilkAndCookies(date) {
//     return date.getMonth() === 11 && date.getDate() === 24;
// }

// function whichIsLarger(f, g) {

// }

// const whichIsLarger = (f, g) => {
//     return f() > g() ? 'f': g()>f()? 'g': 'neither';

// }
// const binary = (num) => num.toString(2);
// const canNest = (arr1, arr2) => {
//     const minCheck = Math.min(...arr1) > Math.min(...arr2);
//     const maxCheck = Math.max(...arr1) < Math.max(...arr2);
//     return minCheck && maxCheck;
// };
// console.log(canNest([1, 2, 3, 4], [0, 6]));

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     compareAge(other) {
//         // Write code here!
//         // return `${other.name} is ${
//         //     other.age < this.age
//         //         ? 'younger than'
//         //         : other.age === this.age
//         //         ? 'the same age as'
//         //         : 'older than'
//         // } me.`;
//         if (this.age === other.age) {
//             return `${other.name} is the same age as me.`
//         } else if (this.age > other.age) {
//             return `${other.name} is younger than me.`
//         } else {
//             return `${other.name} is older than me.`
//     }
// }

// p1 = Person('Samuel', 24);
// p2 = Person('Joel', 36);
// p3 = Person('Lily', 24);

// p1.compareAge(p2) ➞ "Joel is older than me."

// p2.compareAge(p1) ➞ "Samuel is younger than me."

// p1.compareAge(p3) ➞ "Lily is the same age as me."

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     compareAge(other) {
//         if (this.age === other.age) {
//             return `${other.name} is the same age as me.`;
//         }
//         if (this.age > other.age) {
//             return `${other.name} is younger than me.`;
//         }
//         return `${other.name} is older than me.`;
//     }
// }
// function isFirstSuperior(arr1, arr2) {
//     return arr1 > arr2;
// }
// console.log(isFirstSuperior([1, 2, 3, 4], [1, 2, 3, 5]));
