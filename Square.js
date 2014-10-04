function Square(x, y, width, height)
{
	//	Size variables
	this.width = width;
	this.height = height;

	//	Position
	this.position = new Vector([x,y]);
	
	//	Velocity
	this.velocity = new Vector([0,0]);

	//	Acceleration
	this.acceleration = new Vector([0,0]);

	this.onGround = function()
	{
		if(this.position.elements[1] + this.height >= canvas.height)
			return true;
		else
			return false;
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

	//	Default function, to give drawing capabilities must apply draw from main
	this.draw = function()
	{
		console.log("No context has been defined");
	};
}
