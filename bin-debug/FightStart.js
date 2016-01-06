var FightStart = (function (_super) {
    __extends(FightStart, _super);
    function FightStart(width, height) {
        _super.call(this);
        this.startFight(width, height);
    }
    var d = __define,c=FightStart,p=c.prototype;
    p.startFight = function (width, height) {
        var fightScene = new FightV1(width, height);
        var self = this;
        this.addChild(fightScene);
        fightScene.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            if (fightScene.hits == 1) {
                self.removeChild(fightScene);
            }
        }, this);
    };
    return FightStart;
})(egret.Sprite);
egret.registerClass(FightStart,'FightStart');
//# sourceMappingURL=FightStart.js.map