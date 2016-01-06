/*
 * 一个简易聊天室
 * 用来测试socket.io的功能
 *
 *
 *
 */
var ChatSocket = (function (_super) {
    __extends(ChatSocket, _super);
    function ChatSocket(simWidth, simHeight) {
        _super.call(this);
        this.startChat(simWidth, simHeight);
    }
    var d = __define,c=ChatSocket,p=c.prototype;
    p.startChat = function (simWidth, simHeight) {
        var sky = this.createBitmapByName("bgImage");
        // this.storyLine.addEventListener(egret.TouchEvent.TOUCH_TAP,this.touchHandler,this);
        //sky.touchEnabled = true;
        //        sky.addEventListener(egret.TouchEvent.TOUCH_TAP,function() {
        //            
        //            this.sendMessage("message content");
        //            
        //        },this);
        this.addChild(sky);
        var stageW = simWidth;
        var stageH = simHeight;
        sky.width = stageW;
        sky.height = stageH;
        //var scroll: eui.VScrollBar = new eui.VScrollBar();
        this.txt = new eui.Label();
        //this.txt.height = 600;
        this.txt.width = 640;
        this.txt.text = "早睡晚起身体好";
        //this.txt.type = egret.TextFieldType.INPUT;
        this.myScroller = new eui.Scroller();
        //注意位置和尺寸的设置是在Scroller上面，而不是容器上面
        var group = new eui.Group();
        group.addChild(this.txt);
        this.myScroller.width = 640;
        this.myScroller.height = 600;
        //设置viewport
        this.myScroller.viewport = group;
        this.addChild(this.myScroller);
        // this.addChild(this.txt);
        //USER NAME AND USER INPUT
        var name = new egret.TextField();
        name.type = egret.TextFieldType.INPUT;
        name.text = "把你的名字放这";
        name.x = 150;
        name.y = 630;
        name.width = 350;
        name.textColor = 0x000000;
        this.layTxBg(name);
        this.addChild(name);
        var content = new egret.TextField();
        content.type = egret.TextFieldType.INPUT;
        content.text = "你想说啥放这";
        content.x = 150;
        content.y = 680;
        content.width = 350;
        content.textColor = 0x000000;
        this.layTxBg(content);
        this.addChild(content);
        var button = this.createBitmapByName("button1");
        button.touchEnabled = true;
        button.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            this.sendMessage("[" + name.text + "]:" + content.text, "message");
            content.text = " ";
        }, this);
        button.x = 200;
        button.y = 730;
        button.width = 240;
        button.height = 100;
        this.addChild(button);
        //        var button2: egret.Bitmap = this.createBitmapByName("button1");
        //        button2.touchEnabled = true;
        //        button2.addEventListener(egret.TouchEvent.TOUCH_TAP,function() {
        //
        //            this.sendMessage("[" + name.text + "]:" + content.text,"message2");
        //            content.text = " ";
        //
        //        },this);
        //
        //        button2.x = 200;
        //        button2.y = 800;
        //
        //        button2.width = 240;
        //        button2.height = 100;
        //
        //        this.addChild(button2);
        //alert("finsh");
        //this.socket = io.connect("http://chat-56032.onmodulus.net:80/");
        this.socket = io.connect("http://127.0.0.1:8080/");
        var self = this;
        this.socket.on('message', function (message) {
            self.trace(message);
        });
        this.socket.on('message2', function (message) {
            self.trace(message);
        });
    };
    p.moveScroller = function () {
        //点击按钮后改变滚动的位置
        var sc = this.myScroller;
        //alert(sc.height + ":" + sc.viewport.contentHeight)
        sc.validateNow();
        if (sc.height <= sc.viewport.contentHeight) {
            sc.viewport.scrollV = sc.viewport.contentHeight - sc.height;
        }
    };
    p.layTxBg = function (tx) {
        var shp = new egret.Shape;
        shp.graphics.beginFill(0xffffff);
        shp.graphics.drawRect(tx.x, tx.y, tx.width, tx.height);
        shp.graphics.endFill();
        this.addChild(shp);
    };
    p.sendMessage = function (msg, key) {
        this.trace(msg);
        this.socket.emit(key, msg);
    };
    p.trace = function (msg) {
        this.txt.text += "\n" + msg;
        this.moveScroller();
    };
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    p.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    return ChatSocket;
})(egret.Sprite);
egret.registerClass(ChatSocket,'ChatSocket');
//# sourceMappingURL=ChatSocket.js.map