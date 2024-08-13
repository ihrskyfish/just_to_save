


SSH_IP=
SSH_PORT=

DIRNAME=$(basename "$PWD")
ssh_NETADDRESS=${SSH_IP}:${SSH_PORT}







scp ./      ${ssh_NETADDRESS}/sdcard/脚本/${DIRNAME}
ssh   ${ssh_NETADDRESS}  -p ${PORT} <<EOF
adb shell am start -n org.autojs.autoxjs.v6/org.autojs.autojs.external.shortcut.ShortcutActivity -a android.intent.action.MAIN -e path " /sdcard/脚本/${DIRNAME}/main.js "
EOF