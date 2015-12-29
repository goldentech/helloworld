

class CreateSim extends egret.Sprite {

    
    private simWidth;
    private simHeight;
    private house: egret.Bitmap;
    private houseName: egret.TextField;

    private episode = 0;

    private sound: egret.Sound;
    private soundChannel: egret.SoundChannel;
    
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
//            case 4: this.detailSim(simWidth,simHeight,touchHouse);
//                break;
                
        }
    }

    
    
    
    private startSim(simWidth,simHeight)
    {
        // this.sound = RES.getRes("sword2"); 
         this.soundChannel= this.sound.play();   
         
        
        var bg: LoadBackGround = new LoadBackGround(simWidth,simHeight,"bgGirl",false);
        bg.touchEnabled = true; bg.name = "startBg";
        bg.addEventListener(egret.TouchEvent.TOUCH_TAP,this.startGame,this);
        this.addChild(bg);
    }
    
    private unloadStartSim()
    {
        this.soundChannel.stop(); 
        this.removeChild(this.getChildByName("startBg"));
    }
    
    private startGame(evt: egret.TouchEvent): void {
     
        this.unloadStartSim();      
        this.singleSim(this.simWidth,this.simHeight);
        //this.mapSim(this.simWidth,this.simHeight);
        
    }
    
    
    
    private mapSim(simWidth,simHeight)
    {
        var mapSim: LoadMapSim = new LoadMapSim(simWidth,simHeight);
        mapSim.name = "mapSim1";
        mapSim.touchEnabled = true;
        mapSim.addEventListener(egret.TouchEvent.TOUCH_TAP,this.touchMapSim,this);
        this.addChild(mapSim);
        
    }
    
    private unloadMapSim()
    {
        this.removeChild(this.getChildByName("mapSim1"));
    }
    
    private singleSim(simWidth,simHeight)
    {
        
                   
        var storyBar: LoadStroyBar = new LoadStroyBar(60,420,0,0);
        storyBar.name = "storyBar1";
        storyBar.touchEnabled = true; 
        storyBar.addEventListener(egret.TouchEvent.TOUCH_TAP,this.startMap,this);
        this.addChild(storyBar);
    }
    
    private unloadSingleSim()
    {
        
        this.removeChild(this.getChildByName("storyBar1"));
        
    }
    
    
    private detailSim(simWidth,simHeight,touchHouse)
    {
       
//        this.unloadMapSim();
        
        this.soundChannel.stop();
            
        
        if(this.episode<13)
        {
            var storyBar: LoadStroyBar = new LoadStroyBar(60,420,1,this.episode);
            
            storyBar.name = "storyBar2";
          
            
            if("h" + storyBar.sectionLoc.toString() == touchHouse) {
                storyBar.visible = true;
                this.episode++;
            }
            else
            {
                storyBar.visible = false;
                var bg: LoadBackGround = new LoadBackGround(640,1036,"bghouse1",false);
                bg.touchEnabled = true; bg.name = "startMap2";
            
                                        
                this.addChild(bg);
            }
            this.addChild(storyBar);
        }
        
        var returnButton: LoadOneBuild = new LoadOneBuild(6, 450, 575 ,"bghouse2","离开");
        returnButton.name = "returnMap";
        returnButton.touchEnabled = true;
        returnButton.addEventListener(egret.TouchEvent.TOUCH_TAP,this.returnToMap,this);
        this.addChild(returnButton);
        
    }
        
    private unLoadDetailSim()
    {
       
        
      
        this.removeChild(this.getChildByName("storyBar2"));
        this.removeChild(this.getChildByName("returnMap"));
        
    }
    
    
    // return to main map sim from  detail sim
    private returnToMap(evt: egret.TouchEvent)
    {
        this.unLoadDetailSim();
        this.mapSim(this.simWidth,this.simHeight);
    }
    //touchHandler, when touch anywhere on main map sim
    private touchMapSim(evt: egret.TouchEvent)
    {
        var loadMapSim: LoadMapSim = evt.currentTarget;
       // alert(loadMapSim.touchHouse);
        if(loadMapSim.touchHouse!= "h0")
        {
            this.unloadMapSim();
            this.detailSim(this.simWidth,this.simHeight,loadMapSim.touchHouse);
        }
        
        
        
    }
    //touchHandler, when navigate from pre-story page to main map
    private startMap(evt: egret.TouchEvent): void {
      
        if((<LoadStroyBar>this.getChildByName("storyBar1")).storyEnd)
        {
            this.unloadSingleSim();
            this.sound = RES.getRes("sword"); 
            this.soundChannel = this.sound.play(0,1);
            this.mapSim(this.simWidth,this.simHeight);
        }
    }
    
    

    
}
