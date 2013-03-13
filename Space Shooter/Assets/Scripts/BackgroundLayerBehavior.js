#pragma strict
/*
This script is responsible for scrolling the textures on the background layer planes.
*/

var scrollSpeed : float;

function Update () {
	renderer.material.SetTextureOffset("_MainTex", Vector2(0,Time.time * scrollSpeed) );
}