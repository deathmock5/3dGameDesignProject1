#pragma strict
var livesTexture : Texture2D[];

function Start () {

}

function Update () {
	guiTexture.texture = livesTexture[GameController.lives];
}

@script ExecuteInEditMode