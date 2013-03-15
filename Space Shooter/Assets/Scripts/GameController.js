#pragma strict
/*
This script is responsible for managing all global game logic.
*/
static var lives : int = 3;
static var score : int;
static var deathPos : Vector3;
static var hasPowerUpSpread : boolean = false;

var player : GameObject;
var guiSkinLivesText : GUISkin;

function Update () {
	
}

function Respawn() {
	yield WaitForSeconds(1);
	Instantiate(player, deathPos, player.transform.rotation);
}

function SetDeathPos(playerPosX : float, playerPosY : float, playerPosZ : float) {
	deathPos = Vector3(playerPosX, playerPosY, playerPosZ);
}

function OnGUI() {
	GUI.skin = guiSkinLivesText;
	GUI.Label(Rect((Screen.width / 2) - (Screen.width / 4), (Screen.height / 2) + ((Screen.height / 8) * 3), guiSkinLivesText.label.fontSize * 5, guiSkinLivesText.label.fontSize), lives.ToString());
}