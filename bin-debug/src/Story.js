var Story = (function () {
    function Story(storyFull) {
        this.storyFull = storyFull;
        this.storyLine = this.getStoryLine();
        this.maxlineCount = this.storyLine.length;
        this.lineCount = 0;
        this.lineEnd = false;
    }
    var __egretProto__ = Story.prototype;
    __egretProto__.getLineByIndex = function (count) {
        return this.storyLine[count];
    };
    __egretProto__.getLine = function () {
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
    __egretProto__.ifLineEnd = function () {
        return this.lineEnd;
    };
    __egretProto__.getStoryLine = function () {
        var lines = this.storyFull.split(".");
        return lines;
    };
    return Story;
})();
Story.prototype.__class__ = "Story";
