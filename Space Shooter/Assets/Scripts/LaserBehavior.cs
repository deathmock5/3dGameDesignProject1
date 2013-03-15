using UnityEngine;
using System.Collections;

public class LaserBehavior : MonoBehaviour {

	// Use this for initialization
    public string owner;
	void Start () {
        this.gameObject.tag = owner + "Laser";
	}

	// Update is called once per frame
	void Update () {
	    
	}

    void OnTriggerEnter(Collider col)
    {
        if(col.gameObject.tag == "Enemy" && this.gameObject.tag == "PlayerLaser")
        {
            Destroy(this.gameObject);
        }
        if (col.gameObject.tag == "boundary")
        {
            Destroy(this.gameObject);
        }
    }
}