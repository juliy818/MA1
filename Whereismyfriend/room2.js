class room2 extends Phaser.Scene {

    constructor() {
        super({ key: 'room2' });
        
        // Put global variable here
    }


    init(data) {
        this.player = data.player
        this.inventory = data.inventory
    }

    preload() {    
    this.load.tilemapTiledJSON("room2", "assets/room2.tmj");
    this.load.image("pippoyaPNG2", "assets/pipoya.png");


    }

    create() {
        console.log('*** room2 scene');
        let map = this.make.tilemap({ key: "room2" });

        let pippoyaTiles = map.addTilesetImage("pipoya", "pippoyaPNG2");
    
        let tilesArray = [pippoyaTiles];
        // this.objectLayer = map.createLayer("objectLayer", tilesArray, 0, 0);
        
        this.floorLayer = map.createLayer("floorLayer", tilesArray, 0, 0);
        this.wallLayer = map.createLayer("wallLayer", tilesArray, 0, 0);
        this.objectLayer = map.createLayer("objectLayer", tilesArray, 0, 0);
        // this.testLayer = map.createLayer("testLayer", tilesArray, 0, 0);
        
        this.physics.add.collider(this.wallLayer, this.player);
    
        //this.physics.world.bounds.width = this.groundLayer.width;
        //this.physics.world.bounds.height = this.groundLayer.height;
    
        this.player = this.physics.add.sprite(300, 400, "mc");
        this.player.body.setSize(this.player.width * 0.5,this.player.height ).setOffset(16,0)

        // Enable debugging
        window.player = this.player;
    
       
        // create the arrow keys
        this.cursors = this.input.keyboard.createCursorKeys();
    
        // // camera follow player
        this.cameras.main.startFollow(this.player);
        
    }

    update() {
      
      if (this.player.x > 280 && this.player.x < 370 && this.player.y > 490) {
        this.world();
      }
  
      if (this.cursors.left.isDown) {
        this.player.body.setVelocityX(-200);
        this.player.anims.play("left", true); // walk left
      } else if (this.cursors.right.isDown) {
        this.player.body.setVelocityX(200);
        this.player.anims.play("right", true);
      } else if (this.cursors.up.isDown) {
        this.player.body.setVelocityY(-200);
        this.player.anims.play("up", true);
        //console.log('up');
      } else if (this.cursors.down.isDown) {
        this.player.body.setVelocityY(200);
        this.player.anims.play("down", true);
        //console.log('down');
      } else {
        this.player.anims.stop();
        this.player.body.setVelocity(0, 0);
      }
      // if (
      //   this.player.x > 1070&&
      //   this.player.x < 1090 &&
      //   this.player.y > 489 &&
      //   this.player.y < 500
      // ) {
      //   console.log("jump to room2")
      //   this.room2();
      // }
  
    }
  
   
    // Function to jump to room1
    world(player, tile) {
      console.log("world function");
      let playerPos={}
      playerPos.x =314
      playerPos.y =71
      this.scene.start("world");
    }

    }

    


