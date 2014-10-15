(function(Vector) 
{
	//	Constructor Function
	function Entity(x, y, radius,  mass, style)
	{
		//	Size variables
		this.radius = radius;
		this.mass = mass;
		this.style = style;
		
		//	Position
		this.pos = new Vector([x,y]);
		
		//	Velocity
		this.vel = new Vector([0,0]);

		//	Acceleration
		this.acc = new Vector([0,0]);

		//	Net Force
		this.fNet = new Vector([0,0]);
	}

	Entity.prototype.setStyle = function(style)
	{
		this.style = style;
	};

	Entity.prototype.draw = function()
	{
		window.ctx.beginPath();
		window.ctx.arc(this.pos.e(0), this.pos.e(1), this.radius, 0, Math.PI * 2, false);
		window.ctx.fillStyle = this.style;
		window.ctx.fill();
	};

	window.Entity = Entity;
})(window.Vector);
