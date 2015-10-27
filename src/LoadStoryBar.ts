

class LoadStroyBar extends egret.Sprite {

    public constructor( x, y ,sectionCatagory,sectionNum) {
        super();
        
        this.newGameCount = 1;
        this.storyEnd = false;
        
        this.dataElement = new DataLoader(sectionCatagory,sectionNum);
        
        this.createStoryBar(x,y);
    }

    
    private storyLine:egret.TextField;
    
    private newGameCount;
    
    public storyEnd;
    
    private dataElement: DataLoader; 
    
    private createStoryBar(x,y):void {
        
        
       
        
        
        this.storyLine= new egret.TextField;
        this.storyLine.text = this.dataElement.sectionName;
                        
                        
                        
                        
        this.storyLine.size = 38;
        this.storyLine.x = x;//60
        this.storyLine.y = y;//120
        this.storyLine.width = 520;
                        
        this.storyLine.touchEnabled = true;
                        
        
                        
        this.storyLine.addEventListener(egret.TouchEvent.TOUCH_TAP,this.touchHandler,this);
                        
        this.addChild(this.storyLine);
    }
    
    private touchHandler(evt:egret.TouchEvent):void
    {
        var tx: egret.TextField = evt.currentTarget;
                        
        tx.textColor = 0x00ff00;
                        
        
                        
        var story1: Story = new Story(this.dataElement.sectionContent);
                        
        tx.text = story1.getLineByIndex(this.newGameCount);
        if(this.newGameCount <story1.maxlineCount)
        {
            
            this.newGameCount = this.newGameCount + 1;
        }
        else
        {
            
            var sound: egret.Sound = RES.getRes("sword"); sound.play(true);
            this.storyEnd = true;
        }
//        var temp: egret.TextField = new egret.TextField;
//        temp =<egret.TextField> this.getChildByName("app1");
//        temp.text = "行动力：" + (7-this.newGameCount).toString() + "/6";
    }


}
