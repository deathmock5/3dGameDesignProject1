#pragma strict
var timer : float;

function Update () {
	timer -= Time.deltaTime;
	
	if (timer <= 0) {
		Destroy(gameObject);
	}
}