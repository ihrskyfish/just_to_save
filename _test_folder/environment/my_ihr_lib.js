


// NOTE  this version can not directly set a value  in a non-exist key in a object

var ihrglobal = {};
var all_gesture = {};
// 导入自定义模块
// const myModule = require('./myModule');
ihrglobal.x_width = device.width;
ihrglobal.y_high = device.height;
ihrglobal.x_dpi = 225;
ihrglobal.y_dpi = 222;
ihrglobal.screen_size = 10.1;
ihrglobal.miykstring = {};
ihrglobal.myPhone = {};
ihrglobal.myPhone.xiaomi = "c804e69518e0c93d"
ihrglobal.myPhone.vivoS10 = "c804e69518e0c93d"
ihrglobal.myPhone.sp1228= "c804e69518e0c93d"
ihrglobal.myPhone.leidian= "c804e69518e0c93d"

const xiaomi = ihrglobal.myPhone.xiaomi;
const vivoS10 = ihrglobal.myPhone.vivoS10;
ihrglobal.miykstring.sleep_time_default_this_devices = 1000 * 2;
ihrglobal.miykstring.__emunKillWay = "gesture";
ihrglobal.miykstring.__emunKillWay = "manyBacks";
ihrglobal.miykstring.currentDevices__emunMyPhoneList = device.getAndroidId();
ihrglobal.miykstring.__emunLanchWay = "launchApi";
ihrglobal.dev_stage = "test";

// the builtin api has a bug because the android ues ppi to rander
// setScreenMetrics(ihrglobal.x_width, ihrglobal.y_high);

// ths gesture function can be used in xiaomi phone in 快手刷视频
function gesture__universal_swipe_up_in_xCenter() {
    swipe(ihrglobal.x_width / 2, ihrglobal.y_high * 3 / 4, ihrglobal.x_width / 2, ihrglobal.y_high / 4, 100);
}



// ---file: gesture.js @@interface@@ this fs file should define the function named 
function gesture__click_treasure_position() {
    let __classMyPhoneListFunctionMap = {
        "sp1228": function () {
            let x_start = 1040;
            let y_start = 1600;
            click(x_start, y_start);
        },
        "leidian": function () {
            let x_start = 830;
            let y_start = 1800;
            click(x_start, y_start);

        },
        xiaomi: function () {
            let x_start = device.width * 0.877193;
            let y_start = device.height * 0.891167;
            click(x_start, y_start);
        },
        vivoS10: function () {
            let x_start = device.width * 0.877193;
            let y_start = device.height * 0.891167;
            click(x_start, y_start);

        },
        "default": function () {
            let x_start = device.width * 0.877193;
            let y_start = device.height * 0.891167;
            click(x_start, y_start);

        },

    };



    if (__classMyPhoneListFunctionMap[ihrglobal.miykstring.currentDevices__emunMyPhoneList]) {
        __classMyPhoneListFunctionMap[ihrglobal.miykstring.currentDevices__emunMyPhoneList](); // This will execute myFunction1
    } else if (__classMyPhoneListFunctionMap["default"]) {
        __classMyPhoneListFunctionMap["default"](); // This will execute myFunction1
    } else {
        console.log("Function not found");

    }


}

function gesture__click_the_quvrqm_posision() {

    function __by_widget() {
        className("androidx.appcompat.app.ActionBar$c").desc("去赚钱").findOne().click()
    }

    __by_widget();
}

function gesture_kill_current_app_on_the_recents_page() {
    function getsture_kill_current_app_on_the_recents_page_on_leidianPlayer__autojs_function() {
    }

    //after failing , find that  the kill current app  on the recents page need a certain speed.whic is not supported in the leidian player 
    function __on_leidian_player() {
        // getsture_kill_current_app_on_the_recents_page_on_leidianPlayer__autojs_function();
        function __by_touch_file() {
            let password_string = "/storage/emulated/0/脚本/autoTask_gesture_delete_currentApp";
            let result = shell("touch " + password_string, false);
            log(result);
            // console.show();

            if (result.code == 0) {
                toast("执行成功");
            } else {
                toast("执行失败！请到控制台查看错误信息");
            }



        }


        function __by_builtinApi_create_file(file_path) {
            let password_string = "/storage/emulated/0/脚本/autoTask_gesture_delete_currentApp";
            file_path = file_path || password_string;
            ensure_file_content(file_path, "");
        }

        function __by_builtinApi_swipe(x_start, y_start, x_end, y_end, duration) {
            duration = duration || 2000;
            let x_start = 500;
            let y_start = 2000;
            // y_start = 1800;
            let x_end = x_start - 400;
            // y_end = 1800;
            let y_end = y_start;
            swipe(x_start, y_start, x_end, y_end, duration);

        }
        //  __by_touch_file ();
        __by_builtinApi_create_file("/storage/emulated/0/脚本/autoTask_gesture_delete_currentApp");




    }

    function __on_sp1228() {
        x_start = 871;
        y_start = 617;
        // y_start = 1800;
        x_end = x_start;
        // y_end = 1800;
        y_end = y_start - 400;
        swipe(x_start, y_start, x_end, y_end, 200);

    }
    function on_vivoS10() {
        x_start = 871;
        y_start = 617;
        // y_start = 1800;
        x_end = x_start;
        // y_end = 1800;
        y_end = y_start - 400;
        swipe(x_start, y_start, x_end, y_end, 100);


    }


    function xiaoMi_qyip() {
        x_start = 262;
        y_start = 1033;
        x_end = x_start - 250;
        y_end = y_start;
        swipe(x_start, y_start, x_end, y_end, 100);
    }
    xiaoMi_qyip();
    // __on_sp1228();
}



