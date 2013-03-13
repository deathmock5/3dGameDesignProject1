#pragma strict
/*
This script is responsible for managing all tasks the directly relate to enemy collision.
*/

var player : GameObject;
var explosion : GameObject;
var explosionSound : GameObject;

  //=====================
 //	Functions
//=====================
function OnTriggerEnter(col : Collider) {
//Will enemies ever collide with one another?

}

function Kill() {
//Reserved for potential special enemy death effects

	Destroy(gameObject);
}