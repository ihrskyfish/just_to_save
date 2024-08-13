
toast("开始连接到服务器")



var uiselector = {};

var tmp =clickable
uiselector.clickable=tmp;




// uiselector.clickable(true).depth(8).className("android.view.View").desc("菜单").findOne().click()
// depth(8).className("android.view.View").desc("菜单").findOne().click()
// depth(8).indexInParent(20).className("android.view.View").desc("菜单").findOne().click()
// depth(8).className("android.view.View").desc("菜单").findAll().click()

// tmp=className("android.view.View").untilFind()




className("android.view.View").desc("菜单").findOne().parent().click()
// className("android.widget.TextView").text("已连接电脑").findOne().  click()
className("android.widget.Switch").untilFind()[8].click() ;
className("android.widget.EditText").findOne().setText("192.168.0.109");
sleep(2000)
// className("android.widget.TextView").text("确定").findOne().click()
className("android.widget.TextView").text("确定").findOne().parent().click()


console.log(tmp)
//  desc("菜单").clickable(true).findOne().click()


//   el1 = driver.find_element(by=AppiumBy.ACCESSIBILITY_ID, value="菜单")
// el1.click()
// el3 = driver.find_element(by=AppiumBy.ANDROID_UIAUTOMATOR, value="new UiSelector().className(\"android.widget.Switch\").instance(8)")
// el3.click()
// el3.click()
// el4 = driver.find_element(by=AppiumBy.CLASS_NAME, value="android.widget.EditText")
// el4.send_keys("")
// el4.send_keys("192.168.0.109")
// el5 = driver.find_element(by=AppiumBy.ANDROID_UIAUTOMATOR, value="new UiSelector().className(\"android.widget.Button\").instance(2)")
// el5.click()
