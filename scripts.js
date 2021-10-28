/* eslint-disable prefer-destructuring */
/* eslint-disable func-names */
const person = {
    firstName: 'Rajib',
    lastName: 'Faysal',
    get fullName() {
        return `${person.firstName} ${person.lastName}`;
    },
    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    },
};

person.fullName = 'John Smith';
console.log(person)