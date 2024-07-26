// default  is sleep 2 seconds
// NOTE lower version js engine can not support the default parament syntax
function sleep_certian_time(time_long) {
    let true_time_long = time_long || 1000 * 2;
    sleep(true_time_long);
}




// NOTE  this version can not directly set a value  in a non-exist key in a object
var ihrglobal = {};
var  all_gesture= {};




ihrglobal.miykstring = {};
ihrglobal.miykstring.sleep_time_default_this_devices = 1000 * 10;
ihrglobal.miykstring.sp1228 = "sp1228"
ihrglobal.miykstring.leidian = "leidian"
ihrglobal.miykstring.currentDevice = "sp1228";

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


function launch_app_start_on_the_home(packageName) {

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

function gesture_kill_current_app_on_the_recents_page() {

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
        swipe(x_start, y_start, x_end, y_end, 100);

    }
    __on_sp1228();
}

function kill_current_app(params) {


    function kill_current_app_by_shell(params) {
    }

    function kill_current_app_by_backButton_many_times(params) {
    }
    function kill_current_app_by_gesture(params) {
    }


    infomation_dev("kill_current_app");
    stay_home_page_with_unlock();
    page_recent_app();
    sleep_certian_time();
    gesture_kill_current_app_on_the_recents_page_on_the_vivoS10();
    // gesture_kill_current_app_on_the_recents_page();
}



// the function shoulder  be required from local compouter
function gesture_kill_current_app_on_the_recents_page_on_the_vivoS10() {
    x_start = 871;
    y_start = 617;
    // y_start = 1800;
    x_end = x_start;
    // y_end = 1800;
    y_end = y_start - 400;
    swipe(x_start, y_start, x_end, y_end, 100);


}

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


function getsture_kill_current_app_on_the_recents_page_on_leidianPlayer__autojs_function() {
    x_start = 500;
    y_start = 2000;
    // y_start = 1800;
    x_end = x_start - 400;
    // y_end = 1800;
    y_end = y_start;
    swipe(x_start, y_start, x_end, y_end, 2000);
}

function infomation_dev(info) {
    info = info || "dddddddddddddd";
    toast(info)
}

function launch_new_app(PackageName) {
    launch_app_start_on_the_home(PackageName);
    sleep_certian_time();
    infomation_dev("back button");
    back()
    sleep_certian_time();
    kill_current_app();
    sleep_certian_time();
    launch_app_start_on_the_home(PackageName);
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


function project_kyub() {

    function test() {

        for (let index = 0; index < 20; index++) {
            sleep_certian_time();
            Collect_the_treasure_chest();
            sleep_certian_time();
            loop_video_20_minute();
        }
    }

    function enter_kyub_main_page() {
        launch_new_app("com.kuaishou.nebula");
    }

    function enter_kyub_vrqm_page() {
        enter_kyub_main_page();
        sleep_certian_time(1000 * 10);
        gesture__click_the_quvrqm_posision();

        //this gesture function has a template
        function gesture__click_the_quvrqm_posision() {
            // id("text1").className("android.widget.CheckedTextView").text("去赚钱").findOne().click();
            // let start_coords = [800, 1800];

            // let coordinate = [x_start, y_start];
            // click( ...coordinate);
            const sp1228 = ihrglobal.miykstring.sp1228;
            const leidian = ihrglobal.miykstring.leidian;

            function __on_sp1228() {
                let x_start = 830;
                let y_start = 1800;
                click(x_start, y_start);
            }

            function __on_leidian() {
                let x_start = 830;
                let y_start = 1800;
                click(x_start, y_start);
            }
            // here need  optimize

            let functionMap = {
                sp1228: __on_sp1228,
                leidian: __on_leidian,
            };


            if (functionMap[ihrglobal.miykstring.currentDevice]) {
                functionMap[ihrglobal.miykstring.currentDevice](); // This will execute myFunction1
            } else {
                console.log("Function not found");
            }


        }
    }
    function main() {

        check_in();
        for (let index = 0; index < 20; index++) {
            sleep_certian_time();
            Collect_the_treasure_chest();
            sleep_certian_time();
            loop_video_20_minute();
        }
    }
    function Collect_the_treasure_chest() {

        function gesture__click_the_treasure_chest_posision() {
            // id("text1").className("android.widget.CheckedTextView").text("去赚钱").findOne().click();
            // let start_coords = [800, 1800];

            // let coordinate = [x_start, y_start];
            // click( ...coordinate);
            const sp1228 = ihrglobal.miykstring.sp1228;
            const leidian = ihrglobal.miykstring.leidian;


            // here need  optimize

            let functionMap = {
                sp1228: function () {
                    let x_start = 1040;
                    let y_start = 1600;
                    click(x_start, y_start);
                },
                leidian: function () {
                    let x_start = 830;
                    let y_start = 1800;
                    click(x_start, y_start);

                }
                ,
            };


            if (functionMap[ihrglobal.miykstring.currentDevice]) {
                functionMap[ihrglobal.miykstring.currentDevice](); // This will execute myFunction1
            } else {
                console.log("Function not found");
            }


        }

        enter_kyub_vrqm_page();
        sleep_certian_time(1000 * 10);
        gesture__click_the_treasure_chest_posision();

    }

    function loop_video_20_minute() {

        function gesture__next_video() {
            // id("text1").className("android.widget.CheckedTextView").text("去赚钱").findOne().click();
            // let start_coords = [800, 1800];

            // let coordinate = [x_start, y_start];
            // click( ...coordinate);
            const sp1228 = ihrglobal.miykstring.sp1228;
            const leidian = ihrglobal.miykstring.leidian;


            // here need  optimize

            let functionMap = {
                sp1228: function () {
                    x_start = 871;
                    y_start = 617;
                    // y_start = 1800;
                    x_end = x_start;
                    // y_end = 1800;
                    y_end = y_start - 600;
                    swipe(x_start, y_start, x_end, y_end, 100);
                },



                leidian: function () {
                    let x_start = 830;
                    let y_start = 1800;
                    click(x_start, y_start);

                },
            };


            if (functionMap[ihrglobal.miykstring.currentDevice]) {
                functionMap[ihrglobal.miykstring.currentDevice](); // This will execute myFunction1
            } else {
                console.log("Function not found");
            }


        }
        enter_kyub_main_page();
        sleep_certian_time(1000 * 6);
        let currentTime = Date.now();

        while (Date.now() - currentTime < 1000 * 60 * 20) {
            gesture__next_video();
            sleep_certian_time(1000 * 6);

        }



        function check_in() {

            function click_check_in_posision() {
                todo();
            }


            enter_kyub_vrqm_page();
            sleep_certian_time(1000 * 10);
            click_check_in_posision();

        }




    }

    // main();
    test();


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
function test() {

    // auto();
    let some_text = "hello world";
    toast(some_text);
    project_kyub();

}


test();
// back()




