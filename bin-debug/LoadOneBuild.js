var LoadOneBuild = (function (_super) {
    __extends(LoadOneBuild, _super);
    function LoadOneBuild(positon, x, y, sourceName, buildName) {
        _super.call(this);
        this.createBuild(positon, x, y, sourceName, buildName);
    }
    var d = __define,c=LoadOneBuild;p=c.prototype;
    p.createBuild = function (position, x, y, sourceName, buildName) {
        this.house = new egret.Bitmap(RES.getRes(sourceName));
        this.house.x = x;
        this.house.y = y;
        this.house.scaleX = 0.5;
        this.house.scaleY = 0.5;
        this.house.name = "house" + position;
        this.house.touchEnabled = true;
        this.house.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchHandler, this);
        this.addChild(this.house);
        this.houseName = new egret.TextField;
        this.houseName.text = buildName;
        this.houseName.x = x + 30;
        this.houseName.y = y + 125;
        this.houseName.name = "houseName" + position;
        this.addChild(this.houseName);
    };
    p.touchHandler = function (evt) {
    };
    return LoadOneBuild;
})(egret.Sprite);
egret.registerClass(LoadOneBuild,"LoadOneBuild");
