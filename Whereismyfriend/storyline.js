﻿class storyline extends Phaser.Scene {
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
  
      // Add any sound and music here
      // ( 0 = mute to 1 is loudest )
      //this.music = this.sound.add('bgMusic').setVolume(0.3) // 10% volume
  
      //this.music.play()
      //window.music = this.music
  
      // Add image and detect spacebar keypress
      this.add.image(0, 0, 'storyline').setOrigin(0, 0);
  
      // Check for spacebar or any key here
      var spaceDown = this.input.keyboard.addKey("SPACE");
  
      
  
      // On spacebar event, call the world scene
      spaceDown.on(
        "down",
        function () {
          console.log("Jump to gameplay scene");
          this.scene.start( "gameplay");
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