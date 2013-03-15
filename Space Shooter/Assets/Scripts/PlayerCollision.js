#pragma strict
/*
This script is responsible for managing all tasks the directly relate to player collision.
*/
var explosion : GameObject;
var explosionSound : GameObject;
var playerDeathEffect : GameObject;
var invinceDelay : float;
private var spawnTime : float;

function Awake() {
	spawnTime = Time.time;
}

  //=====================
 //	Functions
//=====================
function OnTriggerEnter(col : Collider) {
	//Player colliding with enemies
	if (Time.time > spawnTime + invinceDelay) {
		if (col.gameObject.tag == "enemy") {
			this.Kill();
		}
	}
	
	//Player colliding with enemy lasers
	if (Time.time > spawnTime + invinceDelay) {
		if (col.gameObject.tag == "enemyLaser") {
			this.Kill();
		}
	}
	
	//Player colliding with boundaries
	if (col.gameObject.tag == "boundary") {
		//if the boundary is centered on the x-axis, that means it intersects the z-axis and is a z-axis boundary
		if (col.gameObject.transform.position.x == 0)
			transform.position.z = col.gameObject.transform.position.z;
		//if the boundary is centered on the z-axis, that means it intersects the x-axis and is a x-axis boundary
		if (col.gameObject.transform.position.z == 0)
			transform.position.x = col.gameObject.transform.position.x;
	}
}

public function Kill() {
//Destroy player and create player death effect
	//Create explosion graphic and sound
	explosion = Instantiate(explosion, transform.position, transform.rotation);
	Instantiate(explosionSound, transform.position, transform.rotation);
	Instantiate(playerDeathEffect, transform.position, transform.rotation);
	
	//Apply laser's velocity to the explosion
	explosion.particleSystem.rigidbody.velocity = transform.TransformDirection(Vector3.back);
	
	//Subtract 1 life and respawn if any lives are remaining
	GameController.lives -= 1;
	if (GameController.lives > 0) {
		GameObject.Find("GameController").GetComponent(GameController).Respawn();
		GameObject.Find("GameController").GetComponent(GameController).SetDeathPos(transform.position.x, transform.position.y, transform.position.z);
	}
	
	Destroy(gameObject);
}