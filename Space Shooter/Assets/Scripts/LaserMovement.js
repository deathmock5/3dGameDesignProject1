#pragma strict
/*
This script is responsible for moving live lasers.
*/

var laserSpeed : float;

function Update () {
	transform.Translate(0,0,laserSpeed * Time.deltaTime);
}