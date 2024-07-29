let is_show_console_on_devices = false;
let is_root = true;
let command = "touch /storage/emulated/0/脚本/autoTask_gesture_delete_currentApp";

command = "reboot";
command = "touch /storage/emulated/0/脚本/autoTask_gesture_delete_currentApp";
command = "touch /storage/emulated/0/脚本/autoTask_gesture_delete_currentApp";
command = `
setprop service.adb.tcp.port 5555  # need root privilege
stop adbd
start adbd
`;

command = "whoami"
//关闭当前app的shell命令 root权限
        //  this command is ok on high version android

        //  this command is ok on lower version android ,such as lzdianPlay
command_getCurrentApp_leidianPlay_lowerVersionAndroid="dumpsys window windows| grep -E 'mCurrentFocus' | awk '{print $3}'| cut -d '/' -f 1"
command = `
#!/bin/bash
# 获取当前前台应用的包名
CURRENT_APP_PACKAGE=$(dumpsys window windows | grep -E 'mCurrentFocus' | awk '{print $3}' | cut -d '/' -f 1)

# 检查是否成功获取包名
if [ -z "$CURRENT_APP_PACKAGE" ]; then
  echo "无法获取当前应用的包名"
  exit 1
fi

echo "当前应用包名: $CURRENT_APP_PACKAGE"

# 使用root权限关闭当前应用
su -c "am force-stop $CURRENT_APP_PACKAGE"

echo "已关闭应用: $CURRENT_APP_PACKAGE"
        
        
        `;
let result = shell(command, is_root);
log(result);
if (is_show_console_on_devices) {
    console.show();
}
if (result.code == 0) {
    toast("执行成功");
} else {
    toast("执行失败！请到控制台查看错误信息");
}


