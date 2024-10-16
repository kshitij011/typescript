"use strict";
const User = {
    name: "Comp",
    age: 30,
    isPaid: true,
};
// when a function returns an object
function createUser() {
    console.log(`User created ${User.name}`);
    return User;
}
createUser();
// { name: "Monjo", age: 20, isPaid: false }
// when a function returns an object with wpecific parameters
const createCourse = () => {
    // console.log(`User created ${User.name}`);
    return { name: "TypeScript", price: 399 };
};
createCourse();
// this forces the caller to pass the required parameters defined the type User:
// we can also use the type User to specify the type of function return.
function createUser2(user) {
    // return `User obj ${user} created and stored at (...)`;   If the return type is string
    return user;
}
createUser2({ name: "Comp", email: "comp@gmail.com", isActive: true });
// function createEmployee(u:  Employee){}
// employee._id = "456";  // cannot be modified
// employee.hobby = "playing";  // can be modified
let employee = {
    _id: "123",
    name: "John",
    emial: "john@gmail.com",
    isActive: true,
    hobby: "reading",
};
let employee2 = {
    _id: "123",
    name: "Jack",
    emial: "jack@gmail.com",
    isActive: false,
};
// employee._id = "456";  // cannot be modified
// employee.hobby = "playing";  // can be modified
