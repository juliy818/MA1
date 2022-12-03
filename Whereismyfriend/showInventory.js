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
        // var rect = new Phaser.Geom.Rectangle(0, 0, 640, 50);
        // var graphics = this.add.graphics({
        //     fillStyle: {
        //         color: 0x000000
        //     }
        // });
        // graphics.fillRectShape(rect).setScrollFactor(0)

        // Setup heart and keys but visible to false
        this.boradimg1 = this.add.image (50,50,'board').setScrollFactor(0).setVisible(false).setScale(0.5);
        this.boradimg2 = this.add.image (50,50,'board').setScrollFactor(0).setVisible(false).setScale(0.5);
        this.boradimg3 = this.add.image (50,50,'board').setScrollFactor(0).setVisible(false).setScale(0.5);
        this.boradimg4 = this.add.image (50,50,'board').setScrollFactor(0).setVisible(false).setScale(0.5);
        this.boradimg5 = this.add.image (50,50,'board').setScrollFactor(0).setVisible(false).setScale(0.5);
        this.boradimg6= this.add.image (50,50,'board').setScrollFactor(0).setVisible(false).setScale(0.5);
       
       
       
        // Recv an event, call the method
        this.events.on('inventory', this.updateScreen, this)
    }

    update() {
    }

    updateScreen(data) {
        //  console.log('Received event inventory', data)

        //  switch ( data.heart ) {

        //     case 3: 
        //         this.heartimg1.setVisible(true)
        //         this.heartimg2.setVisible(true)
        //         this.heartimg3.setVisible(true)
        //         break;

        //     case 2:
        //         this.heartimg1.setVisible(true)
        //         this.heartimg2.setVisible(true)
        //         this.heartimg3.setVisible(false)
        //         break;

        //     case 1:
        //         this.heartimg1.setVisible(true)
        //         this.heartimg2.setVisible(false)
        //         this.heartimg3.setVisible(false)
        //         break;
             
        //     case 0:
        //         this.heartimg1.setVisible(false)
        //         this.heartimg2.setVisible(false)
        //         this.heartimg3.setVisible(false)
        //         break;    

        //     default:
        //     break;
        // }

        switch ( data.key ) {

            case 7:
                this.boardimg1.setVisible(true)
                this.boardimg2.setVisible(true)
                this.boardim3.setVisible(true)
                this.boardimg4.setVisible(true)
                this.boardimg5.setVisible(true)
                this.boardimg6.setVisible(true)
                this.boardimg7.setVisible(true)
                break;
            
            case 6:
                this.boardimg1.setVisible(true)
                this.boardimg2.setVisible(true)
                this.boardim3.setVisible(true)
                this.boardimg4.setVisible(true)
                this.boardimg5.setVisible(true)
                this.boardimg6.setVisible(true)
                this.boardimg7.setVisible(true)
                break;
                
            case 5:
                this.boardimg1.setVisible(true)
                this.boardimg2.setVisible(true)
                this.boardim3.setVisible(true)
                this.boardimg4.setVisible(true)
                this.boardimg5.setVisible(true)
                this.boardimg6.setVisible(true)
                this.boardimg7.setVisible(true)
                break;

            case 4:
                this.boardimg1.setVisible(true)
                this.boardimg2.setVisible(true)
                this.boardim3.setVisible(true)
                this.boardimg4.setVisible(true)
                this.boardimg5.setVisible(true)
                this.boardimg6.setVisible(true)
                this.boardimg7.setVisible(true)
                break;    

            case 3:
                this.boardimg1.setVisible(true)
                this.boardimg2.setVisible(true)
                this.boardim3.setVisible(true)
                this.boardimg4.setVisible(true)
                this.boardimg5.setVisible(true)
                this.boardimg6.setVisible(true)
                this.boardimg7.setVisible(true)
                break;    

            case 2:
                this.boardimg1.setVisible(true)
                this.boardimg2.setVisible(true)
                this.boardim3.setVisible(true)
                this.boardimg4.setVisible(true)
                this.boardimg5.setVisible(true)
                this.boardimg6.setVisible(true)
                this.boardimg7.setVisible(true)
                break;  
                
            case 1: 
            this.boardimg1.setVisible(true)
            this.boardimg2.setVisible(true)
            this.boardim3.setVisible(true)
            this.boardimg4.setVisible(true)
            this.boardimg5.setVisible(true)
            this.boardimg6.setVisible(true)
            this.boardimg7.setVisible(true)
                break; 
            default: 
                break;
        }
        
    }
}

