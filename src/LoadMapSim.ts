

class LoadMapSim extends egret.Sprite {

    public constructor(simWidth,simHeight) {
        super();
        
        this.touchHouse = "h0";
        
        this.createSimMap(simWidth,simHeight);
    }

    public touchHouse ;
    
    
    
    private createSimMap(simWidth,simHeight):void {
        var bg: LoadBackGround = new LoadBackGround(simWidth,simHeight,"bgImage",false);
        this.addChild(bg);
                   
//        var storyBar: LoadStroyBar = new LoadStroyBar(60,120,1,0);
//        this.addChild(storyBar);
                
                
        var house1: LoadOneBuild = new LoadOneBuild(1, 50, 275 ,"bghouse2","练武场");
        house1.name = "h1";
        house1.touchEnabled = true;
        house1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.touchHandler,this);
        this.addChild(house1);
        var house2: LoadOneBuild = new LoadOneBuild(2, 250, 275 ,"bghouse2","书房");
        house2.name = "h2";
        house2.touchEnabled = true;
        house2.addEventListener(egret.TouchEvent.TOUCH_TAP,this.touchHandler,this);
        this.addChild(house2);
        var house3: LoadOneBuild = new LoadOneBuild(3, 450, 275 ,"bghouse2","酒馆");
        house3.name = "h3";
        house3.touchEnabled = true;
        house3.addEventListener(egret.TouchEvent.TOUCH_TAP,this.touchHandler,this);
        this.addChild(house3);
        var house4: LoadOneBuild = new LoadOneBuild(4, 50, 475 ,"bghouse2","小巷");
        house4.name = "h4";
        house4.touchEnabled = true;
        house4.addEventListener(egret.TouchEvent.TOUCH_TAP,this.touchHandler,this);
        this.addChild(house4);
        var house5: LoadOneBuild = new LoadOneBuild(5, 250, 475 ,"bghouse2","公正峰");
        house5.name = "h5";
        house5.touchEnabled = true;
        house5.addEventListener(egret.TouchEvent.TOUCH_TAP,this.touchHandler,this);
        this.addChild(house5);
        var house6: LoadOneBuild = new LoadOneBuild(6, 450, 475 ,"bghouse2","医馆");
        house6.name = "h6";
        house6.touchEnabled = true;
        house6.addEventListener(egret.TouchEvent.TOUCH_TAP,this.touchHandler,this);
        this.addChild(house6);
    }
    
    private touchHandler(evt:egret.TouchEvent):void
    {
        var currentHouse: LoadOneBuild = evt.currentTarget;
        this.touchHouse = currentHouse.name;
        
    }
    
   


}
