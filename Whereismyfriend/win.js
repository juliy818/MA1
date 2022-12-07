class win extends Phaser.Scene {
    constructor() {
      super({
        key: "win",
      });
  
      // Put global variable here
    }
  
    preload() {
  
      this.load.image("winimg","assets/win.png");
  
    }
  
    create() {
      console.log("*** win scene");
  
      this.add.image(0, 0, 'winimg').setOrigin(0, 0);
      
      window.board=0
  
     
      var spaceDown = this.input.keyboard.addKey("SPACE");
  
      
  
      // On spacebar event, call the world scene
      spaceDown.on(
        "down",
        function () {
          console.log("Jump to preloadScene");
          this.scene.start( "preloadScene")
          window.bgm.play();
        },
        this
      );
  
      // Add any text in the main page
      // this.add.text(90, 600, "Press spacebar to continue", {
      //   font: "30px ARCHADECLASSIC ",
      //   fill: "#000000",
      // });
  
      // Create all the game animations here
    }
  }