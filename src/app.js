
var WorldScene = cc.Scene.extend({
	
    onEnter:function () {
        this._super();
        var layer = new BackgroundLayer();
        this.addChild(layer);
        var buttonLayer = new ButtonLayer();
        this.addChild(buttonLayer);
        var stateLayer = new StateLayer();
        this.addChild(stateLayer);
    }
});

 