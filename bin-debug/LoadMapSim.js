var LoadMapSim = (function (_super) {
    __extends(LoadMapSim, _super);
    function LoadMapSim(simWidth, simHeight) {
        _super.call(this);
        this.touchHouse = "h0";
        this.createSimMap(simWidth, simHeight);
    }
    var d = __define,c=LoadMapSim;p=c.prototype;
    p.createSimMap = function (simWidth, simHeight) {
        var bg = new LoadBackGround(simWidth, simHeight, "bgImage", false);
        this.addChild(bg);
        //        var storyBar: LoadStroyBar = new LoadStroyBar(60,120,1,0);
        //        this.addChild(storyBar);
        var house1 = new LoadOneBuild(1, 50, 275, "bghouse2", "练武场");
        house1.name = "h1";
        house1.touchEnabled = true;
        house1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchHandler, this);
        this.addChild(house1);
        var house2 = new LoadOneBuild(2, 250, 275, "bghouse2", "书房");
        house2.name = "h2";
        house2.touchEnabled = true;
        house2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchHandler, this);
        this.addChild(house2);
        var house3 = new LoadOneBuild(3, 450, 275, "bghouse2", "酒馆");
        house3.name = "h3";
        house3.touchEnabled = true;
        house3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchHandler, this);
        this.addChild(house3);
        var house4 = new LoadOneBuild(4, 50, 475, "bghouse2", "小巷");
        house4.name = "h4";
        house4.touchEnabled = true;
        house4.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchHandler, this);
        this.addChild(house4);
        var house5 = new LoadOneBuild(5, 250, 475, "bghouse2", "公正峰");
        house5.name = "h5";
        house5.touchEnabled = true;
        house5.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchHandler, this);
        this.addChild(house5);
        var house6 = new LoadOneBuild(6, 450, 475, "bghouse2", "医馆");
        house6.name = "h6";
        house6.touchEnabled = true;
        house6.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchHandler, this);
        this.addChild(house6);
    };
    p.touchHandler = function (evt) {
        var currentHouse = evt.currentTarget;
        this.touchHouse = currentHouse.name;
    };
    return LoadMapSim;
})(egret.Sprite);
egret.registerClass(LoadMapSim,"LoadMapSim");
