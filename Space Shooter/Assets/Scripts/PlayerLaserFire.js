#pragma strict
/*
This script is responsible for firing player lasers and managing when player lasers can be fired.
*/
var laser : GameObject;
var cooldownRate = 1.0;
var maxTemperature = 2.0;
var firingHeatCost = 0.7;
private var laserSpread = false;
private var heatGaugeTemperature = 0.0;
private var overheated = false;

function start() {
}

function Update () {

	this.UpdateHeatGauge();
	
	//Only fire if not overheated
	if (Input.GetButtonDown("Fire1") && this.overheated == false) {
		this.Fire();
	}
	
}

  //=====================
 //	Functions
//=====================
function UpdateHeatGauge() {
	if (this.heatGaugeTemperature < 0) {
		this.heatGaugeTemperature = 0;
		this.overheated = false;
	} else if (this.heatGaugeTemperature > 0) {
		this.heatGaugeTemperature -= this.cooldownRate * Time.deltaTime;
	} 
	if (heatGaugeTemperature > maxTemperature) {
		this.heatGaugeTemperature -= this.cooldownRate * Time.deltaTime;
		this.overheated = true;
	}	
}

function Fire() {
//Increments the number of live lasers and fires a player laser based on their power up
//To adjust laser speed, go to the LaserMovement script
	this.heatGaugeTemperature += this.firingHeatCost;
	
	Instantiate(laser, transform.position, transform.rotation);
	
	//If laser spread power up obtained, fire 2 extra lasers
	if (laserSpread == true) {
		Instantiate(laser, transform.position, Quaternion.Euler(Vector3(0,-20, 0)));
		Instantiate(laser, transform.position, Quaternion.Euler(Vector3(0, 20, 0)));
	}

}

function PowerUpLaserSpread(someBoolean : boolean) {
//laserSpread mutator. Called by the PowerUpManager.
	this.laserSpread = someBoolean;
}
