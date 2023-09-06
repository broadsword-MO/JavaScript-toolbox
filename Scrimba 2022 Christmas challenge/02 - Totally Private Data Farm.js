// import userData from "./data.js";

const userData = [
    {
        name: {
            title: 'Mr',
            first: 'Levent',
            last: 'Busser',
        },
        dob: {
            date: '1971-08-21T01:08:00.099Z',
            age: 51,
        },
    },
    {
        name: {
            title: 'Mr',
            first: 'Kornelius',
            last: 'Hamnes',
        },
        dob: {
            date: '1961-09-23T13:13:49.283Z',
            age: 61,
        },
    },
];

/* Totally Private Data Farm 

Good news, renown advertising firm Evil Corp. wants to purchase our 
private user data! 

We'd never do this in real life of course, but just for practice 
let's pretend we're unethical web hackers and transform the data 
in the way Evil Corp. has requested. They're quite particular and
just want an array of users with a fullname and human readable
birthday.   

Write a function that maps through the current data and returns
a new an array of objects with only two properties: 
fullName and birthday. Each result in your 
array should look like this when you're done: 

{
    fullName: "Levent Busser", 
    birthday: "Fri Aug 20 1971"
}

Read about toDateString() for info on formatting a readable date. 
*/

// Parentheses are needed around curly braces to return an object.
function transformData(data) {
    return data.map((user) => ({
        fullName: `${user.name.first} ${user.name.last}`,
        birthday: new Date(user.dob.date).toDateString(),
    }));
}

console.log(transformData(userData)); /*
    [
        { fullName: 'Levent Busser', birthday: 'Fri Aug 20 1971' },
        { fullName: 'Kornelius Hamnes', birthday: 'Sat Sep 23 1961' }
    ]
*/

// const date2 = () => new Date().toDateString();
// console.log('⚡Date() >>', Date()); // Tue Dec 27 2022 15:29:09 GMT-0600 (Central Standard Time)
// console.log('⚡date2() >>', date2()); // Tue Dec 27 2022

