// default  is sleep 2 seconds
// NOTE lower version js engine can not support the default parament syntax
function sleep_certian_time(time_long) {
    var true_time_long = time_long || 1000 * 2;
    sleep(true_time_long);
}

//BZ
function stay_home_page_with_unlock() {
    for (let index = 0; index < 2; index++) {
        home();
        sleep_certian_time();
    }
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
    gesture_kill_current_app_on_the_recents_page_on_leidian_player();
}
function kill_current_app(params) {

    function kill_current_app_by_shell(params) {
    }

    function kill_current_app_by_backButton_many_times(params) {
    }
    function kill_current_app_by_gesture(params) {
    }
    stay_home_page_with_unlock();
    page_recent_app();
    sleep_certian_time();
    gesture_kill_current_app_on_the_recents_page_on_the_vivoS10();
    gesture_kill_current_app_on_the_recents_page();
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

//after failing , find that  the kill current app  on the recents page need a certain speed.whic is not supported in the leidian player 
function gesture_kill_current_app_on_the_recents_page_on_leidian_player() {
    // getsture_kill_current_app_on_the_recents_page_on_leidianPlayer__autojs_function();
    function __by_touch_file() {
        var password_string = "/storage/emulated/0/脚本/autoTask_gesture_delete_currentApp";
        var result = shell("touch " + password_string, false);
        log(result);
        // console.show();

        if (result.code == 0) {
            toast("执行成功");
        } else {
            toast("执行失败！请到控制台查看错误信息");
        }



    }


    function __by_builtinApi_create_file(file_path) {
        var password_string = "/storage/emulated/0/脚本/autoTask_gesture_delete_currentApp";
        file_path = file_path || password_string;
        ensure_file_content(file_path, "");
    }

    function __by_builtinApi_swipe(x_start, y_start, x_end, y_end, duration) {
        duration = duration || 2000;
        var x_start = 500;
        var y_start = 2000;
        // y_start = 1800;
        var x_end = x_start - 400;
        // y_end = 1800;
        var y_end = y_start;
        swipe(x_start, y_start, x_end, y_end, duration);

    }
    //  __by_touch_file ();
    __by_builtinApi_create_file("/storage/emulated/0/脚本/autoTask_gesture_delete_currentApp");




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

function launch_new_app(PackageName) {
    launch_app_start_on_the_home(PackageName);
    sleep_certian_time();
    Back()
    sleep_certian_time();
    kill_current_app();
    sleep_certian_time();
    launch_app_start_on_the_home(PackageName);
}


function main(params) {
    auto();
    var some_prompt_text = "hello world";
    toast(some_prompt_text);
    launch_new_app("io.github.huskydg.magisk")
    //  gesture_kill_current_app_on_the_recents_page_on_leidian_player();
    let file_path = "/sdcard/used_by_autojs/used_by_TestHowLongTheAutojsAppCanStay.txt";

}





function project_kyub() {

    function enter_kyub_main_page() {
    }

    function enter_kyub_vrqm_page() {
    }

    function loop_video_20_minute() {
    }

    function Collect_the_treasure_chest() {

        function click_treasure_chest_posision() {
            todo();
        }

        enter_kyub_vrqm_page();
        sleep_certian_time();

    }

    function main() {

        check_in();
        for (let index = 0; index < 20; index++) {
            sleep_certian_time();
            loop_video_20_minute();
            sleep_certian_time();
            Collect_the_treasure_chest();
        }
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
function todo() {

    function __by_processExit(){
        console.log("todo");
        process.exit(1); // This will stop the program immediately
    }

    function __by_throw(){
        console.log("todo");
        throw new Error("todo");
    }

    __by_processExit();


}


function test(){

    toast("hello world");

}


test();