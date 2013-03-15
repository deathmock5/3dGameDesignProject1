#pragma strict
/*
This script is responsible for managing all tasks the directly relate to laser collision.
This is where the bulk of our collision detection will take place.
*/
var player : GameObject;
var enemy1 : GameObject;

  //=====================
 //	Functions
//=====================
function OnTriggerEnter(col : Collider) {
//Main Collision Trigger
	//Enemy laser collides with player
	if (col.gameObject.tag == "Player") {	
		Destroy(gameObject);
	}
	
	//Boundary collides with...
	if (col.gameObject.tag == "boundary") {		
		Destroy(gameObject);
	}	
}