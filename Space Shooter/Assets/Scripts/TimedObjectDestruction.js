#pragma strict
var timer : float;
private var timerTicks : float;

function Start () {
	
}

function Update () {
	timerTicks++;
	
	if (timerTicks >= timer)
		Destroy(gameObject);
}