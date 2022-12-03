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
    this.load.image("pippoyaPNG2", "assets/pipoya.png")
    this.load.image("board", "assets/board.png")




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
    
        this.physics.world.bounds.width = this.wallLayer.width;
        this.physics.world.bounds.height = this.wallLayer.height;

        var startPoint = map.findObject("objectLayer",(obj) => obj.name === "start");
    
        this.player = this.physics.add.sprite(300, 400, "mc");
        this.player.body.setSize(this.player.width * 0.5,this.player.height ).setOffset(16,0)

        this.player.setCollideWorldBounds(true)
        this.wallLayer.setCollisionByExclusion(-1,true)
        this.physics.add.collider(this.wallLayer, this.player);
       
        // Enable debugging
        window.player = this.player;
    
       
        // create the arrow keys
        this.cursors = this.input.keyboard.createCursorKeys();
    
        // // camera follow player
        this.cameras.main.startFollow(this.player);

        var board1 = map.findObject("objectLayer", (obj) => obj.name === "board1");
        this.board1 = this.physics.add.sprite(board1.x, board1.y, 'board');
        var board2 = map.findObject("objectLayer", (obj) => obj.name === "board2");
        this.board2 = this.physics.add.sprite(board2.x, board2.y, 'board');
        var board3 = map.findObject("objectLayer", (obj) => obj.name === "board3");
        this.board3 = this.physics.add.sprite(board3.x, board3.y, 'board');

        this.physics.add.overlap(this.player, this.board1, collectboard, null, this);
        this.physics.add.overlap(this.player, this.board2, collectboard, null, this);
        this.physics.add.overlap(this.player, this.board3, collectboard, null, this);

  


        
    }

    update() {
      
      if (this.player.x > 159 && this.player.x < 200 && this.player.y >852 && this.player.x < 900) {
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

    
    function collectboard (mc, board1)

    {
        board1.disableBody(true, true);
        }    
    
 function collectboard (mc, board2)

    {
        board2.disableBody(true, true);
        }    
    
        function collectboard (mc, board3)

        {
            board3.disableBody(true, true);
            }   
    


