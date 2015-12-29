var FightV1 = (function (_super) {
    __extends(FightV1, _super);
    function FightV1(width, height) {
        _super.call(this);
        this.hits = 0;
        // monster2 blood level
        this.value1 = 100;
        this.value2 = 100;
        this.startFight(width, height);
    }
    var d = __define,c=FightV1;p=c.prototype;
    p.startFight = function (width, height) {
        this.addChild(this.background(width));
        this.creatMonster();
    };
    // draw a blood level bar
    p.drawProcessBar = function (x, y, value, target, life) {
        //target.graphics.beginFill(0xffffff);
        target.graphics.beginFill(0xFFB90F);
        target.graphics.drawRect(x - 4, y - 3, 208, 26);
        target.graphics.endFill();
        target.graphics.beginFill(0x8B5A2B);
        target.graphics.drawRect(x, y, 200, 20);
        target.graphics.endFill();
        // show green, yellow, red blood bar
        var color;
        if (value >= 75) {
            color = 0x4CF64D;
        }
        else if (value > 25 && value < 75) {
            color = 0xFFF851;
        }
        else {
            color = 0xFF0017;
        }
        target.graphics.beginFill(color);
        target.graphics.drawRect(x, y, value * 2, 20);
        target.graphics.endFill();
        this.addChild(target);
        life.text = value.toString();
        life.x = x + 80;
        life.y = y - 10;
        this.addChild(life);
    };
    p.background = function (width) {
        //        bg.graphics.drawRoundRect(0,250,width,300,width,300);
        var bg = new egret.Bitmap(RES.getRes("fightBG"));
        bg.x = 0;
        bg.y = 55;
        bg.width = width;
        bg.height = 455;
        return bg;
    };
    p.backgroundRect = function (width) {
        //background
        var bg1 = new egret.Shape;
        bg1.graphics.beginFill(0x336699);
        //bg.graphics.drawRect(0,0,width,height);
        bg1.graphics.drawRect(0, 250, width, 300);
        bg1.graphics.endFill();
        return bg1;
    };
    p.creatMonster = function () {
        // add monster2 to scene
        var monster2 = new egret.Bitmap(RES.getRes("monster"));
        monster2.x = 375;
        monster2.y = 300;
        this.addChild(monster2);
        // addd blood level bar for monster
        var bar1 = new egret.Shape;
        var bar2 = new egret.Shape;
        var life1 = new egret.TextField;
        var life2 = new egret.TextField;
        this.drawProcessBar(75, 480, 100, bar1, life1);
        this.drawProcessBar(350, 480, 100, bar2, life2);
        // add sword to scene
        var sword = new egret.Bitmap(RES.getRes("sword"));
        sword.x = 100;
        sword.y = 300;
        this.addChild(sword);
        var damage = new egret.TextField();
        damage.text = "";
        damage.x = 100;
        damage.y = 300;
        this.addChild(damage);
        //   Monster: change alpha filter and size when under attack, sword: move while touching monster
        monster2.touchEnabled = true;
        monster2.addEventListener(egret.TouchEvent.TOUCH_TAP, function () { this.monsterMove(sword, monster2, bar1, bar2, damage, life1, life2); }, this);
    };
    p.monsterMove = function (sword, monster2, bar1, bar2, damage, life1, life2) {
        egret.Tween.get(damage).to({ x: 375, y: 300, rotation: 0 }, 30).to({ x: 100, y: 300, rotation: 0 }, 350);
        egret.Tween.get(sword).to({ x: 375, y: 300, rotation: 0 }, 30).to({ x: 100, y: 300, rotation: 0 }, 350);
        egret.Tween.get(monster2).wait(450).to({ x: 100, y: 300, rotation: 0 }, 30).to({ x: 375, y: 300, rotation: 0 }, 350);
        this.hits++;
        // adjust blood level
        this.value2 = this.value2 - 25;
        this.drawProcessBar(75, 480, this.value1, bar1, life1);
        this.drawProcessBar(350, 480, this.value2, bar2, life2);
        // when hits equal to 4, monster disappear
        if (this.hits == 4) {
            this.hits = 0;
            // remove child and clean up
            this.removeChild(monster2);
            this.removeChild(bar2);
            this.removeChild(life2);
            return;
        }
        egret.Tween.get(monster2).to({ scaleX: .95, scaleY: .95, alpha: .2 }, 250, egret.Ease.circIn).to({ scaleX: 1, scaleY: 1, alpha: 1 }, 250, egret.Ease.circIn);
    };
    return FightV1;
})(egret.Sprite);
egret.registerClass(FightV1,"FightV1");