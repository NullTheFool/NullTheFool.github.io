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
	this.position = new Vector([x,y]);
	
	//	Velocity
	this.velocity = new Vector([0,0]);

	//	Acceleration
	this.acceleration = new Vector([0,0]);

	this.onGround = function()
	{
		if(this.position.elements[1] + this.height >= canvas.height)
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
		if(this.position.elements[0] <= 0)
			return true;
		else
			return false;
	};

	this.onRightWall = function()
	{
		if((this.position.elements[0] + this.width) >= canvas.width)
			return true;
		else
			return false;
	};

	this.update = function()
	{
		//	Directional booleans
		if(this.jump)
			this.velocity.elements[1] = -12;

		if(this.left)
			this.velocity.elements[0] = -4;
		else if(this.right)
			this.velocity.elements[0] = 4;
		else if(!this.left || !this.right)
			this.velocity.elements[0] = 0;

		//	Apply velocity to position
		this.position.add(this.velocity);

		//	Apply acceleration to velocity
		this.velocity.add(this.acceleration);

		//	BOUNDS CHECKING
		if(this.onRightWall())	//	RIGHT BOUND
		{
			this.position.elements[0] = canvas.width - this.width;
		}
		else if(this.onLeftWall())	//	LEFT BOUND
		{
			this.position.elements[0] = 0;
		}
		if(this.onGround())	//	ON THE GROUND
		{
			this.position.elements[1] = canvas.height - this.height;
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
