#pragma strict
/*
This script is responsible for firing player lasers and managing when player lasers can be fired.
*/
var laser : GameObject;
var maxLiveLasers : int;
static var numLiveLasers : int;
static var laserSpread : boolean;

/*
I got rid of the frequency restriction on firing lasers for the player because it made gameplay feel less responsive
without some kind of reloading meter to gauge when to fire again, it also just felt less fun and restricted.
*/

function start() {
	laserSpread = false;
}

function Update () {
	//Only fire if there aren't more lasers than the maximum allowed on-screen
	if (Input.GetButtonDown("Fire1") && numLiveLasers < maxLiveLasers) {
		Fire();
	}
}

  //=====================
 //	Functions
//=====================
function Fire() {
//Increments the number of live lasers and fires a player laser based on their power up
//To adjust laser speed, go to the LaserMovement script
	numLiveLasers++;
	
	//Always fires 1 laser straight ahead
	var singleLaser :Instantiate(laser, transform.position, transform.rotation);
	
	//If laser spread power up obtained, fire 2 extra lasers
	if (laserSpread == true) {
		Instantiate(laser, transform.position, Quaternion.Euler(Vector3(0,-20, 0)));
		Instantiate(laser, transform.position, Quaternion.Euler(Vector3(0, 20, 0)));
	}
}

function PowerUpLaserSpread(bool) {
//laserSpread mutator. Called by the PowerUpManager.
	laserSpread = bool;
}

function DecrementNumLiveLasers() {
//Called by the LaserCollision script just before a player laser is destroyed
	numLiveLasers--;
}