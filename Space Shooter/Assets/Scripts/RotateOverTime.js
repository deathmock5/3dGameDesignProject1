#pragma strict
var speed : float;

function Start () {

}

function Update () {
// Slowly rotate the object around its X axis at 1 degree/second.
    transform.Rotate(Vector3.up * Time.deltaTime * speed);
}