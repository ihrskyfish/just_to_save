
class  gesture {
    constructor(x_start, y_start, x_end, y_end, duration ,speed)  {
        super();
    }
}

class gesture__click_the_treasure_chest_posision_class extends gesture {
    constructor() {
        super();
    }
    function() {
        let x_start = 1040;
        let y_start = 1600;
        click(x_start, y_start);
    }
}



// 定义父类 gesture
function Gesture() {
    // 父类构造函数内容
}

// 定义子类 gesture__click_the_treasure_chest_posision_class
function GestureClickTheTreasureChestPosition() {
    Gesture.call(this); // 调用父类构造函数
}

// 继承父类的方法
GestureClickTheTreasureChestPosition.prototype = Object.create(Gesture.prototype);
GestureClickTheTreasureChestPosition.prototype.constructor = GestureClickTheTreasureChestPosition;

// 定义子类的方法
GestureClickTheTreasureChestPosition.prototype.clickTheTreasureChest = function() {
    let x_start = 1040;
    let y_start = 1600;
    click(x_start, y_start);
};

// 示例用法
function click(x, y) {
    console.log(`Clicked at (${x}, ${y})`);
}

let gestureInstance = new GestureClickTheTreasureChestPosition();
gestureInstance.clickTheTreasureChest();