#pragma strict
/*
This script is responsible for managing all obtained power ups.
*/
var laserSpreadDuration : int;
private var laserSpreadTimer : int;

function Start() {
	RemoveAllPowerUps();
}

function Update() {
//Update Timers
	//Laser Spread
	laserSpreadTimer = UpdateTimer(laserSpreadDuration, laserSpreadTimer);
	
//Update related scripts when power up status changes
	//Laser Spread
	if (laserSpreadTimer > 0)
		gameObject.GetComponent(PlayerLaserFire).PowerUpLaserSpread(true);
	else
		gameObject.GetComponent(PlayerLaserFire).PowerUpLaserSpread(false);
}

  //=====================
 //	Functions
//=====================
function UpdateTimer(duration : int, timer : int) {
//Generic timer update function. 
	if (timer > 0)
		timer++;
	if (timer >= duration)
		timer = 0;
	return timer;
}

function ActivatePowerUp(PUIndex : int) {
//Generic power up activation function.
//1: laserSpread
	switch (PUIndex)
	{
	case 1:
		laserSpreadTimer = 1;
		break;
	default:
		break;
	}
}

function RemoveAllPowerUps() {
	laserSpreadTimer = 0;
}