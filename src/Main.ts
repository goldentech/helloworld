class Main extends egret.DisplayObjectContainer {

    /**
     * 加载进度界面
     * Process interface loading
     */
    private loadingView: LoadingUI;

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
        RES.loadConfig("resource/default.res.json","resource/");
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

    private socket;
    private txt:egret.TextField;
    
    private stageNum = 1;

    /**
     * 创建游戏场景
     * Create a game scene
     */
    private createGameScene(): void {
        
//        var chat = new ChatSocket(this.stage.stageWidth,this.stage.stageHeight);
//        this.socket = chat.socket;
//        
//        
//        this.stage.addChild(chat);
        
//        var register = new NewPlayer(this.stage.stageWidth,this.stage.stageHeight);
//        this.stage.addChild(register);
        
        
//        var fightScene = new FightStart(this.stage.stageWidth,this.stage.stageHeight);
//        this.stage.addChild(fightScene);
        
//        egret.log("123");
        var newSim: CreateSim = new CreateSim(this.stageNum,this.stage.stageWidth,this.stage.stageHeight);
        newSim.name = "sim" + this.stageNum;
        this.stage.addChild(newSim);
        
        
//        var fightScene = new YourInput ();
//        this.stage.addChild(fightScene);
        
        
        
        
        
        
        
        
    }
    

   
}