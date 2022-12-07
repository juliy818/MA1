class gameOver extends Phaser.Scene {

  constructor ()
  {
      super({ key: 'gameOver' });
  }

  preload() {

     this.load.image("tryagain","assets/gameover.jpg")

      



  } // end of preload //

  create () {

      this.add.image (480,480,'tryagain')

      // console.log("gameOver")
      // this.add.text(185,300, 'TRY AGAIN', 
      //     { font: '44px Rakkas', fill: '#ffffff' });

        // this.add.text(220,550, 'press spacebar to restart', 
        //   { font: '20px Rakkas', fill: '#ffffff' });
      window.board=0
      var spaceDown = this.input.keyboard.addKey('SPACE');

      

      spaceDown.on(
        "down",
        function () {
        console.log("Jump to world");
        let playerPos = {};
        playerPos.x = 314;
        playerPos.y = 71;
        playerPos.facing ="down"
        console.log(playerPos)
      this.scene.start("world",{player: playerPos});
      window.bgm.play();
    },
    this
    );

      // this.add.sprite(330, 470, "down").play("down").setScale(2);
  }

  
}
