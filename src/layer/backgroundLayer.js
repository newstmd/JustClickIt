var BackgroundLayer = cc.Layer.extend({
	ctor:function (){
		this._super();
		
		var size = cc.winSize;
		
		var bgsprite = cc.Sprite.create(res.bgWall_jpg);
		bgsprite.attr({
			x:size.width/2,
			y:size.height/2
		
		});
		this.addChild(bgsprite);
		 
	}
	
});