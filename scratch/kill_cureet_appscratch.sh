adb shell dumpsys activity activities | grep mFocusedA | awk '{print $3}' | cut -d '/' -f 1  | xargs -I {} adb shell am force-stop {}

vim - -E -s -c ' ' -c '%p' -c 'q!' | tail -n +2 