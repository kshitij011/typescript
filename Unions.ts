let score: number | string = 333;

score = 23;
score = "two";
// score = true;

type User2 = {
    name: string;
    id: number;
};

type Admin = {
    username: string;
    id: number;
};

let user: User2 | Admin = { name: "Jhon", id: 123 };

user = { username: "Jhon", id: 321 };
