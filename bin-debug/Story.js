var Story = (function () {
    function Story(storyFull) {
        this.storyFull = storyFull;
        this.storyLine = this.getStoryLine();
        this.maxlineCount = this.storyLine.length;
        this.lineCount = 0;
        this.lineEnd = false;
    }
    var d = __define,c=Story;p=c.prototype;
    p.getLineByIndex = function (count) {
        return this.storyLine[count];
    };
    p.getLine = function () {
        var currentLine;
        if (this.lineCount < this.maxlineCount) {
            currentLine = this.storyLine[this.lineCount];
            this.lineCount++;
        }
        else {
            currentLine = " ";
            this.lineEnd = true;
        }
        return currentLine;
    };
    p.ifLineEnd = function () {
        return this.lineEnd;
    };
    p.getStoryLine = function () {
        var lines = this.storyFull.split(".");
        return lines;
    };
    return Story;
})();
egret.registerClass(Story,"Story");
