


USER=xxx
SSH_IP="192.168.0.102"
SSH_PORT="8022"

BASIC_REMOTE_PATH="/sdcard/脚本/remote"

DIRNAME=$(basename "$PWD")
REMOTE_FOLDER=${DIRNAME}

TARGET_DIR=${BASIC_REMOTE_PATH}/${REMOTE_FOLDER}





ssh -p ${PORT} ${SSH_IP}   <<EOF
rm -rf ${TARGET_DIR}
EOF

scp -p $PORT  -r  ./      ${USER}@${SSH_IP}:${TARGET_DIR}

ssh -p ${PORT} ${SSH_IP}   <<EOF
adb shell am start -n org.autojs.autoxjs.v6/org.autojs.autojs.external.shortcut.ShortcutActivity -a android.intent.action.MAIN -e path " ${TARGET_DIR}/main.js "
EOF


# ---file:
USER=xxx
REMOTE_FOLDER="test"
SSH_IP="192.168.0.102"
SSH_PORT="8022"

BASIC_REMOTE_PATH="/sdcard/脚本/remote"
DIRNAME=$(basename "$PWD")

TARGET_DIR=/sdcard/脚本/remote/${REMOTE_FOLDER}

# 使用rsync进行同步，删除目标目录中多余的文件
rsync -avz --delete -e "ssh -p ${SSH_PORT}" ./ ${USER}@${SSH_IP}:${TARGET_DIR}

ssh -p ${SSH_PORT} ${USER}@${SSH_IP} <<EOF
adb shell am start -n org.autojs.autoxjs.v6/org.autojs.autojs.external.shortcut.ShortcutActivity -a android.intent.action.MAIN -e path " /sdcard/脚本/${DIRNAME}/main.js "
EOF