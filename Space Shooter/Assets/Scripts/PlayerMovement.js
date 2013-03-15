#pragma strict
/*
This script is responsible for enabling the player directional and managing corresponding actions.
*/

var playerSpeed : float;

function Update () {
	//Move player
	transform.Translate(Input.GetAxisRaw("Horizontal") * Time.deltaTime * playerSpeed, 0, Input.GetAxisRaw("Vertical") * Time.deltaTime * playerSpeed);
}