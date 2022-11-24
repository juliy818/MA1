class storyline extends Phaser.Scene {
    constructor() {
      super({
        key: "storyline",
      });
  
      // Put global variable here
    }
  
    preload() {
  
      this.load.image("storyline","assets/storyline.jpg");
  
    }
  
    create() {
      console.log("*** storyline scene");
  
      this.add.image(0, 0, 'storyline').setOrigin(0, 0);
  
     
      var spaceDown = this.input.keyboard.addKey("SPACE");
  
      
  
      // On spacebar event, call the world scene
      spaceDown.on(
        "down",
        function () {
          console.log("Jump to world scene");
          this.scene.start( "world");
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