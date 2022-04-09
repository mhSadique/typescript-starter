var a = "1";
// console.log("hello", a.foo()); // this code cannot be transpiled
// we can configure typescript in tsconfig.json
// we can instruct TS to do certain things in certain way in the terminal
// but the convenient way to do that is to write a tsconfig.json file
// and write all the instructions in it
// TS will automatically execute those instructions
// so, tsconfig.json file helps us to configure TS
var hello = "world";
// hello = 'greeting'; // const can not be redifined will not be compiled
var hello2 = "world"; // it is recommended to define the type explicitly
// hello2 = false; // boolean is not assignable to type string
// TS transpiles everything in ES3 by default
// #########################################
// Functions
var getFullName = function (name, surname) {
    //   return true; // can not return true coz it is supposed to return a string
    return name + " " + surname;
};
console.log(getFullName("Sadiq", "Habibullah"));
var user1 = {
    name: "Sad",
    age: 23,
    getMessage: function () {
        return this.name;
    }
};
console.log(user1.getMessage());
// #########################################
// Union and type aliases
// we use Union operator to combine data types
var username = "sadique";
var pageName = "1";
// most popular usage for Union is checking for 'null'
// when we work with some data, but we don't have it at the beginning,
// we set them to null
// later when we fetch data and get them finally,
// we want to change the data to the data type that we want to work with
// for example, we have an errorMessage which is by default null
// later when we get any error, we set it to type string
var errorMessage = null; // if we don't set it to 'null', it will be 'undefined' by default
// user3 is 'null' at first, later when data is fetched, it will be of type NewUserInterface
var user3 = null; // we are using 'interface' inside 'union'
// instead of writing this
var popularTags = ["react", "next"];
// we should write this
var popularTags2 = ["react", "next"];
// so we have created a custom type using union
var dragonTags = "cute dragon"; // 'string' or 'null', but not [] or anything else
// ###############################
// void
// it is recommended to define 'void' in a funciton explicitly,
// when we do not want to return anything form a function
// to avoid future jhamela
// when a function does not return anything,
// it returns 'void' which refers to 'null' or 'undefined'
// 'void' is a set of 'null' and 'undefined'
var doSomething = function () {
    console.log("Do something");
};
// but writing the code below does not make any sense
var foo = undefined;
var foo2 = null;
// because we can not assign any other value to them
// so what's the point of defining such a type on a variable?
// ###########################################
// any
// 'any' type turns off TypeScript checks
// 'any' is the worst type in TS
// you never want to use it
// 'any' is not a solution, but start of a big problem
var foo3 = "bar"; // you can assign any value to it later
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
var doSomethingMore2 = function () {
    throw "never";
};
// ###########################################
// unknown
// 'unknown' is an enormous alternative to 'any'
var vAny = 10;
var vUnknown = 10;
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
var s3 = vAny; // TS does not complain here, because we can assign 'any' everywhere
var s4 = vUnknown; // this time we don't get an error, because we convert 'unknown' to 'string' and then we assign the string to our new string 's4'
// 'as' operator makes type assertion
// 'as' operator not only works with 'unknown', but also it works with any other types, but there is a problem
var pageNumber = "1";
// let numericPageNumber: number = pageNumber as number;
// the line above gives this error:
// Conversion of type 'string' to type 'number' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.
// the reason behind is; TS thinks that we are converting a 'string' to a 'number' and this might be a mistake
// so, it tells us to convert the 'string' to 'unknown' first and then to 'number'
// so, the line below does not give an error
var numericPageNumber = pageNumber;
