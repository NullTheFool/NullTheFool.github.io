(function(Vector) 
{
	//	Constructor Function
	function Entity(x, y, width, height, mass)
	{
		//	Size variables
		this.width = width;
		this.height = height;
		this.mass = mass;
		this.style = "#FFffFF";
		
		//	Position
		this.pos = new Vector([x,y]);
		
		//	Velocity
		this.vel = new Vector([0,0]);

		//	Acceleration
		this.acc = new Vector([0,0]);

		//	Net Force
		this.fNet = new Vector([0,0]);
	}


	Entity.prototype.draw = function()
	{
		window.ctx.fillStyle = this.style;
		window.ctx.fillRect(this.pos.e(0), this.pos.e(1), this.width, this.height);
	};

	window.Entity = Entity;
})(window.Vector);
