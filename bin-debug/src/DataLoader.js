var DataElement = (function () {
    function DataElement(sectionCatagory, sectionNum, sectionLoc, sectionContent, sectionName) {
        this.sectionNum = sectionNum;
        this.sectionLoc - sectionLoc;
        this.sectionContent = sectionContent;
        this.sectionName = sectionName;
    }
    var __egretProto__ = DataElement.prototype;
    return DataElement;
})();
DataElement.prototype.__class__ = "DataElement";
var DataLoader = (function () {
    function DataLoader(sectionCatagory, sectionNum) {
        this.sections = [];
        for (var i = 0; i < 4; i++) {
            this.sections[i] = [];
        }
        this.allDataLoad();
        this.sectionContent = this.sections[sectionCatagory][sectionNum].sectionContent;
        this.sectionNum = this.sections[sectionCatagory][sectionNum].sectionNum;
        this.sectionLoc = this.sections[sectionCatagory][sectionNum].sectionLoc;
        this.sectionName = this.sections[sectionCatagory][sectionNum].sectionName;
    }
    var __egretProto__ = DataLoader.prototype;
    __egretProto__.allDataLoad = function () {
        //index 0
        var story = "清晨的阳光透过绿竹编制的窗帘射入屋子.我用力摇头，试图把自己从昨夜噩梦的影响中驱散.呼出胸口的一股浊气，我习惯性的把目光转向北面.那里挂着我不想看见到，却又每天忍不住要看的东西.元历三百一十三年八月十二日，鲜红的字迹像血一样挂在日历上.还有，最后三天";
        var name = "序章，新的开始";
        var element_0_0 = new DataElement(0, 0, 0, story, name);
        this.sections[0].push(element_0_0);
        //index 1 
        story = "木质的假人,前仆后继的冲到我身边.这些木人是家族里花了大价钱买来，给家族子弟练手.木人一旦启动,就会像活人一样战斗，直到目标倒下，或自己倒下.最初我来到练武场的时候，每次都会在战斗中获得巨大的进步.然而现在,这些木人我一击就能打倒.即使启动练武场里所有的木人,也不过几个呼吸之间，就能解决战斗.最后一个木人轰然倒地，我却没有半点开心的感觉.为什么，我已经如此努力，实力也突飞猛进，却仍然无法突破瓶颈.甚至无法看到，任何一线希望";
        name = "侠之路，第一章，一线希望";
        var element_1_0 = new DataElement(1, 0, 0, story, name);
        this.sections[1].push(element_1_0);
    };
    return DataLoader;
})();
DataLoader.prototype.__class__ = "DataLoader";
