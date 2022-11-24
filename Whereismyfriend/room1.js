class room1 extends Phaser.Scene {

    constructor() {
        super({ key: 'room1' });
        
        // Put global variable here
    }


    init(data) {
        this.player = data.player
        this.inventory = data.inventory
    }

    preload() {    
    this.load.tilemapTiledJSON("room1", "assets/room1.tmj");
    this.load.image("pippoyaPNG", "assets/Example_pipoya (1).png");


    }

    create() {
        console.log('*** room1 scene');
        let map = this.make.tilemap({ key: "room1" });

        let pippoyaTiles = map.addTilesetImage("Example_pipoya (1)", "pippoyaPNG");
    
        let tilesArray = [pippoyaTiles];
    
        this.floorlayer = map.createLayer("floor", tilesArray, 0, 0);
        this.doorlayer = map.createLayer("door", tilesArray, 0, 0);
    
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
      
      if (this.player.x > 191 && this.player.x < 223 && this.player.y < 940 &&this.player.y > 908 ) {
        this.room2();
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
    }
    
  
    // Function to jump to room1
    room2(player, tile) {
      console.log("room2 function");
      let playerPos={}
      playerPos.x =114
      playerPos.y =510
      this.scene.start("room2");
    }

    }

    


