class preloadScene extends Phaser.Scene {
 
    constructor ()
    {
        super({ key: 'preloadScene' });
    }

preload() {
   this.load.spritesheet('mc', 'assets/mc.png',{ frameWidth:64, frameHeight:64 });
   this.load.audio("bgm","assets/bgmusic.mp3")
   this.load.image('intro', 'assets/introscene.jpg');
   

}

create() {

    var spaceDown = this.input.keyboard.addKey('SPACE');
        
    this.input.on('pointerdown', function (pointer) {
        this.scene.start("storyline");
        }, this);

    spaceDown.on('down', function(){
        console.log("Spacebar pressed, goto storyline");
        this.scene.start("storyline");
        }, this );
    
    this.bgm= this.sound.add("bgm", {loop:true}).setVolume(0.2)
    this.bgm.stop();
    
    this.add.image(0,0,'intro').setOrigin(0,0);
    console.log("This is intro")
  

    
        this.anims.create({
        key: "right",
        frames: this.anims.generateFrameNumbers("mc", { start: 0, end: 2 }),
        frameRate: 10,
        repeat: -1,
        });
    
        this.anims.create({
        key: "up",
        frames: this.anims.generateFrameNumbers("mc", { start: 3, end: 5 }),
        frameRate: 10,
        repeat: -1,
        });
    
        this.anims.create({
        key: "down",
        frames: this.anims.generateFrameNumbers("mc", { start: 6, end: 8}),
        frameRate: 10,
        repeat: -1,
        });

        this.anims.create({
            key: "pick",
            frames: this.anims.generateFrameNumbers("mc", { start: 9, end: 10 }),
            frameRate: 10,
            repeat: -1,
            });
        
        this.anims.create({
            key: "left",
            frames: this.anims.generateFrameNumbers("mc", { start: 11, end: 13 }),
            frameRate: 10,
            repeat: -1,
            });


}

} // end of class