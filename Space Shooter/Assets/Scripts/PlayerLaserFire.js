#pragma strict
/*
This script is responsible for firing player lasers and managing when player lasers can be fired.
*/
var laser : GameObject;
var cooldownRate : float = 1.0;
var maxTemperature : float = 2.0;
var firingHeatCost : float = 0.7;
private var heatGaugeTemperature : float = 0.0;
private var overheated : boolean = false;

function Update () {
	this.UpdateHeatGauge();
	
	//Only fire if not overheated
	if (Input.GetButtonDown("Fire1") && !this.overheated) {
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
//Increments the number of live lasers and fires a player laser based onSS their power up
//To adjust laser speed, go to the LaserMovement script
	this.heatGaugeTemperature += this.firingHeatCost;
	
	Instantiate(laser, transform.position, transform.rotation);
	
	//If laser spread power up obtained, fire 2 extra lasers
	if (GameController.hasPowerUpSpread) {
		Instantiate(laser, transform.position, Quaternion.Euler(Vector3(0,-20, 0)));
		Instantiate(laser, transform.position, Quaternion.Euler(Vector3(0, 20, 0)));
	}
}