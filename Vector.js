function Vector(elements)
{
	this.els;
	this.size;

	if(elements === undefined)	//	Empty vector
	{
		this.els = [];
		this.size = 0;
	}
	else
	{
		this.els = elements;
		this.size = elements.length;
	}

	this.print = function()
	{
		this.els.forEach(function(entry)
				{
					console.log(entry);
				});
	};

	this.add = function(vec)
	{
		if(vec.size !== this.size)
		{
			return "Error?";	//	What do I return in this case?
		}
		else
		{
			var sum = new Vector();
			for(var i = 0; i < this.size; i++)
			{
				sum.els.push(this.els[i] + vec.els[i]);
			}
			this.els =  sum.els;
		}
	};

	this.subtract = function(vec)
	{
		if(vec.size !== this.size)
		{
			return;	//	What do I return in this case?
		}
		else
		{
			var difference = new Vector();
			for(var i = 0; i < this.size; i++)
			{
				difference.els.push(this.els[i] - vec.els[i]);
			}
			this.els = difference.els;;
		}
	};

	this.scale = function(scalar)
	{
		for(var i = 0; i < this.size; i++)
		{
			this.els[i] *= scalar;
		}
	};
}
