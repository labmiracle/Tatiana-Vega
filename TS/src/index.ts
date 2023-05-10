console.log("hello world");

// ej 2.1
function doStuff(value: any): void {
    if (typeof value === "string") {
        console.log(value.toUpperCase().split("").join(" "));
    } else if (typeof value === "number") {
        console.log(value.toPrecision(5));
    }
    return value;
}

console.log(doStuff(2));
console.log(doStuff(22));
console.log(doStuff("hello"));
console.log(doStuff(true));
console.log(doStuff({}));

// ej 2.2

function padLeft(value: string, padding: number | string): string {
    if (typeof padding === "number") return `${Array(padding + 1).join(" ")}${value}`;
    return padding + value;
}
console.log("[Ejercicio 4.2]", `${padLeft("", "")}${padLeft("", 0)}`);

//ej 2.3
//ref: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#array-types
const numbers: (number | number[])[] = [1, 2, 3, [44, 55], 6, [77, 88], 9, 10];

function flatten(array: (number | number[])[]): number[] {
    const flattened: number[] = [];

    for (const element of array) {
        if (Array.isArray(element)) {
            element; //type number[]
            flattened.push(...element);
        } else {
            element; //type number
            flattened.push(element);
        }
    }

    return flattened;
}

const flattenedNumbers = flatten(numbers);

console.log("[Ejercicio 4.3]", flattenedNumbers);

//BONUS

function flatten1<T>(array: Array<T | T[]>): T[] {
    const flattened: T[] = [];

    for (const element of array) {
        if (Array.isArray(element)) {
            element;
            flattened.push(...element);
        } else {
            element;
            flattened.push(element);
        }
    }

    return flattened;
}

const flattenedElement = flatten1(numbers);

console.log("[Ejercicio 4.3]", flattenedElement);

//ej 2.4
interface EggLayer {
    layEggs(): void;
}

interface Flyer {
    fly(height: number): void;
}

interface Swimmer {
    swim(depth: number): void;
}

type BirdLike = EggLayer & Flyer;
type FishLike = EggLayer & Swimmer;
type Animal = Bird | Fish;

class Bird implements BirdLike {
    constructor(public species: string) {}

    layEggs(): void {
        console.log("Poniendo huevos de aves.");
    }

    fly(height: number): void {
        console.log(`Volando a la altura de ${height} metros.`);
    }
}

class Fish implements FishLike {
    constructor(public species: string) {}

    layEggs(): void {
        console.log("Poniendo huevos de pescado.");
    }

    swim(depth: number): void {
        console.log(`Nadando a una profundidad de ${depth} metros.`);
    }
}

function getRandomAnimal(): Animal {
    const animals: Animal[] = [new Bird("puffin"), new Bird("kittiwake"), new Fish("sea robin"), new Fish("leafy seadragon")];

    return animals[Math.floor(Math.random() * animals.length)];
}

function interrogateAnimal(animal: Animal = getRandomAnimal()): string {
    if (animal instanceof Fish) {
        animal.swim(10);
    } else if (animal instanceof Bird) {
        animal.fly(10);
    }

    return animal.species;
}

console.log("[Ejercicio 4.4]", `Tenemos un ${interrogateAnimal()} en nuestras manos!`);

//ej 3.1
function add(x: number, y: number): number {
    return x + y;
}

function sumArray(numbers: number[]): number {
    return numbers.reduce(add, 0);
}

const someSum = sumArray([3, 6, 9]);

console.log("[Ejercicio 3.1]", `3 + 6 + 9 === ${someSum}`);

//ej 3.2
const bankAccount = {
    money: 0,
    deposit(value: number, message?: string): void {
        this.money += value;
        message && console.log(message);
    }
};

bankAccount.deposit(20);
bankAccount.deposit(10, "Deposit received");

console.log("[Exercise 3.2]", `Account value: $${bankAccount.money}`);

//ej 3.3
function computeScore(word: string): number {
    const letters: string[] = word.toUpperCase().split("");
    return letters.reduce((accum: number, curr: string) => (accum += getPointsFor(curr)), 0);
}

function getPointsFor(letter: string): number {
    const lettersAndPoints: [string, number][] = [
        ["AEOIULNRST", 1],
        ["DG", 2],
        ["BCMP", 3],
        ["FHVWY", 4],
        ["K", 5],
        ["JX", 8],
        ["QZ", 10]
    ];

    return lettersAndPoints.reduce((computedScore: number, pointsTuple: [string, number]) => {
        const [letters, score] = pointsTuple;
        if (letters.split("").find(ll => ll === letter)) {
            return (computedScore += score);
        }
        return computedScore;
    }, 0);
}

console.log("[Ejercicio 3.3]", `zoologico vale ${computeScore("zoo")} puntos.`);

// ej 3.4
function greet(greeting = "hola"): string {
    return greeting.toUpperCase();
}

const defaultGreeting: string = greet();
const portugueseGreeting: string = greet("Oi como vai!");

console.log("[Ejercicio 3.4]", defaultGreeting, portugueseGreeting);

//ej 3.5
function layEggs(quantity = 3, color = "blancos"): void {
    console.log(`[Ejercicio 3.5] Acabas de poner ${quantity} huevos ${color}. Buen trabajo!`);
}

layEggs();

//ej 3.6
let multiply: (val1: number, val2: number) => number;
let capitalize: (val: string) => string;

// eslint-disable-next-line prefer-const
multiply = function (val1: number, val2: number): number {
    return val1 * val2;
};

// eslint-disable-next-line prefer-const
capitalize = function (value: string): string {
    return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
};

console.log("[Ejercicio 3.6]", capitalize(`habil ${multiply(5, 10)}`));

//ej 3.7
function pushToCollection<T>(item: T, collection: T[]): T[] {
    collection.push(item);
    return collection;
}

const numberCollection: number[] = [];
const stringCollection: string[] = [];

// Anadir algunas cosas a las colecciones
// pushToCollection(false, stringCollection);
pushToCollection("hi", stringCollection);
// pushToCollection([], stringCollection);

pushToCollection(1, numberCollection);
pushToCollection(2, numberCollection);
pushToCollection(3, numberCollection);

const incrementedByTwo = numberCollection.map(num => num + 2);

console.log("[Ejercicio 3.8]", `[${incrementedByTwo}] debe ser igual a [3,4,5]`);
