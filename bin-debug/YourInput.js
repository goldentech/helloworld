var YourInput = (function (_super) {
    __extends(YourInput, _super);
    function YourInput() {
        _super.call(this);
        //public puYourself:string;
        //public puYou: string;
        //public puLocation: string;
        //public puTime: string;
        this.puInputNumber = 1;
        this.puOutputQuestion = { OutputQuestion: [{ question: "请输入用户名" }, { question: "你想变成谁？" }, { question: "你要到哪里去？" }, { question: "你想何时出发？" }] };
        this.puInputLabel = { InputLabel: [{ label: "uYourself" }, { label: "uYou" }, { label: "uLocation" }, { label: "uTime" }] };
        this.startInput();
    }
    var d = __define,c=YourInput,p=c.prototype;
    p.startInput = function () {
        //this.backgroundMusic();
        this.backgroundGraph();
        this.inputData();
        //this.puYou = this.inputLocation();
        //this.puLocation = this.inputTime();
        //this.puTime = this.inputYourself();          
    };
    //    private backgroundMusic(): void {
    //        this.sound = RES.getRes("pal3_1");
    //        this.soundChannel = this.sound.play();
    //
    //    }
    p.backgroundGraph = function () {
        var sky = this.createBitmapByName("bgImage");
        sky.width = 640;
        sky.height = 1000;
        this.addChild(sky);
        //以下可以改背景颜色为蓝色
        //egret.log(123);
        //var bg: egret.Shape = new egret.Shape();
        //bg.graphics.beginFill(0x336699);
        //bg.graphics.endFill();
        //super.addChild(bg);//用this也可以，不写addChild不会有效果
    };
    p.inputData = function () {
        var uYourself = new egret.TextField();
        uYourself.type = egret.TextFieldType.INPUT;
        uYourself.text = this.puOutputQuestion.OutputQuestion[this.puInputNumber - 1].question;
        uYourself.name = this.puInputLabel.InputLabel[this.puInputNumber - 1].label;
        uYourself.x = 150;
        uYourself.y = 450;
        uYourself.width = 350;
        uYourself.textColor = 0xFFFFFF;
        uYourself.background = true;
        uYourself.backgroundColor = 0x000000;
        uYourself.border = true;
        uYourself.borderColor = 0xFF6600;
        this.layTxBg(uYourself);
        this.addChild(uYourself);
        var uButton = new eui.Button();
        uButton.name = this.puInputLabel.InputLabel[this.puInputNumber - 1].label + "button";
        uButton.x = 200;
        uButton.y = 500;
        uButton.height = 100;
        uButton.width = 100;
        uButton.label = "确定";
        uButton.scaleX = 2;
        uButton.scaleY = 2;
        uButton.skinName = "resource/skins/ButtonSkin.exml";
        this.addChild(uButton);
        uButton.addEventListener(egret.TouchEvent.TOUCH_TAP, function () { this.btnTouchHandler(uYourself.text, this.puInputNumber); }, this);
        //button.removeEventListener(egret.TouchEvent.TOUCH_TAP,function() { this.btnTouchHandler(uYou.text) },this);
    };
    p.startYourGame = function () {
        var uButton2 = new eui.Button();
        uButton2.x = 200;
        uButton2.y = 350;
        uButton2.height = 100;
        uButton2.width = 100;
        uButton2.label = "新的旅途，开启！";
        uButton2.scaleX = 2;
        uButton2.scaleY = 2;
        uButton2.skinName = "resource/skins/ButtonSkin.exml";
        this.addChild(uButton2);
        //uButton.addEventListener(egret.TouchEvent.TOUCH_TAP,function() { this.btnTouchHandler(uYou.text,this.puInputNumber) },this);
        //button.removeEventListener(egret.TouchEvent.TOUCH_TAP,function() { this.btnTouchHandler(uYou.text) },this);
    };
    p.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    p.layTxBg = function (tx) {
        var shp = new egret.Shape;
        shp.graphics.beginFill(0xffffff);
        shp.graphics.drawRect(tx.x, tx.y, tx.width, tx.height);
        shp.graphics.endFill();
        this.addChild(shp);
    };
    p.btnTouchHandler = function (inputData, i) {
        console.log("button touched");
        console.log(inputData);
        console.log(i);
        if (i < 4) {
            this.removeChild(this.getChildByName(this.puInputLabel.InputLabel[this.puInputNumber - 1].label + "button"));
            this.removeChild(this.getChildByName(this.puInputLabel.InputLabel[this.puInputNumber - 1].label));
            this.puInputNumber++;
            this.inputData();
        }
        else {
            this.startYourGame();
            //alert(this.getChildByName(this.puInputLabel.InputLabel[this.puInputNumber - 1].label + "button"));
            this.removeChild(this.getChildByName(this.puInputLabel.InputLabel[this.puInputNumber - 1].label + "button"));
            this.removeChild(this.getChildByName(this.puInputLabel.InputLabel[this.puInputNumber - 1].label));
        }
        //var user1 = { username: this.puYourself, userNameNew: this.puYou, userLocation: this.puLocation, userTime: this.puTime }
        //console.log(user1.username);
    };
    return YourInput;
})(egret.Sprite);
egret.registerClass(YourInput,'YourInput');
//# sourceMappingURL=YourInput.js.map