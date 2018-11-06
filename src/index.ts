import Person from './models/person';

const three = 'test';
console.log('hey')
console.log('hey2')

function haveABirthday(personObj:Person ) {
    return personObj.age += 1; 
}

const tom:Person = {name:'Tom', age:31}

haveABirthday(tom)

console.log(tom)