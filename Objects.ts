const User = {
    name: "Comp",
    age: 30,
    isPaid: true,
};

// when a function returns an object
function createUser(): {} {
    console.log(`User created ${User.name}`);
    return User;
}

createUser();
// { name: "Monjo", age: 20, isPaid: false }

// when a function returns an object with wpecific parameters
const createCourse = (): { name: string; price: number } => {
    // console.log(`User created ${User.name}`);
    return { name: "TypeScript", price: 399 };
};

createCourse();

type User = {
    name: string;
    email: string;
    isActive: boolean;
};

// this forces the caller to pass the required parameters defined the type User:
// we can also use the type User to specify the type of function return.
function createUser2(user: User): User {
    // return `User obj ${user} created and stored at (...)`;   If the return type is string
    return user;
}

createUser2({ name: "Comp", email: "comp@gmail.com", isActive: true });
