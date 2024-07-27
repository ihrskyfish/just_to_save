
//---file:example1

// there is no definin global variable  ,only a  global  variable which can be changed
function dfsfjlksjfs() {
    var globalVariable = "I am a global variable";
}

console.log(globalVariable); // I am a global variable

//test3 is ok but  test2 can not
function test3() {
    globalVariable = "I am a global variable";
}
test3();

console.log(globalVariable); // I am a global variable


function example() {
    if (true) {
        var varVariable = "I am a var variable";
        let letVariable = "I am a let variable";
    }
    console.log(varVariable); // "I am a var variable"
    console.log(letVariable); // ReferenceError: letVariable is not defined
}

example();




function example() {
    console.log(varVariable); // undefined
    console.log(letVariable); // ReferenceError: letVariable is not defined

    var varVariable = "I am a var variable";
    let letVariable = "I am a let variable";
}

example();


//---file:example2