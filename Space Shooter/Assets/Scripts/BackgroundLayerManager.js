#pragma strict
/*
This script is responsible for managing backgrounds and their child layers.

//Level 1
//Top Speed: 0.08
//Middle Speed: 0.06
//Bottom Speed: 0.05

//Level 2
//Top Speed: Hide
//Middle Speed: 0.2
//Bottom Speed: 0.1

//Level 3
//Top Speed: 
//Middle Speed: 
//Bottom Speed: 

//Level 4
//Top Speed: 
//Middle Speed: 
//Bottom Speed: 0.0025
//Top Extra Speed: 0.0025
//Top Extra Rotate Speed: 30
//Bottom Tiling y: 0.5
//Middle, Top, and Top Extra Y Position: 1.25

//Level 5
//Top Speed: 
//Middle Speed: 
//Bottom Speed: 

//Level 6
//Top Speed: 
//Middle Speed: 
//Bottom Speed: 

*/
var level : int;
var textureLayerTop : GameObject;
var textureLayerMiddle : GameObject;
var textureLayerBottom : GameObject;
var scrollSpeedLayerTop : float;
var scrollSpeedLayerMiddle : float;
var scrollSpeedLayerBottom : float;

  //=====================
 //Init & Update
//=====================
function Start() {
	
}

function Update() {
	
}

  //=====================
 //	Functions
//=====================
function BackgroundBehavior(lvl : int, ssTop : float,ssMiddle : float,  ssBottom : float, texTop : GameObject, texMid : GameObject,  texBottom : GameObject) {
	this.level = lvl;
	this.textureLayerTop = texTop;
	this.textureLayerMiddle = texMid;
	this.textureLayerBottom = texBottom;
	this.scrollSpeedLayerTop = ssTop;
	this.scrollSpeedLayerMiddle = ssMiddle;
	this.scrollSpeedLayerBottom = ssBottom;
}