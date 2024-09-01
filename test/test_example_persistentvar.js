const fs = require('fs');
const path = require('path');
// ATTENTION: autox不支持 ...args的写法

console.verbose(__dirname, 'dddddddd')
// 装饰器函数
function persistentDecorator(func, variableName) {
    const filePath = path.join(__dirname, `${variableName}.json`);

    return function (...args) {
        let persistentVar;

        // 读取持久变量
        if (fs.existsSync(filePath)) {
            const data = fs.readFileSync(filePath, 'utf8');
            persistentVar = JSON.parse(data);
        } else {
            persistentVar = {};
        }

        // 调用原始函数并传递持久变量
        const result = func(persistentVar, ...args);

        // 将持久变量写回文件
        fs.writeFileSync(filePath, JSON.stringify(persistentVar, null, 2), 'utf8');

        return result;
    };
}

// 示例函数
function exampleFunction(persistentVar, arg1, arg2) {
    if (!persistentVar.counter) {
        persistentVar.counter = 0;
    }
    persistentVar.counter += 1;
    console.log(`Counter: ${persistentVar.counter}, Arg1: ${arg1}, Arg2: ${arg2}`);
}

// 使用装饰器
const decoratedFunction = persistentDecorator(exampleFunction, 'exampleFunctionVar');

// 调用装饰后的函数
decoratedFunction('Hello', 'World');



// ---file other
const fs = require('fs');
const path = require('path');

// 装饰器函数
function persistentDecorator(func, variableName) {
    const filePath = path.join(__dirname, `${variableName}.json`);

    return function () {
        let persistentVar;

        // 读取持久变量
        if (fs.existsSync(filePath)) {
            const data = fs.readFileSync(filePath, 'utf8');
            persistentVar = JSON.parse(data);
        } else {
            persistentVar = {};
        }

        // 将arguments对象转换为数组，并在开头添加persistentVar
        const args = Array.prototype.slice.call(arguments);
        args.unshift(persistentVar);

        // 调用原始函数并传递持久变量
        const result = func.apply(this, args);

        // 将持久变量写回文件
        fs.writeFileSync(filePath, JSON.stringify(persistentVar, null, 2), 'utf8');

        return result;
    };
}

// 示例函数
function exampleFunction(persistentVar, arg1, arg2) {
    if (!persistentVar.counter) {
        persistentVar.counter = 0;
    }
    persistentVar.counter += 1;
    console.log(`Counter: ${persistentVar.counter}, Arg1: ${arg1}, Arg2: ${arg2}`);
}

// 使用装饰器
const decoratedFunction = persistentDecorator(exampleFunction, 'exampleFunctionVar');

// 调用装饰后的函数
decoratedFunction('Hello', 'World');