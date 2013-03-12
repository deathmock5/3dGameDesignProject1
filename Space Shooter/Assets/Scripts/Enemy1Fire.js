#pragma strict
/*
This script is responsible for firing enemy lasers and managing when enemy lasers can be fired.
*/

var fireFrequency : float;
static var lastShot : float;
var maxLiveLasers : float;
static var numLiveLasers : float;
var enemyLaser : GameObject;
/*
I kept fireFrequency and lastShot from the tutorial series so I could toy with limiting the number of lasers on-screen
by frequency of time, by directly managing the number on-screen, or by using both if I wanted.
*/

function Update () {
	if (Time.time > lastShot + fireFrequency && numLiveLasers < maxLiveLasers) {
		Fire();
	}
}

  //=====================
 //	Functions
//=====================
function Fire() {
//Fires an enemy laser, to adjust enemy laser speed, go to the LaserMovement script
	lastShot = Time.time;
	numLiveLasers++;
	Instantiate(enemyLaser, transform.position, transform.rotation);
}

function DecrementNumLiveLasers() {
//Called by the LaserCollision script just before an enemy laser is destroyed
	numLiveLasers--;
}