// To execute a function based on a string that represents the function's name in JavaScript, you can use the following approach:

// Step 1: Define your functions
function myFunction1() {
    console.log("Executing myFunction1");
}

function myFunction2() {
    console.log("Executing myFunction2");
}


// Step 2: Use an object to map string names to functions
const functionMap = {
    "myFunction1": myFunction1,
    "myFunction2": myFunction2,
};

// Step 3: Execute a function based on a string
const functionName = "myFunction1"; // This string could come from any source

if (functionMap[functionName]) {
    functionMap[functionName](); // This will execute myFunction1
} else {
    console.log("Function not found");
}



function myFunction(a, b, c) {
    console.log(a, b, c);
}

const myArray = [1, 2, 3];
// 使用扩展运算符解构数组并传入函数
myFunction(...myArray);

//---
const person = { name: 'John', age: 30 };

// 从对象中提取name和age属性
const { name, age } = person;

console.log(name); // 输出: John
console.log(age); // 输出: 30



const numbers = [1, 2, 3, 4, 5];

// 从数组中提取前三个元素
const [first, second, third] = numbers;

console.log(first); // 输出: 1
console.log(second); // 输出: 2
console.log(third); // 输出: 3


function greet({ name, age }) {
    console.log(`Hello, my name is ${name} and I'm ${age} years old.`);
}

const person = { name: 'John', age: 30 };
greet(person); // 输出: Hello, my name is John and I'm 30 years old.