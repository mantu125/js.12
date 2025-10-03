// *****************Singleton********************

// const tinderUser = Object()
// console.log(tinderUser); // {}
const tinderUser = {}
// console.log(tinderUser);

tinderUser.id = "123abc"
tinderUser.name = "sam"
tinderUser.isloggedIn = false
// console.log(tinderUser); // { id: '123abc', name: 'sam', isloggedIn: false }

const regularUser = {
    email: "hello@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Mantu",
            lastname: "Sah"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname); // Mantu
// console.log(regularUser.fullname.userfullname.lastname); // Sah
// console.log(regularUser.fullname.userfullname); // { firstname: 'Mantu', lastname: 'Sah' }

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "e", 6: "f"}

// const obj3 = {obj1, obj2}
// console.log(obj3); // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
// const obj3 = Object.assign(obj1, obj2)
// console.log(obj3); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
// const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

const users = [
    {
        id: 1,
        email: "m@gmail.com"
    },
    {
        id: 1,
        email: "m@gmail.com"
    },
    {
        id: 1,
        email: "m@gmail.com"
    },
]
users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'isloggedIn' ]
// console.log(Object.values(tinderUser)); // [ '123abc', 'sam', false ]
// console.log(Object.entries(tinderUser)); // [ [ 'id', '123abc' ], [ 'name', 'sam' ], [ 'isloggedIn', false ] ]
// console.log(tinderUser.hasOwnProperty('isloggedIn')); // True
// console.log(tinderUser.hasOwnProperty('islogged')); // False

