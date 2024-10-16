interface InterfaceUser {
    readonly id: number;
    name: string;
    age: number;
    sayHello(): string;
    // sayHello: () => string; // this is also allowed
}

const user: InterfaceUser = {
    id: 1,
    name: "John Doe",
    age: 30,
    // sayHello(): string { return "John says hello"}
    sayHello: () => {
        return "s";
    }, // for other syntax in interface
};
