(function() 
{
	//	Constructor
	function Vector(elements)
	{
		this.elements;

		if(typeof elements === 'undefined')	//	Empty vector
		{
			this.elements = [];
		}
		else
		{
			this.elements = elements;
		}
	}

	Vector.prototype.e = function(index)
	{
		return this.elements[index];
	};

	Vector.prototype.toString = function() 
	{
		var str = "[ ";
		this.elements.forEach(function(entry)
		{
			str += entry;
			str += " ";
		});
		str += "]";
		return str;
	};

	//	This takes Vectors NOT arrays as a parameter
	Vector.prototype.add = function(vec)
	{
		if(vec.elements.length === this.elements.length)
		{
			var sum = new Vector();
			for(var i = 0; i < this.elements.length; i++)
			{
				sum.elements.push(this.elements[i] + vec.elements[i]);
			}
			return sum;
		}
		else
		{
			return null;
		}
	};

	Vector.prototype.subtract = function(vec)
	{
		if(vec.elements.length === this.elements.length)
		{
			var difference = new Vector();
			for(var i = 0; i < this.elements.length; i++)
			{
				difference.elements.push(this.elements[i] - vec.elements[i]);
			}
			return difference;
		}
		else
		{
			return null;
		}
	};

	Vector.prototype.scale = function(scalar)
	{
		var scaledVec = new Vector();
		for(var i = 0; i < this.size; i++)
		{
			scaledVec.elements.push(scalar * this.elements[i]);
		}

		return scaledVec;
	};

	window.Vector = Vector;
})();
