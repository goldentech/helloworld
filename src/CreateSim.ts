

class CreateSim extends egret.Sprite {

    public constructor(simType,simWidth,simHeight) {
        super();
        
        this.simWidth = simWidth;
        this.simHeight = simHeight;
        this.sound= RES.getRes("sword2");
        switch(simType)
        {
            case 1: this.startSim(simWidth,simHeight);
                break;
            case 2: this.mapSim(simWidth,simHeight);
                break;
            case 3: this.singleSim(simWidth,simHeight);
                break;
                
        }
    }

    private simWidth;
    private simHeight;
    private house:egret.Bitmap;
    private houseName:egret.TextField;
    
    private sound: egret.Sound; 
    
    
    private startSim(simWidth,simHeight)
    {
         this.sound.play(true);   
        
        
        var bg: LoadBackGround = new LoadBackGround(simWidth,simHeight,"bgGirl",false);
        bg.touchEnabled = true; bg.name = "startBg";
        bg.addEventListener(egret.TouchEvent.TOUCH_TAP,this.startGame,this);
        this.addChild(bg);
        
//                var tx: egret.TextField = new egret.TextField;
//                tx.text = "新的开始";
//                        
//                        
//                tx.textColor = 0x00ff00;
//                        
//                tx.size = 100;
//                tx.x = 60;
//                tx.y = 120;
//                tx.width = simWidth - 120;
//                        
//                tx.touchEnabled = true;
//                        
//      
//                        
//                tx.addEventListener(egret.TouchEvent.TOUCH_TAP,this.startGame,this);
//                        
//                this.addChild(tx);
         
        
    }
    
    private unloadStartSim()
    {
        this.sound.stop(); 
        this.removeChild(this.getChildByName("startBg"));
    }
    
    private startGame(evt: egret.TouchEvent): void {
     
        this.unloadStartSim();      
        this.singleSim(this.simWidth,this.simHeight);
        //this.mapSim(this.simWidth,this.simHeight);
        
    }
    
    
    
    private mapSim(simWidth,simHeight)
    {
//        var bg: egret.Bitmap = new egret.Bitmap(RES.getRes("bgImage"));
//        bg.x = 0; bg.y = 0; bg.width = simWidth; bg.height = simHeight; 
//               
//        this.addChild(bg);
        
        var bg: LoadBackGround = new LoadBackGround(simWidth,simHeight,"bgImage",false);
        this.addChild(bg);
           
        var storyBar: LoadStroyBar = new LoadStroyBar(60,120,1,0);
        this.addChild(storyBar);
        
        
        var house1: LoadOneBuild = new LoadOneBuild(1, 50, 275 ,"bghouse2","练武场");
        this.addChild(house1);
        var house2: LoadOneBuild = new LoadOneBuild(2, 250, 275 ,"bghouse2","书房");
        this.addChild(house2);
        var house3: LoadOneBuild = new LoadOneBuild(3, 450, 275 ,"bghouse2","酒馆");
        this.addChild(house3);
        var house4: LoadOneBuild = new LoadOneBuild(4, 50, 475 ,"bghouse2","小巷");
        this.addChild(house4);
        var house5: LoadOneBuild = new LoadOneBuild(5, 250, 475 ,"bghouse2","公正峰");
        this.addChild(house5);
        var house6: LoadOneBuild = new LoadOneBuild(6, 450, 475 ,"bghouse2","医馆");
        this.addChild(house6);
                
                
        
                
               
               
                
                
             
        
    }
    
    private singleSim(simWidth,simHeight)
    {
        var bg: LoadBackGround = new LoadBackGround(simWidth,simHeight,"bghouse1",false);
        bg.touchEnabled = true; bg.name = "startMap";
        bg.addEventListener(egret.TouchEvent.TOUCH_TAP,this.startMap,this);
        
        this.addChild(bg);
                   
        var storyBar: LoadStroyBar = new LoadStroyBar(60,420,0,0);
        storyBar.name = "storyBar1";
        this.addChild(storyBar);
    }
    
    private startMap(evt: egret.TouchEvent): void {
         
        if((<LoadStroyBar>this.getChildByName("storyBar1")).storyEnd)
        {
            this.mapSim(this.simWidth,this.simHeight);
        }
    }
    
    
//    private touchHandler(evt:egret.TouchEvent):void
//    {
//        var tx: egret.TextField = evt.currentTarget;
//                
//        tx.textColor = 0x00ff00;
//                
//        var dataElement: DataLoader = new DataLoader(0,0);
//                
//        var story1: Story = new Story(dataElement.sectionContent);
//                
//        tx.text = story1.getLineByIndex(parseInt(this.newGameCount) );
//        if((parseInt(this.newGameCount)) <7)
//        {
//            this.newGameCount = (parseInt(this.newGameCount) + 1).toString();
//        }
//        if(parseInt(this.newGameCount) > 6 )
//        {
//            var sound: egret.Sound = RES.getRes("sword"); sound.play(true);
//        }
//        var temp: egret.TextField = new egret.TextField;
//        temp =<egret.TextField> this.getChildByName("app1");
//        temp.text = "行动力：" + (7-parseInt(this.newGameCount)).toString() + "/6";
//    }
    
}
