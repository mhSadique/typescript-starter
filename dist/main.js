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
