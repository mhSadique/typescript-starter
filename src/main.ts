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

// ###############################
// void

// it is recommended to define 'void' in a funciton explicitly,
// when we do not want to return anything form a function
// to avoid future jhamela

// when a function does not return anything,
// it returns 'void' which refers to 'null' or 'undefined'
// 'void' is a set of 'null' and 'undefined'

const doSomething = (): void => {
  console.log("Do something");
};

// but writing the code below does not make any sense
const foo: void = undefined;
const foo2: void = null;
// because we can not assign any other value to them
// so what's the point of defining such a type on a variable?

// ###########################################
// any
// 'any' type turns off TypeScript checks
// 'any' is the worst type in TS
// you never want to use it
// 'any' is not a solution, but start of a big problem
const foo3: any = "bar"; // you can assign any value to it later

// ############################################
// never
// this is not popular and not used much
// A function returning 'never' cannot have a reachable end point.
// funciton with 'never' cannot be executed to the end

// the function below shows an error
// const doSomethingMore = (): never => {
//     console.log('Hello');
// };

// but the one below shows no error
// because it will not happen by
const doSomethingMore2 = (): never => {
  throw "never";
};

// ###########################################
// unknown
// 'unknown' is an enormous alternative to 'any'

let vAny: any = 10;
let vUnknown: unknown = 10;
// till now, they look the same

// but below, they will not behave the same
// let s1: string = vAny; // TS does not complain here, because we can assign 'any' everywhere
// let s2: string = vUnknown // error: Type 'unknown' is not assignable to type 'string'.
// we cannot assign 'unknown' directly in other type

// vAny.foo(); // TS does not care because 'vAny' is 'any'
// vUnknown.foo(); // error: Property 'foo' does not exist on type 'unknown'.
// so, first of all, we need somehow convert our data type from 'unknown' to another type
// here comes type assertion
// Type Assertion means we want to convert one type to another
// so in some cases, we need to tell TS what type it is

let s3: string = vAny; // TS does not complain here, because we can assign 'any' everywhere
let s4: string = vUnknown as string; // this time we don't get an error, because we convert 'unknown' to 'string' and then we assign the string to our new string 's4'
// 'as' operator makes type assertion
// 'as' operator not only works with 'unknown', but also it works with any other types, but there is a problem

let pageNumber: string = "1";
// let numericPageNumber: number = pageNumber as number;
// the line above gives this error:
// Conversion of type 'string' to type 'number' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.
// the reason behind is; TS thinks that we are converting a 'string' to a 'number' and this might be a mistake
// so, it tells us to convert the 'string' to 'unknown' first and then to 'number'
// so, the line below does not give an error
let numericPageNumber: number = pageNumber as unknown as number;
