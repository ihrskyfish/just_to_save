let basic_command = `
adb shell dumpsys activity activities | grep mFocusedA | awk '{print $3}' | cut -d '/' -f 1 
`.trim();
console.log(basic_command);