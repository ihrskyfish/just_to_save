
# 1. 发送返回键
adb shell input keyevent KEYCODE_BACK

# 2. 打开最近任务界面
adb shell input keyevent KEYCODE_APP_SWITCH

# 3. 息屏
adb shell input keyevent KEYCODE_POWER

# 4. 锁屏
adb shell input keyevent KEYCODE_SLEEP

# 5. 点击屏幕宽*0.8, 屏幕高*0.8点坐标点
# 假设屏幕分辨率为1080x1920
adb shell input tap $(expr 1080 \* 8 / 10) $(expr 1920 \* 8 / 10)

# 获取设备的宽度和高度
adb shell wm size

# 获取设备的DPI
adb shell wm density


#---file: adb_volume.sh
# 获取当前媒体音量
current_volume=$(adb shell settings get system volume_music_speaker)

# 设置音量为0（静音）
adb shell media volume --stream 3 --set 0

# 等待1秒
sleep 1

# 恢复之前的音量
adb shell media volume --stream 3 --set $current_volume

#---file: 