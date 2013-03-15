#pragma strict
/*
This script is responsible for firing enemy lasers and managing when enemy lasers can be fired.
*/

var fireFrequency : float;
static var lastShot : float;
var enemyLaser : GameObject;
/*
I kept fireFrequency and lastShot from the tutorial series so I could toy with limiting the number of lasers on-screen
by frequency of time, by directly managing the number on-screen, or by using both if I wanted.
*/

function Update () {
	if (Time.time > lastShot + fireFrequency) {
		Fire();
	}
}

  //=====================
 //	Functions
//=====================
function Fire() {
//Fires an enemy laser
	lastShot = Time.time;
	Instantiate(enemyLaser, transform.position, transform.rotation);
}