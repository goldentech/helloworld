var LoadBackGround = (function (_super) {
    __extends(LoadBackGround, _super);
    function LoadBackGround(simWidth, simHeight, sourceName, ifDetail) {
        _super.call(this);
        this.createBackGround(simWidth, simHeight, sourceName, ifDetail);
    }
    var d = __define,c=LoadBackGround;p=c.prototype;
    p.createBackGround = function (simWidth, simHeight, sourceName, ifDetail) {
        this.bg = new egret.Bitmap(RES.getRes(sourceName));
        this.bg.x = 0;
        this.bg.y = 0;
        this.bg.width = simWidth;
        this.bg.height = simHeight;
        //this.bg.touchEnabled;
        this.addChild(this.bg);
        //        this.houseName = new egret.TextField;
        //        this.houseName.text = buildName; this.houseName.x = x + 30; this.houseName.y = y + 125; this.houseName.name = "houseName"+position;
        //        this.addChild(this.houseName);
    };
    return LoadBackGround;
})(egret.Sprite);
egret.registerClass(LoadBackGround,"LoadBackGround");
