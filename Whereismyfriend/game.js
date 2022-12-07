var config = {
    type: Phaser.AUTO,
    // pixel size * tile map size * zoom 
    width: 32 * 30,
    height: 32 * 30,
    physics: {
        default: 'arcade',  
        arcade: {
            debug: false
        }
    },
    scale: {
        mode: Phaser.Scale.HEIGHT_CONTROLS_WIDTH,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    backgroundColor: '#E6B0AA',
    pixelArt: true,
    scene: [preloadScene,storyline,world, room1,room2,showInventory,gameplay,win,gameOver]
};

var game = new Phaser.Game(config);

window.board=0
// update () {
// else if(
//     this.player.x > 773 &&
//     this.player.x < 830 &&
//     this.player.y > 855 &&
//     this.player.y < 868 && 
//     window.key >= 7
// ){
//     this.room4();
//     this.dooropenSnd.play();
//     this.winSnd.play();
// }