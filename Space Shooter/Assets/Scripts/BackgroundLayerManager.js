#pragma strict
/*
This script is responsible for managing backgrounds and their child layers.
*/
var level : int;
var scrollSpeedLayerBottom : float;
var scrollSpeedLayerMiddle : float;
var scrollSpeedLayerTop : float;

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
function BackgroundBehavior(level : int, scrollSpeedLayerBottom : float, scrollSpeedLayerMiddle : float, scrollSpeedLayerTop : float) {
	this.level = level;
	this.scrollSpeedLayerBottom = scrollSpeedLayerBottom;
	this.scrollSpeedLayerMiddle = scrollSpeedLayerMiddle;
	this.scrollSpeedLayerTop = scrollSpeedLayerTop;
}