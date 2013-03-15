using UnityEngine;
using System.Collections;

public class Enemy_basic_Behavior : MonoBehaviour {
    public GameObject EXPLOSION_PREFAB;
    public GameObject EXPLOSIONSOUND_PREFAB;
    public GameObject LASER_PREFAB;

    float firefrequency = 1.0f;
    float lastshot;
	// Use this for initialization
	void Start () {
	    //TODO:set tag information and instantation
	}
	
	// Update is called once per frame
	void Update () {
        if (Time.time > lastshot + firefrequency)
        {
            Fire();
        }
	}

    void OnTriggerEnter(Collider col)
    {
        if (col.gameObject.tag == "Player")
        {
            this.Kill(true,true);
        }
        if (col.gameObject.tag == "PlayerLaser") {
             this.Kill(true,false);
        }
    }

    void Kill(bool wasplayer,bool hitbyplayer)
    {
        if (wasplayer)
        {
            if (hitbyplayer)
            {
                //TODO: damage player
            }
            //TODO: Handle the player gaining points
        }
        GameObject.Find("GameObjectMain").GetComponent<MainBehavior>().EnemyIsDieng();
        Instantiate(EXPLOSION_PREFAB, transform.position, transform.rotation);
        Instantiate(EXPLOSIONSOUND_PREFAB, transform.position, transform.rotation);
        Destroy(gameObject);
    }

    void Fire()
    {
        //Fires an enemy laser
        lastshot = Time.time;
        Instantiate(LASER_PREFAB, transform.position, transform.rotation);
    }
}