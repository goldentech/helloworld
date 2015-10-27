var CreateSim = (function (_super) {
    __extends(CreateSim, _super);
    function CreateSim(simType, simWidth, simHeight) {
        _super.call(this);
        this.simWidth = simWidth;
        this.simHeight = simHeight;
        this.sound = RES.getRes("sword2");
        switch (simType) {
            case 1:
                this.startSim(simWidth, simHeight);
                break;
            case 2:
                this.mapSim(simWidth, simHeight);
                break;
            case 3:
                this.singleSim(simWidth, simHeight);
                break;
        }
    }
    var __egretProto__ = CreateSim.prototype;
    __egretProto__.startSim = function (simWidth, simHeight) {
        this.sound.play(true);
        var bg = new LoadBackGround(simWidth, simHeight, "bgGirl", false);
        bg.touchEnabled = true;
        bg.name = "startBg";
        bg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.startGame, this);
        this.addChild(bg);
        //                var tx: egret.TextField = new egret.TextField;
        //                tx.text = "新的开始";
        //                        
        //                        
        //                tx.textColor = 0x00ff00;
        //                        
        //                tx.size = 100;
        //                tx.x = 60;
        //                tx.y = 120;
        //                tx.width = simWidth - 120;
        //                        
        //                tx.touchEnabled = true;
        //                        
        //      
        //                        
        //                tx.addEventListener(egret.TouchEvent.TOUCH_TAP,this.startGame,this);
        //                        
        //                this.addChild(tx);
    };
    __egretProto__.unloadStartSim = function () {
        this.sound.stop();
        this.removeChild(this.getChildByName("startBg"));
    };
    __egretProto__.startGame = function (evt) {
        this.unloadStartSim();
        this.singleSim(this.simWidth, this.simHeight);
        //this.mapSim(this.simWidth,this.simHeight);
    };
    __egretProto__.mapSim = function (simWidth, simHeight) {
        //        var bg: egret.Bitmap = new egret.Bitmap(RES.getRes("bgImage"));
        //        bg.x = 0; bg.y = 0; bg.width = simWidth; bg.height = simHeight; 
        //               
        //        this.addChild(bg);
        var bg = new LoadBackGround(simWidth, simHeight, "bgImage", false);
        this.addChild(bg);
        var storyBar = new LoadStroyBar(60, 120, 1, 0);
        this.addChild(storyBar);
        var house1 = new LoadOneBuild(1, 50, 275, "bghouse2", "练武场");
        this.addChild(house1);
        var house2 = new LoadOneBuild(2, 250, 275, "bghouse2", "书房");
        this.addChild(house2);
        var house3 = new LoadOneBuild(3, 450, 275, "bghouse2", "酒馆");
        this.addChild(house3);
        var house4 = new LoadOneBuild(4, 50, 475, "bghouse2", "小巷");
        this.addChild(house4);
        var house5 = new LoadOneBuild(5, 250, 475, "bghouse2", "公正峰");
        this.addChild(house5);
        var house6 = new LoadOneBuild(6, 450, 475, "bghouse2", "医馆");
        this.addChild(house6);
    };
    __egretProto__.singleSim = function (simWidth, simHeight) {
        var bg = new LoadBackGround(simWidth, simHeight, "bghouse1", false);
        bg.touchEnabled = true;
        bg.name = "startMap";
        bg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.startMap, this);
        this.addChild(bg);
        var storyBar = new LoadStroyBar(60, 420, 0, 0);
        storyBar.name = "storyBar1";
        this.addChild(storyBar);
    };
    __egretProto__.startMap = function (evt) {
        if (this.getChildByName("storyBar1").storyEnd) {
            this.mapSim(this.simWidth, this.simHeight);
        }
    };
    return CreateSim;
})(egret.Sprite);
CreateSim.prototype.__class__ = "CreateSim";