function __projectGesture__next_video() {
    gesture__universal_swipe_up_in_xCenter();
}

function gesture__projectKyub__click_check_in_posision() {

    let functionMap__classMyPhoneList = {
        "sp1228": function () {
            let x_start = 1040;
            let y_start = 1600;
            click(x_start, y_start);
        },
        "leidian": function () {
            let x_start = 830;
            let y_start = 1800;
            click(x_start, y_start);

        },
        xiaomi: function () {
            let x_start = 830;
            let y_start = 1800;
            click(x_start, y_start);

        },
        vivoS10: function () {
            let x_start = 830;
            let y_start = 1800;
            click(x_start, y_start);

        },
    };

    if (functioMap__classMyPhoneList[ihrglobal.miykstring.currentDevices__emunMyPhoneList]) {
        functionMap__classMyPhoneList[ihrglobal.miykstring.currentDevices__emunMyPhoneList](); // This will execute myFunction1
    } else {
        console.log("Function not found");
    }

}

//---file: my_ihr_lib.js

// default  is sleep 2 seconds
// NOTE lower version js engine can not support the default parament syntax
function sleep_certian_time(time_long) {
    let true_time_long = time_long || ihrglobal.miykstring.sleep_time_default_this_devices;
    sleep(true_time_long);
}


//BZ
function stay_home_page_with_unlock() {
    for (let index = 0; index < 2; index++) {
        home();
        sleep_certian_time();
    }
}

function logCurrentDetails() {
    const error = new Error();
    const stackLines = error.stack.split('\n');
    const callerLine = stackLines[2]; // 通常第三行是调用者行

    const functionNameMatch = callerLine.match(/at (\S+)/);
    const functionName = functionNameMatch ? functionNameMatch[1] : 'anonymous';

    const fileNameMatch = callerLine.match(/\((.*):(\d+):(\d+)\)/);
    const fileName = fileNameMatch ? fileNameMatch[1] : 'unknown';
    const lineNumber = fileNameMatch ? fileNameMatch[2] : 'unknown';
    const columnNumber = fileNameMatch ? fileNameMatch[3] : 'unknown';

    const output = `File: ${fileName}, Function: ${functionName}, Line: ${lineNumber}, Column: ${columnNumber}`;

    console.log(output);
    return output;
}


function launch_app_start_on_the_home(packageName, __enumLaunchWay) {
    if (__enumLaunchWay == "gesture") {
    } else if (__enumLaunchWay == "builtinApi") {
    }

    function __by_builtinApi(packageName) {
        launch(packageName);
    }
    function __by_gesture(packageName) {
    }

    stay_home_page_with_unlock();
    sleep_certian_time();
    launch(packageName);
}


function page_recent_app(params) {
    recents();
}



function back_many_times() {

    for (let index = 0; index < 3; index++) {
        back();
        sleep_certian_time();
    }
}




function toast_shell(command, is_root, is_show_console_on_devices) {
    let is_root = is_root || false;
    let is_show_console_on_devices = is_show_console_on_devices || false;
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

    return result;
}

function launch_new_quarck_browser() {
}

function kill_current_app(__emunKillWay) {

    function kill_current_app_by_shell(params) {

        let command = `
        #!/bin/bash
# 获取当前应用的包名
CURRENT_APP_PACKAGE=$(adb shell dumpsys window windows | grep -E 'mCurrentFocus' | awk '{print $4}' | cut -d '/' -f 1)
# 检查是否成功获取包名
if [ -z "$CURRENT_APP_PACKAGE" ]; then
  echo "无法获取当前应用的包名"
  exit 1
fi
echo "当前应用包名: $CURRENT_APP_PACKAGE"
# 关闭当前应用
adb shell am force-stop "$CURRENT_APP_PACKAGE"
echo "已关闭应用: $CURRENT_APP_PACKAGE"
        `;
        toast_shell(command);
    }

    function kill_current_app_by_backButton_many_times(params) {
    }
    function kill_current_app_by_gesture(params) {
    }
    __emunKillWay = __emunKillWay || ihrglobal.miykstring.__emunKillWay;

    infomation_dev_by_toast_on_autojs("kill_current_app");
    if (__emunKillWay == "gesture") {
        kill_current_app_by_gesture();
    } else if (__emunKillWay == "manyBacks") {
        back_many_times();
    }
    else if (__emunKillWay == "adb") {
        kill_current_app_by_shell();
    } else if (__emunKillWay == "builtinApi") {
    }


}



