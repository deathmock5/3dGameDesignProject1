#pragma strict
/*
This script is responsible for managing all tasks the directly relate to laser collision.
This is where the bulk of our collision detection will take place.
*/
var player : GameObject;
var enemy1 : GameObject;
var explosion : GameObject;
var explosionSound : GameObject;

  //=====================
 //	Functions
//=====================
function OnTriggerEnter(col : Collider) {
//Main Collision Trigger
	//Enemy laser collides with player
	if (gameObject.tag == "enemyLaser" && col.gameObject.tag == "Player") {
		//Create explosion graphic and sound
		explosion = Instantiate(explosion, transform.position, transform.rotation);
		//Apply laser's velocity to the explosion
		explosion.particleSystem.rigidbody.velocity = transform.TransformDirection(Vector3.back);
		Instantiate(explosionSound, transform.position, transform.rotation);
		
		//Kill player
		col.gameObject.GetComponent(PlayerCollision).Kill();
		
		//Just before destroying the laser, decrement the number of live player lasers so enemy firing works properly
		//in the event that the player has more than 1 life remaining
		Destroy(gameObject);
	}
	
	//Player's laser collides with enemy1
	if (gameObject.tag == "laser" && col.gameObject.tag == "enemy") {
		//Create explosion graphic and sound
		explosion = Instantiate(explosion, transform.position, transform.rotation);
		//Apply laser's velocity to the explosion
		explosion.particleSystem.rigidbody.velocity = transform.TransformDirection(Vector3.forward);
		Instantiate(explosionSound, transform.position, transform.rotation);
		
		//Kill enemy
		col.gameObject.GetComponent(EnemyBehavior).Kill();
		
		Destroy(gameObject);
	}
	
	//Boundary collides with...
	if (col.gameObject.tag == "boundary") {
		//Player's laser
		if (gameObject.tag == "laser") {

			Destroy(gameObject);
		}
		
		//Enemy laser
		if (gameObject.tag == "enemyLaser") {

			Destroy(gameObject);
		}
	}	
}