const a = "1";
// console.log("hello", a.foo()); // this code cannot be transpiled

// we can configure typescript in tsconfig.json
// we can instruct TS to do certain things in certain way in the terminal
// but the convenient way to do that is to write a tsconfig.json file
// and write all the instructions in it
// TS will automatically execute those instructions
// so, tsconfig.json file helps us to configure TS

const hello = "world";
// hello = 'greeting'; // const can not be redifined will not be compiled

let hello2: string = "world"; // it is recommended to define the type explicitly
// hello2 = false; // boolean is not assignable to type string

// TS transpiles everything in ES3 by default

// #########################################

// Functions
const getFullName = (name: string, surname: string): string => {
  //   return true; // can not return true coz it is supposed to return a string
  return name + " " + surname;
};

console.log(getFullName("Sadiq", "Habibullah"));

// #########################################

// Interfaces
// we use interface to define the shape of an object
// we can also define function inside interface

interface UserInterface {
  name: string;
  age?: number;
  getMessage(): string;
}

const user1: UserInterface = {
  name: "Sad",
  age: 23,
  getMessage() {
    return this.name;
  },
};

console.log(user1.getMessage());

// #########################################

// Union and type aliases
// we use Union operator to combine data types
let username: string = "sadique";
let pageName: string | number = "1";

// most popular usage for Union is checking for 'null'
// when we work with some data, but we don't have it at the beginning,
// we set them to null
// later when we fetch data and get them finally,
// we want to change the data to the data type that we want to work with

// for example, we have an errorMessage which is by default null
// later when we get any error, we set it to type string

let errorMessage: string | null = null; // if we don't set it to 'null', it will be 'undefined' by default
// it is always recommended to use default value

// also, inside union, we can user custom 'interface's
interface NewUserInterface {
  name: string;
  surname: string;
}

// user3 is 'null' at first, later when data is fetched, it will be of type NewUserInterface
let user3: NewUserInterface | null = null; // we are using 'interface' inside 'union'

// type alias
// this means we can create our own type(s) in TypeScript

type ID = string;
// type 'ID' works the same as type 'string',
// but it is important in architechtural perspective
// to make code more understandable and simpler

interface NewestUserInterface {
  name: string;
  surname: string;
  id: ID; // important in architechtural perspective,
  // 'ID' is human name, but 'string' is not
}

type PopularTag = string;

// instead of writing this
let popularTags: string[] = ["react", "next"];

// we should write this
let popularTags2: PopularTag[] = ["react", "next"];
// because it brings clarity and understanding about what it is about
// type 'PopularTag' is more understandable than type 'string'

// ################################
// combining union and type aliases
type MaybePopularTag = PopularTag | null;
// so we have created a custom type using union

const dragonTags: MaybePopularTag = "cute dragon"; // 'string' or 'null', but not [] or anything else
