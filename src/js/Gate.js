//Gate Class

function Gate( x, y, hp, radius, sprite, icon){

	this.x = x;
	this.y = y;
	this.health = hp;
	this.sprite = sprite;
	this.icon = icon;
	this.radius = radius;
	
	this.render = function(){
		d.drawImage(sprite, x, y, sprite.width, sprite.height);
	};
}
