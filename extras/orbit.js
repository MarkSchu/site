(function() {
	

	function draw(particle) {
		ctx.fillStyle = 'red';
		ctx.fillRect(particle.x, particle.y, 1, 1);
	}

	function render() {

		requestAnimationFrame(render);
		//ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
		for (var id in bodies) {
			var p = bodies[id];
			accelerate(p);
		}

		for (var id in bodies) {
			var p = bodies[id];
			move(p);
			draw(p);
			//kill(p);
		}
	}

	render();

	// objects
	var id = 0;
	var bodies = {};
	var planets = {};

	function Planet(x, y) {
		this.x = x;
		this.y = y;
		this.dx = 1 - Math.random() * 2;
		this.dy = 1 - Math.random() * 2;
	}

	function Sun(x, y) {
		this.x = x;
		this.y = y;
	}


	function createPlanet(x, y) {
		var planet = new Planet(x, y);
		bodies[++id] = planet;
	}

	function createSun(x, y) {
		var sun = new Sun(x, y);
		bodies[++id] = sun;
	}

	function getDistance(a, b) {
		var u = a.x - b.x;
		var v = a.y - b.y;
		var dis = Math.sqrt((u*u) + (v*v));
	  	return dis;
	}

	function getDirection(a, b) {
		return {
			x : b.x - a.x,
			y : b.y - a.y
		}
	}

	function getForce(p1) {

		var force = {x:0, y:0};

		for (var id in bodies) { 
			if (bodies[id] != p1) {
				var p2 = bodies[id];
				var distance = getDistance(p1, p2);
				var direction = getDirection(p1, p2);
				if (distance <= 100) {
					force.x -= (1 / distance) * direction.x * 0.1;
					force.y -= (1 / distance) * direction.y * 0.1;
				} else {
					force.x += (1 / distance) * direction.x * 0.01;
					force.y += (1 / distance) * direction.y * 0.01;
				}
				
			}
		}

		return force;
	}

	function calculateForce() {

	}


	function accelerate(p) {
		var force = getForce(p);
		p.dx += force.x;
		p.dy += force.y;
	}

	function move(p) {
		p.x += p.dx;
		p.y += p.dy;
	}

	function kill (particle) {
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
		createPlanet(x, y);
	});


})();