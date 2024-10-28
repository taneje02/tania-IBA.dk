//server.js

//main function that logs "hello world"
//function main(){
//console.log("hello world")
//}

//call the main function to execute it
//main();

//server.js


const endpoint = require('./another');

function main() {
    console.log('hello,world');
    console.log(endpoint());

}
main();