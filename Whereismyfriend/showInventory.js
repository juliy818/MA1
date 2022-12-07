class showInventory extends Phaser.Scene {

    constructor() {
        super({
            key: 'showInventory',
            active: false
        });
    }

    // incoming data from other scene
    init(data) {
        this.player = data.player
        this.inventory = data.inventory
    }

    preload() {
        this.load.image("board", "assets/board.png")



    }

    create() {
        this.scene.bringToTop(showInventory)
        // var rect = new Phaser.Geom.Rectangle(0, 0, 640, 50);
        // var graphics = this.add.graphics({
        //     fillStyle: {
        //         color: 0x000000
        //     }
        // });
        // graphics.fillRectShape(rect).setScrollFactor(0)

        // Setup heart and keys but visible to false
        this.boardimg1 = this.add.image (480,50,'board').setScrollFactor(0).setVisible(false).setScale(1);
        this.boardimg2 = this.add.image (530,50,'board').setScrollFactor(0).setVisible(false).setScale(1);
        this.boardimg3 = this.add.image (580,50,'board').setScrollFactor(0).setVisible(false).setScale(1);
        this.boardimg4 = this.add.image (630,50,'board').setScrollFactor(0).setVisible(false).setScale(1);
        this.boardimg5 = this.add.image (680,50,'board').setScrollFactor(0).setVisible(false).setScale(1);
        this.boardimg6= this.add.image (730,50,'board').setScrollFactor(0).setVisible(false).setScale(1);
       
       
       
        // Recv an event, call the method
        this.events.on('inventory', this.updateScreen, this)
    }

    update() {
    }

    updateScreen(data) {
         console.log('Received event inventory', data)

      
        switch ( data.board ) {

          
            
            case 6:
                this.boardimg1.setVisible(true)
                this.boardimg2.setVisible(true)
                this.boardimg3.setVisible(true)
                this.boardimg4.setVisible(true)
                this.boardimg5.setVisible(true)
                this.boardimg6.setVisible(true)
                break;
                
            case 5:
                this.boardimg1.setVisible(true)
                this.boardimg2.setVisible(true)
                this.boardimg3.setVisible(true)
                this.boardimg4.setVisible(true)
                this.boardimg5.setVisible(true)
                this.boardimg6.setVisible(false)
               
                break;

            case 4:
                this.boardimg1.setVisible(true)
                this.boardimg2.setVisible(true)
                this.boardimg3.setVisible(true)
                this.boardimg4.setVisible(true)
                this.boardimg5.setVisible(false)
                this.boardimg6.setVisible(false)
                
                break;    

            case 3:
                this.boardimg1.setVisible(true)
                this.boardimg2.setVisible(true)
                this.boardimg3.setVisible(true)
                this.boardimg4.setVisible(false)
                this.boardimg5.setVisible(false)
                this.boardimg6.setVisible(false)
                
                break;    

            case 2:
                this.boardimg1.setVisible(true)
                this.boardimg2.setVisible(true)
                this.boardimg3.setVisible(false)
                this.boardimg4.setVisible(false)
                this.boardimg5.setVisible(false)
                this.boardimg6.setVisible(false)
                
                break;  
                
            case 1: 
            this.boardimg1.setVisible(true)
            this.boardimg2.setVisible(false)
            this.boardimg3.setVisible(false)
            this.boardimg4.setVisible(false)
            this.boardimg5.setVisible(false)
            this.boardimg6.setVisible(false)
            
             break; 
            default: 
                break;
        }
        
    }
}

