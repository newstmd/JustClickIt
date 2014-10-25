var StateLayer = cc.Layer.extend({
	ctor:function (){
		this._super();

		var size = cc.winSize;
		
		helloLabel = new cc.LabelTTF("分数："+sco, "Arial", 80);
		// position the label on the center of the screen
		helloLabel.x = size.width/2;
		helloLabel.y = size.height/8*6;
		// add the label as a child to this layer
		this.addChild(helloLabel);

	}
});

function updateScroe(){
	sco++;
	helloLabel.setString("分数："+sco);
}