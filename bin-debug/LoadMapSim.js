var LoadMapSim = (function (_super) {
    __extends(LoadMapSim, _super);
    function LoadMapSim(simWidth, simHeight) {
        _super.call(this);
        this.moveName = new egret.TextField;
        this.touchHouse = "h0";
        this.createSimMap(simWidth, simHeight);
    }
    var d = __define,c=LoadMapSim,p=c.prototype;
    p.createSimMap = function (simWidth, simHeight) {
        var bg = new LoadBackGround(simWidth, simHeight, "bgImage", false);
        this.addChild(bg);
        //        var storyBar: LoadStroyBar = new LoadStroyBar(60,120,1,0);
        //        this.addChild(storyBar);
        this.states = 0;
        this.addMoveButton();
    };
    p.addMoveButton = function () {
        var monster2 = new egret.Bitmap(RES.getRes("sword"));
        monster2.x = 0;
        monster2.y = 0;
        this.addChild(monster2);
        this.moveName = new egret.TextField;
        this.moveName.text = "移 动";
        this.moveName.x = 35;
        this.moveName.y = 150;
        this.moveName.size = 32;
        this.moveName.textColor = 0xFF4040;
        this.moveName.bold = true;
        this.addChild(this.moveName);
        monster2.touchEnabled = true;
        monster2.addEventListener(egret.TouchEvent.TOUCH_TAP, function () { this.changeStates(); }, this);
        this.moveName.touchEnabled = true;
        this.moveName.addEventListener(egret.TouchEvent.TOUCH_TAP, function () { this.changeStates(); }, this);
    };
    p.changeStates = function () {
        if (this.states == 0) {
            this.addAllLocation();
            this.states = 1;
            this.moveName.text = "驻 足";
        }
        else {
            this.removeAllLocation();
            this.states = 0;
            this.moveName.text = "移 动";
        }
    };
    p.addAllLocation = function () {
        var house1 = new LoadOneBuild(1, 50, 275, "sim1", "练武场");
        house1.name = "h1";
        house1.touchEnabled = true;
        house1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchHandler, this);
        this.addChild(house1);
        var house2 = new LoadOneBuild(2, 250, 275, "sim2", "书  房");
        house2.name = "h2";
        house2.touchEnabled = true;
        house2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchHandler, this);
        this.addChild(house2);
        var house3 = new LoadOneBuild(3, 450, 275, "sim3", "酒  馆");
        house3.name = "h3";
        house3.touchEnabled = true;
        house3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchHandler, this);
        this.addChild(house3);
        var house4 = new LoadOneBuild(4, 50, 605, "sim4", "小  巷");
        house4.name = "h4";
        house4.touchEnabled = true;
        house4.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchHandler, this);
        this.addChild(house4);
        var house5 = new LoadOneBuild(5, 250, 605, "sim5", "公正峰");
        house5.name = "h5";
        house5.touchEnabled = true;
        house5.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchHandler, this);
        this.addChild(house5);
        var house6 = new LoadOneBuild(6, 450, 605, "sim6", "医  馆");
        house6.name = "h6";
        house6.touchEnabled = true;
        house6.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchHandler, this);
        this.addChild(house6);
    };
    p.removeAllLocation = function () {
        for (var i = 1; i <= 6; i++) {
            this.removeChild(this.getChildByName("h" + i));
        }
    };
    p.touchHandler = function (evt) {
        var currentHouse = evt.currentTarget;
        this.touchHouse = currentHouse.name;
    };
    return LoadMapSim;
})(egret.Sprite);
egret.registerClass(LoadMapSim,'LoadMapSim');
//# sourceMappingURL=LoadMapSim.js.map