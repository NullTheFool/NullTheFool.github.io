(function()
{
	//	Constructor
	function Universe()
	{
	}

	//	Universal Constants
	Universe.prototype.G = 3;
	
	//	Universe Entities
	Universe.prototype.entities = [];

	Universe.prototype.update = function()
	{
		for(var i = 0; i < this.entities.length; i++)
		{
			for(var j = 0; j < this.entities.length; j++)
			{
				this.entities[i].fNet = this.entities[i].fNet.add(this.vecGravity(this.entities[i],this.entities[j]));
			}
		}

		for(var k = 0; k < this.entities.length; k++)
		{
			this.entities[k].acc = this.entities[k].acc.add(this.entities[k].fNet);
			this.entities[k].vel = this.entities[k].vel.add(this.entities[k].acc);
			this.entities[k].pos = this.entities[k].pos.add(this.entities[k].vel);
		}
				
	};

	Universe.prototype.draw = function()
	{
		for(var i = 0; i < this.entities.length; i++)
		{
			this.entities[i].draw();
		}
	};

	Universe.prototype.vecGravity = function(e1, e2)
	{
		var vecDisp = this.vecDisplacement(e1, e2);

		var dx = vecDisp.e(0);
		var dy = vecDisp.e(1);

		var fx;
		var fy;

		//	Prevent division by zero, this was not caught by me for a while FML
		if(dx !== 0)
			fx = (this.G * e1.mass * e2.mass) / (dx * dx);
		else
			fx = 0;

		//	Prevent division by zero, this was not caught by me for a while FML
		if(dy !== 0)
			fy = (this.G * e1.mass * e2.mass) / (dy * dy);
		else
			fy = 0;


		return new Vector([fx, fy]);
	};

	Universe.prototype.vecDisplacement = function(e1, e2)
	{
		return e2.pos.subtract(e1.pos);
	}

	window.Universe = Universe;
})();
