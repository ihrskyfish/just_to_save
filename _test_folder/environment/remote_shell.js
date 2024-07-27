let is_root = true;
let command = "touch /storage/emulated/0/脚本/autoTask_gesture_delete_currentApp";
command = "touch /storage/emulated/0/脚本/autoTask_gesture_delete_currentApp";
command = "touch /storage/emulated/0/脚本/autoTask_gesture_delete_currentApp";
let result = shell(command , is_root);


log(result);
// console.show();

if (result.code == 0) {
    toast("执行成功");
} else {
    toast("执行失败！请到控制台查看错误信息");
}


