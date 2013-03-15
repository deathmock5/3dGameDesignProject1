#pragma strict
/*
This script is responsible for managing all tasks the directly relate to enemy collision.
*/

var player : GameObject;
var powerUp : GameObject;
var getPowerUpSound : GameObject;

  //=====================
 //	Functions
//=====================
function OnTriggerEnter(col : Collider) {
//Will enemies ever collide with one another?
	if (col.gameObject.tag == "Player") {
		this.Kill();
	}
}

function Kill() {
//Reserved for potential special enemy death effects
	Instantiate(powerUp, Vector3(0,0,0), transform.rotation);
	Instantiate(getPowerUpSound, transform.position, transform.rotation);
	
	Destroy(gameObject);
}