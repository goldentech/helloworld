var LoadStroyBar = (function (_super) {
    __extends(LoadStroyBar, _super);
    function LoadStroyBar(x, y, sectionCatagory, sectionNum) {
        _super.call(this);
        this.newGameCount = 0;
        this.storyEnd = false;
        this.dataElement = new DataLoader(sectionCatagory, sectionNum);
        this.sectionLoc = this.dataElement.sectionLoc;
        this.createStoryBar(x, y);
    }
    var d = __define,c=LoadStroyBar;p=c.prototype;
    p.createStoryBar = function (x, y) {
        var bg = new LoadBackGround(640, 1036, "bghouse1", false);
        bg.touchEnabled = true;
        bg.name = "startMap1";
        bg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchHandler, this);
        this.addChild(bg);
        this.storyLine = new egret.TextField;
        this.storyLine.text = this.dataElement.sectionName;
        this.storyLine.size = 38;
        this.storyLine.x = x; //60
        this.storyLine.y = y; //120
        this.storyLine.width = 520;
        this.storyLine.touchEnabled = true;
        this.storyLine.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchHandler, this);
        this.addChild(this.storyLine);
    };
    p.touchHandler = function (evt) {
        var tx = this.storyLine;
        tx.textColor = 0x00ff00;
        var story1 = new Story(this.dataElement.sectionContent);
        tx.text = story1.getLineByIndex(this.newGameCount);
        if (this.newGameCount < story1.maxlineCount) {
            this.newGameCount = this.newGameCount + 1;
        }
        else {
            //var sound: egret.Sound = RES.getRes("sword"); sound.play(true);
            this.storyEnd = true;
        }
        //        var temp: egret.TextField = new egret.TextField;
        //        temp =<egret.TextField> this.getChildByName("app1");
        //        temp.text = "行动力：" + (7-this.newGameCount).toString() + "/6";
    };
    return LoadStroyBar;
})(egret.Sprite);
egret.registerClass(LoadStroyBar,"LoadStroyBar");
