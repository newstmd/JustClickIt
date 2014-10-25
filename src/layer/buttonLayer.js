var ButtonLayer = cc.Layer.extend({
	ctor:function (){
		this._super();
		
		var size = cc.winSize;
		
		var button_1 = cc.MenuItemImage.create(
				res.button1,
				res.button2,
				function(){
					//cc.log("click it!");
					updateScroe();
					},
					this);
	
		var menu1 = cc.Menu.create(button_1);
		
		menu1.attr({
			
			x:size.width/2/2,
			y:size.height/3,
			anchorX: 0.5,
			anchorY: 0.5
		});
		
		this.addChild(menu1);
		//
		var button_2 = cc.MenuItemImage.create(
				res.button1,
				res.button2,
				function(){
					//cc.log("click it!");
					updateScroe();
				},
				this
		);
		var menu2 = cc.Menu.create(button_2);

		menu2.attr({
			x:size.width/2/2*3,
			y:size.height/3,
			anchorX: 0.5,
			anchorY: 0.5
		});

		this.addChild(menu2);
	
	}
});

