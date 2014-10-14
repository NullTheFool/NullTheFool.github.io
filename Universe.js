(function()
{
	//	Constructor
	function Universe()
	{
	}

	//	Universal Constants
	Universe.prototype.G = 0.005;
	
	//	Universe Entities
	Universe.prototype.entities = [];

	Universe.prototype.update = function()
	{
		for(var i = 0; i < this.entities.length; i++)
		{
			for(var j = 0; j < this.entities.length; j++)
			{
				var fG = this.vecGravity(this.entities[i],this.entities[j]);
				this.entities[i].fNet = this.entities[i].fNet.add(fG);
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
		var fMag;
		var fDir = this.vecDisplacement(e1,e2).normalize();
		var r = this.vecDisplacement(e1,e2).mag();

		if(r === 0)
			fMag = 0;
		else
			fMag = ((this.G * e1.mass * e2.mass)/(r*r));

		return fDir.scale(fMag);
	};

	Universe.prototype.vecDisplacement = function(e1, e2)
	{
		return e2.pos.subtract(e1.pos);
	}

	window.Universe = Universe;
})();
