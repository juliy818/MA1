class world extends Phaser.Scene {
  constructor() {
    super({
      key: "world",
    });

    // Put global variable here
  }

  preload() {
    // Step 1, load JSON
   
    this.load.tilemapTiledJSON("world", "assets/map3.tmj");
    this.load.image("forestimg2", "assets/forest_tiles.png");
    this.load.image("ghost", "assets/ghost.png");
    
 
  }

  create() {
    console.log("*** world scene");

    //Step 3 - Create the map from main
    //let map = this.make.tilemap({ key: "world1" });
    let map = this.make.tilemap({ key : "world"});


    // Step 4 Load the game tiles
    // 1st parameter is name in Tiled,
    // 2nd parameter is key in Preload
    //let forestTiles = map.addTilesetImage("Example_forest", "forestimg");
    let forestTiles2 = map.addTilesetImage("forest_tiles", "forestimg2");
    

    // Step 5  create an array of tiles
    let tilesArray = [
        forestTiles2

    ];

    // Step 6  Load in layers by layers
     this.groundlayer = map.createLayer("groundlayer", tilesArray,0,0);
    this.holeLayer = map.createLayer("holelayer",tilesArray,0,0)
    this.riverLayer = map.createLayer("riverLayer", tilesArray,0,0);
    
    
    var startPoint = map.findObject("ObjectLayer",(obj) => obj.name === "start");
    //console.log(startPoint.x, startPoint.y)
    
    this.player = this.physics.add.sprite(startPoint.x, startPoint.y, 'mc');
    this.player.body.setSize(this.player.width * 0.5,this.player.height ).setOffset(16,0)
    window.player = this.player
    
  
    // Add time event / movement here


 // set bounds so the camera won't go outside the game world
  this.physics.world.bounds.width = this.groundlayer.width;
  this.physics.world.bounds.height = this.groundlayer.height;


    // Add time event / movement here

    // get the tileIndex number in json, +1
    // this.mapLayer.setTileIndexCallback(11, this.room1, this);

    // Add custom properties in Tiled called "mouintain" as bool

    // What will collider witg what layers
    this.player.setCollideWorldBounds(true)
    this.riverLayer.setCollisionByExclusion(-1,true)
    this.physics.add.collider(this.riverLayer, this.player);

    

   
    // create the arrow keys
    this.cursors = this.input.keyboard.createCursorKeys();
    // this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
    this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);

    // make the camera follow the player
    this.cameras.main.startFollow(this.player);
   
    // set background color, so the sky is not black
    this.cameras.main.setBackgroundColor("#ccccff");

    //enemy

    this.time.addEvent({
     delay: 0,
     callback: this.moveDownUp1,
     callbackScope: this,
    loop: false,
    });



    this.ghost1 = this.physics.add.sprite(381, 196, "ghost")
    this.ghost1.body.setSize(this.ghost1.width*1,this.ghost1.height*1)
    this.physics.add.overlap(this.player, this.ghost1,this.overlap,null,this);

    this.ghost2 = this.physics.add.sprite(1016, 246, "ghost")
    this.ghost1.body.setSize(this.ghost1.width*1,this.ghost1.height*1)
    this.physics.add.overlap(this.player, this.ghost1,this.overlap,null,this);
 


    // camera follow player
    // this.cameras.main.startFollow(this.player);
  } /////////////////// end of create //////////////////////////////

  update() { 
    if (this.cursors.left.isDown) {
      this.player.body.setVelocityX(-300);
      this.player.anims.play("left", true); // walk left
    } else if (this.cursors.right.isDown) {
      this.player.body.setVelocityX(300);
      this.player.anims.play("right", true);
    } else if (this.cursors.up.isDown) {
      this.player.body.setVelocityY(-300);
      this.player.anims.play("up", true);
      //console.log('up');
    } else if (this.cursors.down.isDown) {
      this.player.body.setVelocityY(300);
      this.player.anims.play("down", true);
      //console.log('down');
    } else {
      this.player.anims.stop();
      this.player.body.setVelocity(0, 0);
    }
     if (
      this.player.x > 991&&
      this.player.x < 1055 &&
      this.player.y > 450 &&
      this.player.y < 540
    ) {
      console.log("jump to room1")
      this.room1();
    }

} /////////////////// end of update //////////////////////////////
overlap(){



  console.log("enemy overlap player")
// lose a life



  //shake the camera
  this.cameras.main.shake(20);
//play a sound
}
moveDownUp1() {

    console.log("moveDownUp");

    this.tweens.timeline({

    targets: this.ghost1,

    ease: "Linear",

    loop: -1, // loop forever

    duration: 2500,

    tweens: [

      {

        y: 196,

      },

      {

        y: 420

      },

    ],

  });

}
moveDownUp2() {

  console.log("moveDownUp");

  this.tweens.timeline({

  targets: this.ghost2,

  ease: "Linear",

  loop: -1, // loop forever

  duration: 2500,

  tweens: [

    {

      y: 246,

    },

    {

      y: 441

    },

  ],

});

}

room1(player, tile) {
  console.log("room1 function");
  this.scene.start("room1");
}

 //////////// end of class world ////////////////////////
}
