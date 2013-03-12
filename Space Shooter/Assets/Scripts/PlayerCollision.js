#pragma strict
/*
This script is responsible for managing all tasks the directly relate to player collision.
*/

var playerDeathEffect : GameObject;

  //=====================
 //	Functions
//=====================
function OnTriggerEnter(col : Collider) {
//Player colliding with boundaries
if (col.gameObject.tag == "boundary") {
	//if the boundary is centered on the x-axis, that means it intersects the z-axis and is a z-axis boundary
	if (col.gameObject.transform.position.x == 0)
		transform.position.z = col.gameObject.transform.position.z;
	//if the boundary is centered on the z-axis, that means it intersects the x-axis and is a x-axis boundary
	if (col.gameObject.transform.position.z == 0)
		transform.position.x = col.gameObject.transform.position.x;
}

//Player colliding with powerups

//Player colliding with enemies

}

public function Kill() {
//Destroy player and create player death effect
	Instantiate(playerDeathEffect, transform.position, transform.rotation);
	
	Destroy(gameObject);
}