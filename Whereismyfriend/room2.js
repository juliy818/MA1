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
    
        this.player = this.physics.add.sprite(300, 400, "down");
    
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
    }
  
    // Function to jump to room1
    world(player, tile) {
      console.log("world function");
      this.scene.start("world");
    }

    }

    


