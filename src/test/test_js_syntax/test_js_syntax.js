


// template string can will escape  "\"
command = `
am startservice --user 0 -n com.termux/com.termux.app.RunCommandService \
-a com.termux.RUN_COMMAND \
--esa com.termux.RUN_COMMAND_ARGUMENTS '' \






--es com.termux.RUN_COMMAND_WORKDIR '/data/data/com.termux/files/home' \
--ez com.termux.RUN_COMMAND_BACKGROUND 'true' \
--es com.termux.RUN_COMMAND_SESSION_ACTION '0'
 `


console.log(command)