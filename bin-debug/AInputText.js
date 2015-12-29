/*
 * 所有A开头的类都是一个自定义控件
 *
 * 本控件设定了输入框
 *
 */
var AInputText = (function (_super) {
    __extends(AInputText, _super);
    function AInputText(tagName, initContent, y) {
        _super.call(this);
        this.creatInputText(tagName, initContent, y);
    }
    var d = __define,c=AInputText;p=c.prototype;
    p.creatInputText = function (tagName, initContent, y) {
        //USER NAME AND USER INPUT
        var tag = new egret.TextField();
        tag.text = tagName;
        tag.x = 100;
        tag.y = y;
        tag.width = 130;
        this.addChild(tag);
        this.content = new egret.TextField();
        this.content.type = egret.TextFieldType.INPUT;
        this.content.text = "";
        this.content.x = 250;
        this.content.y = y;
        this.content.width = 300;
        this.content.textColor = 0x000000;
        this.layTxBg(this.content);
        this.addChild(this.content);
    };
    p.layTxBg = function (tx) {
        var shp = new egret.Shape;
        shp.graphics.beginFill(0xffffff);
        shp.graphics.drawRect(tx.x, tx.y, tx.width, tx.height);
        shp.graphics.endFill();
        this.addChild(shp);
    };
    return AInputText;
})(egret.Sprite);
egret.registerClass(AInputText,"AInputText");
