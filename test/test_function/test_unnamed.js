// autoxjs中没有__dirname 至少远程执行是没有的
// console.log(__dirname);


// 获取当前文件的文件名
// autoxjs中没有__filename 至少远程执行是没有的
// const fileName = __filename;
// console.log("当前文件的文件名是:", fileName);

// 获取函数的字符串形式

log(engines.myEngine())


log(engines.all());



function exampleFunction() {
    console.log("chinese is  not  shown ok");
}

const functionString = exampleFunction.toString();
console.log("chines is not ok", functionString);


