(function() {


	function draw(plant) {
		ctx.fillStyle = 'green'; 
	    ctx.fillRect(plant.x, plant.y, plant.size, plant.size);
	}

	function render() {
    	requestAnimationFrame(render);
    	for (var id in plants) {
    		var plant = plants[id];
    		grow(plant);
			draw(plant);
			kill(plant);
    	}
	}

	// Objects 
	var id = 0;
	var plants = {};

	function Plant(x, y) {
		this.x = x;
		this.y = y;
		this.size = 2;
	}

	function seed(x, y) {
		var p = new Plant(x, y);
		p.id = ++id;
		plants[id] = p;
	}

	function grow(plant) {
		var growth = 15;
		plant.x += growth/2 - Math.random()*growth;
		plant.y += growth/2 - Math.random()*growth;
	}

	function kill(plant) {
		if (plant.x > window.innerWidth 
			|| plant.y > window.innerHeight
			|| plant.x < 0 
			|| plant.y < 0 ) 
		{
			var id = plant.id;
			delete plants[id];
		}
	}


	canvas.addEventListener('click', function(e) {
		var x = e.clientX;
		var y = e.clientY;
		seed(x, y);
	});



})();