#pragma strict
var player : GameObject;
var timer : float;

function Awake() {
	GameController.hasPowerUpSpread = true;
}

function Update () {
	timer -= Time.deltaTime;
	
	if (timer <= 0) {
		GameController.hasPowerUpSpread = false;
		Destroy(gameObject);
	}
}