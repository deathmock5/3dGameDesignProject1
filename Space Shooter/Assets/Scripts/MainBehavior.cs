using UnityEngine;
using System.Collections;

public class MainBehavior : MonoBehaviour {

    public GameObject PLAYER_PREFAB;
    public GameObject ENEMY_SPACEGARBAGE;
    public GameObject ENEMY_BASIC;
    public GameObject ENEMY_MIRROR;
    public GameObject ENEMY_SCOUT_PREFAB;
    public GameObject POWERUP_SPREAD;
    public GameObject POWERUP_FORK;
    public GameObject POWERUP_CHARGE;
    public GameObject POWERUP_RAPID;
    public GameObject POWERUP_PERSIST;

    public float layerOfPlaying = 1.24f;
    //private
    private int level = 1;
    private int number_of_enemys_alive = 0;
    private int enemysKilledThisLevel = 0;
    
	// Use this for initialization
	void Start () {
        Instantiate(PLAYER_PREFAB, new Vector3(0, layerOfPlaying, 0), Quaternion.identity);
        //TODO: 
	}
	
	// Update is called once per frame
	void Update () {
        if (number_of_enemys_alive < level * 20 / 2)
        {
            SpawnEnemy();
            number_of_enemys_alive++;
        }
	}

    /// <summary>
    /// Called when an enemy is in the process of dieing
    /// </summary>
    public void EnemyIsDieng()
    {
        //TODO: Poweup spawn randomization
        number_of_enemys_alive--;
        enemysKilledThisLevel++;
    }

    /// <summary>
    /// Called when a new enemy is needed
    /// </summary>
    void SpawnEnemy()
    {
        //TODO: spawn diffrent types of enemys
        Instantiate(ENEMY_BASIC, new Vector3(Random.Range(-2.4f,2.4f), layerOfPlaying, 2.5f), Quaternion.identity);
    }
}
