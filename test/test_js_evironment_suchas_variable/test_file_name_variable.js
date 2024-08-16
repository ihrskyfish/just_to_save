


// 就算是本地执行也没有这个变量
// toast(__filename); 
// console.log( tmp =engines.myEngine() )
console.log( engines.myEngine()['source'])
// 这里发现了 非常多的nodejs中的变量在autoxjs中无法使用,或许是时候考虑换一下语音了,不如用python照做adb 控制 手机
Object.keys(console)
// console.log(Object )
// console.log(Object.keys.toString() )