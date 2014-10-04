function Vector(els)
{
	if(els === undefined)	//	Empty vector
	{
		this.elements = [];
		this.size = 0;
	}
	else
	{
		this.elements = els;
		this.size = els.length;
	}

	this.print = function()
	{
		this.elements.forEach(function(entry)
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
				sum.elements.push(this.elements[i] + vec.elements[i]);
			}
			this.elements =  sum.elements;
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
				difference.elements.append(this.elements[i] - vec.elements[i]);
			}
			this.elements = difference.elements;;
		}
	};

	this.scale = function(scalar)
	{
		for(var i = 0; i < this.size; i++)
		{
			this.elements[i] *= scalar;
		}
	};
}
