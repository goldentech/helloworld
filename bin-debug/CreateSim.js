var CreateSim = (function (_super) {
    __extends(CreateSim, _super);
    function CreateSim(simType, simWidth, simHeight) {
        _super.call(this);
        this.episode = 0;
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
    var d = __define,c=CreateSim;p=c.prototype;
    p.startSim = function (simWidth, simHeight) {
        // this.sound = RES.getRes("sword2"); 
        this.soundChannel = this.sound.play();
        var bg = new LoadBackGround(simWidth, simHeight, "bgGirl", false);
        bg.touchEnabled = true;
        bg.name = "startBg";
        bg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.startGame, this);
        this.addChild(bg);
    };
    p.unloadStartSim = function () {
        this.soundChannel.stop();
        this.removeChild(this.getChildByName("startBg"));
    };
    p.startGame = function (evt) {
        this.unloadStartSim();
        this.singleSim(this.simWidth, this.simHeight);
        //this.mapSim(this.simWidth,this.simHeight);
    };
    p.mapSim = function (simWidth, simHeight) {
        var mapSim = new LoadMapSim(simWidth, simHeight);
        mapSim.name = "mapSim1";
        mapSim.touchEnabled = true;
        mapSim.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchMapSim, this);
        this.addChild(mapSim);
    };
    p.unloadMapSim = function () {
        this.removeChild(this.getChildByName("mapSim1"));
    };
    p.singleSim = function (simWidth, simHeight) {
        var storyBar = new LoadStroyBar(60, 420, 0, 0);
        storyBar.name = "storyBar1";
        storyBar.touchEnabled = true;
        storyBar.addEventListener(egret.TouchEvent.TOUCH_TAP, this.startMap, this);
        this.addChild(storyBar);
    };
    p.unloadSingleSim = function () {
        this.removeChild(this.getChildByName("storyBar1"));
    };
    p.detailSim = function (simWidth, simHeight, touchHouse) {
        //        this.unloadMapSim();
        this.soundChannel.stop();
        if (this.episode < 13) {
            var storyBar = new LoadStroyBar(60, 420, 1, this.episode);
            storyBar.name = "storyBar2";
            if ("h" + storyBar.sectionLoc.toString() == touchHouse) {
                storyBar.visible = true;
                this.episode++;
            }
            else {
                storyBar.visible = false;
                var bg = new LoadBackGround(640, 1036, "bghouse1", false);
                bg.touchEnabled = true;
                bg.name = "startMap2";
                this.addChild(bg);
            }
            this.addChild(storyBar);
        }
        var returnButton = new LoadOneBuild(6, 450, 575, "bghouse2", "离开");
        returnButton.name = "returnMap";
        returnButton.touchEnabled = true;
        returnButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.returnToMap, this);
        this.addChild(returnButton);
    };
    p.unLoadDetailSim = function () {
        this.removeChild(this.getChildByName("storyBar2"));
        this.removeChild(this.getChildByName("returnMap"));
    };
    // return to main map sim from  detail sim
    p.returnToMap = function (evt) {
        this.unLoadDetailSim();
        this.mapSim(this.simWidth, this.simHeight);
    };
    //touchHandler, when touch anywhere on main map sim
    p.touchMapSim = function (evt) {
        var loadMapSim = evt.currentTarget;
        // alert(loadMapSim.touchHouse);
        if (loadMapSim.touchHouse != "h0") {
            this.unloadMapSim();
            this.detailSim(this.simWidth, this.simHeight, loadMapSim.touchHouse);
        }
    };
    //touchHandler, when navigate from pre-story page to main map
    p.startMap = function (evt) {
        if (this.getChildByName("storyBar1").storyEnd) {
            this.unloadSingleSim();
            this.sound = RES.getRes("sword");
            this.soundChannel = this.sound.play(0, 1);
            this.mapSim(this.simWidth, this.simHeight);
        }
    };
    return CreateSim;
})(egret.Sprite);
egret.registerClass(CreateSim,"CreateSim");
