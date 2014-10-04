function Square(x, y, width, height)
{
	//	Size variables
	this.width = width;
	this.height = height;
	this.style = "#FFffFF";
	
	//	Direction variables
	this.left = false;
	this.right = false;
	this.jump = false;

	//	Position
	this.pos = new Vector([x,y]);
	
	//	Velocity
	this.vel = new Vector([0,0]);

	//	Acceleration
	this.acc = new Vector([0,0]);

	this.onGround = function()
	{
		if(this.pos.els[1] + this.height >= canvas.height)
		{
			return true;
		}
		else
		{
			return false;
		}
	};

	this.onLeftWall = function()
	{
		if(this.pos.els[0] <= 0)
			return true;
		else
			return false;
	};

	this.onRightWall = function()
	{
		if((this.pos.els[0] + this.width) >= canvas.width)
			return true;
		else
			return false;
	};

	this.update = function()
	{
		//	Directional booleans
		if(this.jump)
			this.vel.els[1] = -12;

		if(this.left)
			this.vel.els[0] = -4;
		else if(this.right)
			this.vel.els[0] = 4;
		else if(!this.left || !this.right)
			this.vel.els[0] = 0;

		//	Apply velocity to position
		this.pos.add(this.vel);

		//	Apply acceleration to velocity
		this.vel.add(this.acc);

		//	BOUNDS CHECKING
		if(this.onRightWall())	//	RIGHT BOUND
		{
			this.pos.els[0] = canvas.width - this.width;
		}
		else if(this.onLeftWall())	//	LEFT BOUND
		{
			this.pos.els[0] = 0;
		}
		if(this.onGround())	//	ON THE GROUND
		{
			this.pos.els[1] = canvas.height - this.height;
		}
	};

	this.randRGB = function()
	{
		return "rgb("+
				Math.floor(Math.random() * 256) + "," +
				Math.floor(Math.random() * 256) + "," +
				Math.floor(Math.random() * 256) + ")";
	};

	//	Default function, to give drawing capabilities must apply draw from main
	this.draw = function()
	{
		console.log("No context has been defined");
	};
}
