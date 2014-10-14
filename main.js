//	Canvas and context
var canvas,
	ctx,
	univ;

//	Entity variables for testing
	var e1,
		e2;

//	Grid variables
var TILE_S = 32,
	COLS = 32,
	ROWS = 16;

//	Initializes canvas and actors
function init()
{
	//	Initialize the canvas and context
	canvas = document.createElement("canvas");
	window.ctx = canvas.getContext("2d");
	canvas.width = TILE_S * COLS;
	canvas.height = TILE_S * ROWS;
	canvas.setAttribute("tabIndex", "0");
	canvas.focus();

	//	Adding canvas to div element in body
	document.getElementById("canvas").appendChild(canvas);

	//	Universe object initialized
	univ = new Universe();

	e1 = new Entity(512, 128, 16, 16, 5, "#FFffFF");
	e2 = new Entity(720, 128, 16, 16, 2, "#55aaFF");

	//	Initialize objects here
	univ.entities.push(e1);
	univ.entities.push(e2);
}

//	Main game loop
function loop()
{
	updateAll();
	drawAll();
	window.requestAnimationFrame(loop);
}

//	Update the univ object
function updateAll()
{
	univ.update();
}

//	Draws background and universe
function drawAll()
{	
	//	Draw background
	ctx.fillStyle = "black";
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	//	Draw the universe
	univ.draw();
}

//	Starting point for program
function main()
{
	init();
	loop();
}

main();
