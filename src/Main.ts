
class Main extends egret.DisplayObjectContainer {

    /**
     * 加载进度界面
     * Process interface loading
     */
    private loadingView: LoadingUI;
    
    private newGameCount = "1";

    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
    }

    private onAddToStage(event: egret.Event) {
        //设置加载进度界面
        //Config to load process interface
        this.loadingView = new LoadingUI();
        this.stage.addChild(this.loadingView);

        //初始化Resource资源加载库
        //initiate Resource loading library
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE,this.onConfigComplete,this);
        RES.loadConfig("resource/resource.json","resource/");
    }

    /**
     * 配置文件加载完成,开始预加载preload资源组。
     * configuration file loading is completed, start to pre-load the preload resource group
     */
    private onConfigComplete(event: RES.ResourceEvent): void {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE,this.onConfigComplete,this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.onResourceLoadComplete,this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR,this.onResourceLoadError,this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS,this.onResourceProgress,this);
        RES.loadGroup("preload");
    }

    /**
     * preload资源组加载完成
     * Preload resource group is loaded
     */
    private onResourceLoadComplete(event: RES.ResourceEvent): void {
        if(event.groupName == "preload") {
            this.stage.removeChild(this.loadingView);
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.onResourceLoadComplete,this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR,this.onResourceLoadError,this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS,this.onResourceProgress,this);
            this.createGameScene();
        }
    }

    /**
     * 资源组加载出错
     *  The resource group loading failed
     */
    private onResourceLoadError(event: RES.ResourceEvent): void {
        //TODO
        console.warn("Group:" + event.groupName + " has failed to load");
        //忽略加载失败的项目
        //Ignore the loading failed projects
        this.onResourceLoadComplete(event);
    }

    /**
     * preload资源组加载进度
     * Loading process of preload resource group
     */
    private onResourceProgress(event: RES.ResourceEvent): void {
        if(event.groupName == "preload") {
            this.loadingView.setProgress(event.itemsLoaded,event.itemsTotal);
        }
    }

    private textfield: egret.TextField;

    /**
     * 创建游戏场景
     * Create a game scene
     */
    private createGameScene(): void {
        
        
        var bg: egret.Shape = new egret.Shape;
        bg.graphics.beginFill(0x336699);
        bg.graphics.drawRect(0,0,this.stage.stageWidth,this.stage.stageHeight);
        bg.graphics.endFill();
        this.addChild(bg);
        
        
        
        var house1:egret.Bitmap = new egret.Bitmap(RES.getRes("bghouse2"))
        house1.x = 630;
        house1.y = 160;
        this.addChild(house1);
        
        var house2:egret.Bitmap = new egret.Bitmap(RES.getRes("bghouse2"))
        house2.x = 0;
        house2.y = 190;
        this.addChild(house2);
        
        var house3:egret.Bitmap = new egret.Bitmap(RES.getRes("bghouse2"))
        house3.x = 300;
        house3.y = 175;
        this.addChild(house3);
        
        
        var txPower: egret.TextField = new egret.TextField;
        txPower.text = "行动力：" + (7-parseInt(this.newGameCount)).toString() + "/6";
                
        txPower.size = 32;
        txPower.x = 60;
        txPower.y = 600;
        txPower.width = this.stage.stageWidth - 120;
                
        
                
        this.addChild(txPower);
        
        
        var tx: egret.TextField = new egret.TextField;
        tx.text = "新的开始";
        
        
        
        
        tx.size = 32;
        tx.x = 60;
        tx.y = 120;
        tx.width = this.stage.stageWidth - 120;
        
        tx.touchEnabled = true;
        
        var i = 1;
        
        tx.addEventListener(egret.TouchEvent.TOUCH_TAP,this.touchHandler,this);
        
        this.addChild(tx);
        
        
        
        
        
        
        
        
    }
    
    private  f(x:string):string
    {
        switch(x)
        {
            case "1":return "清晨的阳光透过绿竹编制的窗帘射入屋子";
            case "2":return "我用力摇头，试图把自己从昨夜噩梦的影响中驱散";
            case "3":return "突出胸口的一股浊气，我习惯性的把目光转向北面";
            case "4":return "那里挂着我不想看见到，却又每天都不停观看的东西";
            case "5":return "元历三百一十三年八月十二日，鲜红的字迹想血一样挂在日历上";
            case "6":return "还有，最后三天";
            case "7":return " ";
        }
        return " ";
    }
    
    
    private touchHandler(evt:egret.TouchEvent):void
    {
        var tx: egret.TextField = evt.currentTarget;
        
        tx.textColor = 0x00ff00;
        
        
        tx.text = this.f(this.newGameCount);
        if((parseInt(this.newGameCount)) <7)
        {
            this.newGameCount = (parseInt(this.newGameCount) + 1).toString();
        }
        
        
    }
    
    
}
