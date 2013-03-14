#pragma strict
/*
This script is responsible for controlling the movement patterns of enemy1.
*/

var initPosition : Vector3;
var enemySpeed : Vector2;
var bounceRange : float;
private var leftBoundX : float;
private var rightBoundX : float;

function Start() {
	initPosition = transform.position;
	leftBoundX = initPosition.x - bounceRange / 2;
	rightBoundX = initPosition.x + bounceRange / 2;
}

function Update() {
	//Bounce off left and right bounds, move forward and invert enemySpeed
	if (transform.position.x < leftBoundX) {
		transform.position.x = leftBoundX;
		transform.position.z -= enemySpeed.y;
		enemySpeed.x *= -1;		
	}
	if (rightBoundX < transform.position.x) {
		transform.position.x = rightBoundX;
		transform.position.z -= enemySpeed.y;
		enemySpeed.x *= -1;
	}
	
	//Move enemy1 by enemySpeed along the x-axis
	transform.position.x += enemySpeed.x;
}

  //=====================
 //	Functions
//=====================
