// other way of creating arrays:
// const PlayerScore: number[] = [];
const PlayerScore: Array<number> = [];

function identityOne(val: boolean | number): boolean | number {
    return val;
}

// Instead do  this:

function identityTwo<Type>(val: Type): Type {
    return val;
}

function identityFour<T>(val: T): T {
    return val;
}

interface Bottle {
    brand: string;
    type: number;
}

identityFour<Bottle>({ brand: "Bisleri", type: 1 });

// returning one of the value from array using generics

// In react developers usually type a comma (,) after the generic name that represents that it not a jsx syntax but a typescript generic.
function getSearchProducts<T>(products: T[]): T {
    return products[3];
}
