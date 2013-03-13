#pragma strict
/*
This script is responsible for managing the collision of power ups.
*/
var player : GameObject;
var powerUpSound : GameObject;

  //=====================
 //	Functions
//=====================
function OnTriggerEnter(col : Collider) {
//Main Collision Trigger
	if (col.gameObject.tag == "Player") {
		//Activate power up, make sound effect and destroy power up
		player.GetComponent(PlayerPowerUpManager).ActivatePowerUp(1);
		Instantiate(powerUpSound, transform.position, transform.rotation);
		Destroy(gameObject);
	}
}