// the function shoulder  be required from local compouter

function test_how_long_the_autojs_app_can_stay() {
    let time_long = 0;
    let file_path = "/sdcard/used_by_autojs/used_by_TestHowLongTheAutojsAppCanStay.txt";

    while (true) {
        let format_string = "the program ^^ run" + time_long + "minute";
        toast(format_string);
        ensure_file_content(file_path, time_long);

    }
}


function ensure_file_content(file_path, text, encoding) {

    encoding = encoding || "utf8";
    files.ensureDir(file_path);
    return files.write(file_path, text, encoding)
}



function infomation_dev_by_toast_on_autojs(info, islog) {
    info = info || "dddddddddddddd";
    toast(info)
}

function launch_new_app(PackageName, __enumLaunchWay, __enumKillWay) {
    __enumLaunchWay = __enumLaunchWay || ihrglobal.miykstring.__emunLanchWay;
    __enumKillWay = __enumKillWay || ihrglobal.miykstring.__emunKillWay;

    launch_app_start_on_the_home(PackageName);
    sleep_certian_time();
    infomation_dev_by_toast_on_autojs("back button");
    back()
    sleep_certian_time();
    kill_current_app(__enumKillWay);
    sleep_certian_time();
    launch_app_start_on_the_home(PackageName);
    // if (__enumLaunchWay == "new") {
    //     launch_app_start_on_the_home(PackageName);
    //     sleep_certian_time();
    //     infomation_dev_by_toast_on_autojs("back button");
    //     back()
    //     sleep_certian_time();
    //     kill_current_app(__enumKillWay);
    //     sleep_certian_time();
    //     launch_app_start_on_the_home(PackageName);
    // }
}


function main(params) {
    auto();
    let some_prompt_text = "hello world";
    toast(some_prompt_text);
    launch_new_app("io.github.huskydg.magisk")
    //  gesture_kill_current_app_on_the_recents_page_on_leidian_player();
    let file_path = "/sdcard/used_by_autojs/used_by_TestHowLongTheAutojsAppCanStay.txt";

}


function get_environment_info() {
    function get_screen_info() {

    }

}


function launch_new_app__kyub() {

}
// need accessibility service ,
function project_kyub() {


    function enter_kyub_main_page() {
        launch_new_app("com.kuaishou.nebula");
    }

    function enter_kyub_vrqm_page() {
        enter_kyub_main_page();
        sleep_certian_time(1000 * 10);
        gesture__click_the_quvrqm_posision();
        infomation_dev_by_toast_on_autojs("enter a vrqm page");

        //this gesture function has a template
    }
    function main() {
        // check_in();
        for (let index = 0; index < 20; index++) {
            sleep_certian_time();
            Collect_the_treasure_chest();
            sleep_certian_time();
            loop_video_10_minute();
        }
    }
    function Collect_the_treasure_chest() {
        enter_kyub_vrqm_page();
        infomation_dev_by_toast_on_autojs("sleep begin");
        sleep_certian_time(1000 * 20);
        infomation_dev_by_toast_on_autojs("click the treasure chest  position begin");
        gesture__click_treasure_position();
        infomation_dev_by_toast_on_autojs("click the treasure chest  position  end");

    }
    function check_in() {
        enter_kyub_vrqm_page();
        sleep_certian_time(1000 * 10);
        gesture__projectKyub__click_check_in_posision();

    }

    function loop_video_10_minute(minute) {
        minute = minute || 6;
        enter_kyub_main_page();
        sleep_certian_time(1000 * 6);
        minutes = 6;
        let currentTime = Date.now();
        while (Date.now() - currentTime < 1000 * 60 * minute) {
            gesture__universal_swipe_up_in_xCenter();
            sleep_certian_time(1000 * 6);

        }
    }
    main();
}
function todo() {

    function __by_processExit() {
        console.log("todo");
        process.exit(1); // This will stop the program immediately
    }

    function __by_throw() {
        console.log("todo");
        throw new Error("todo");
    }

    __by_processExit();


}


function __projectQuarck() {
    function enter_quarck_main_page() {
        launch_new_app("com.quark.browser");
    }

}



//---file:test
function test() {

    // auto();
    let some_text = "hello world";
    toast(some_text);
    project_kyub();

}

// gesture__universal_swipe_up_in_xCenter();
// kill_current_app();
test();
// kill_current_app();
// gesture_kill_current_app_on_the_recents_page();


//  gesture__click_treasure_position();

