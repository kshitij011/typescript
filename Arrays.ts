let superHeros: (string | number)[] = [];

superHeros.push("SpiderMan");
superHeros.push(3);

type ArrayUser = {
    name: string;
    isActive: boolean;
};

let users: ArrayUser[] = [];

users.push({
    name: "John",
    isActive: true,
});

users.push();
