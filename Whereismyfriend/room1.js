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
    this.load.image("board", "assets/board.png")


    }

    create() {
        console.log('*** room1 scene');
        let map = this.make.tilemap({ key: "room1" });

        let pippoyaTiles = map.addTilesetImage("Example_pipoya (1)", "pippoyaPNG");
    
        let tilesArray = [pippoyaTiles];

        this.floorlayer = map.createLayer("floorlayer", tilesArray, 0, 0);
        this.doorlayer = map.createLayer("doorlayer", tilesArray, 0, 0);
        
        var startPoint = map.findObject("objectLayer",(obj) => obj.name === "start");
        
        this.player = this.physics.add.sprite(300, 400, "mc");
        this.player.body.setSize(this.player.width * 0.5,this.player.height ).setOffset(16,0)
        
        this.physics.world.bounds.width = this.doorlayer.width;
        this.physics.world.bounds.height = this.doorlayer.height;

        this.player.setCollideWorldBounds(true)
        this.doorlayer.setCollisionByExclusion(-1,true)
        this.physics.add.collider(this.doorlayer, this.player);



       
        var board1 = map.findObject("objectLayer", (obj) => obj.name === "board1");
        this.board1 = this.physics.add.sprite(board1.x, board1.y, 'board');
        var board2 = map.findObject("objectLayer", (obj) => obj.name === "board2");
        this.board2 = this.physics.add.sprite(board2.x, board2.y, 'board');
        var board3 = map.findObject("objectLayer", (obj) => obj.name === "board3");
        this.board3 = this.physics.add.sprite(board3.x, board3.y, 'board');

        this.physics.add.overlap(this.player, this.board1, collectboard, null, this);
        this.physics.add.overlap(this.player, this.board2, collectboard, null, this);
        this.physics.add.overlap(this.player, this.board3, collectboard, null, this);

  


    

        // Enable debugging
        window.player = this.player;
    
       
        // create the arrow keys
        this.cursors = this.input.keyboard.createCursorKeys();
    
        // // camera follow player
        this.cameras.main.startFollow(this.player);
        
        
        // this.time.addEvent({

        //   delay: 0,
  
        //   callback: updateInventory,
  
        //   callbackScope: this,
  
        //   loop: false,
  
        // });
       
 

        
        
    }

    update() {
      if (this.player.x > 280 && this.player.x < 370 && this.player.y > 490) {
        {console.log("jump to room2")
            this.room2();
          }
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
      console.log("room1 function");
      let playerPos={}
      playerPos.x =159
      playerPos.y =758
      this.scene.start("room2");
    }
    collectboard(player,board){

      console.log("collectboard");
    
    // this.Collectlove_snd.play()
    
    // window.heart++
    
    board.disableBody(true,true);
    
    // updateInventory.call(this)
    
    }
    }



