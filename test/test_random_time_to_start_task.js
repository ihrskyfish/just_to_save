
function executeAfterRandomDelay(callback) {
    // 生成 0 到 8 小时之间的随机时间间隔（以毫秒为单位）
    const minMilliseconds = 0;
    const maxMilliseconds = 8 * 60 * 60 * 1000; // 8 小时
    const randomDelay = Math.floor(Math.random() * (maxMilliseconds - minMilliseconds + 1)) + minMilliseconds;

    // 使用 setTimeout 在随机时间间隔后执行回调函数
    setTimeout(callback, randomDelay);
}

// 示例函数

// 调用 executeAfterRandomDelay 并传入示例函数
// executeAfterRandomDelay(test);
executeAfterRandomDelay(() => {toast("hello world")});
