
class Player {
    constructor({collisionBlocks = []}, {spikeBlocks = []}, {levelCompletion = []},) {
        this.pos = {
            x: 3*64,
            y: 7*64
        };
        this.dimensions = {
            width: 32,
            height: 32
        };

        this.sides = {
            top: this.pos.y,
            bottom: this.pos.y + this.dimensions.height,
            left: this.pos.x,
            right: this.pos.x + this.dimensions.width
        }

        this.velocity = {
            x: 0,
            y: 0
        }

        this.gravity = 0.1;

        this.collisionBlocks = collisionBlocks;
        this.spikeBlocks = spikeBlocks;
        this.winnerBlocks = levelCompletion;
        this.currentLevel = 1;

        this.levelPosition = {
            1: {
                x: 2*64,
                y: 7*64
            },
            2: {
                x: 2*64,
                y: 4*64
            },
            3: {
                x: 3*64,
                y: 7*64
            },
            4: {
                x: 2*64,
                y: 4*64
            },
            5: {
                x: 2*64,
                y: 7*64
            },
            6: {
                x: 2*64,
                y: 4*64
            }
        }


        console.log(spikeBlocks)
        console.log(collisionBlocks)

    }

    draw() {
        c.fillStyle = "red";
        c.fillRect(this.pos.x, this.pos.y, this.dimensions.width, this.dimensions.height); // Update the coordinates for drawing the player
    }

    update() {


        this.pos.x += this.velocity.x;
        
        this.checkHorizontalCollision();
        this.applyGravity();
        this.checkVerticalCollision();
        this.checkLevelCompletion();
        this.checkSpikeCollision();
        
        
        
        
        this.sides.bottom = this.pos.y + this.dimensions.height;




    }

    checkSpikeCollision() {
        for (let i = 0; i < this.spikeBlocks.length; i++) {
            const spikeBlock = this.spikeBlocks[i];

            if (
                this.pos.x <= spikeBlock.position.x + spikeBlock.width &&
                this.pos.x + this.dimensions.width >= spikeBlock.position.x &&
                this.pos.y + this.dimensions.height >= spikeBlock.position.y && // Fix: Compare with collisionBlock.position.y
                this.pos.y <= spikeBlock.position.y + spikeBlock.height
            ) {
                console.log("spike collision detected")
                this.pos.x = this.levelPosition[this.currentLevel].x;
                this.pos.y = this.levelPosition[this.currentLevel].y;
            }
            
        }
    }

    checkHorizontalCollision() {
        for (let i = 0; i < this.collisionBlocks.length; i++) {
            const collisionBlock = this.collisionBlocks[i];

            if (
                this.pos.x <= collisionBlock.position.x + collisionBlock.width &&
                this.pos.x + this.dimensions.width >= collisionBlock.position.x &&
                this.pos.y + this.dimensions.height >= collisionBlock.position.y &&
                this.pos.y <= collisionBlock.position.y + collisionBlock.height
            ) {
                //console.log("collision detected")

                    if (this.velocity.x < 0) {
                        this.pos.x = collisionBlock.position.x + collisionBlock.width + 0.01;
                        break;
                    }
                    else if (this.velocity.x > 0) {
                        this.pos.x = collisionBlock.position.x - this.dimensions.width - 0.01;
                        break;
                    }
            }
            
        }
    }
    checkVerticalCollision() {
        for (let i = 0; i < this.collisionBlocks.length; i++) {
            const collisionBlock = this.collisionBlocks[i];

            if (
                this.pos.x <= collisionBlock.position.x + collisionBlock.width &&
                this.pos.x + this.dimensions.width >= collisionBlock.position.x &&
                this.pos.y + this.dimensions.height >= collisionBlock.position.y && // Fix: Compare with collisionBlock.position.y
                this.pos.y <= collisionBlock.position.y + collisionBlock.height
            ) {
                //console.log("collision detected")

                    if (this.velocity.y < 0) {
                        this.velocity.y = 0;
                        this.pos.y = collisionBlock.position.y + collisionBlock.width + 0.01;
                        break;
                    }
                    else if (this.velocity.y > 0) {

                        this.velocity.y = 0;
                        this.pos.y = collisionBlock.position.y - this.dimensions.width - 0.01; // Fix: Update the y-coordinate
                        break;
                    }
            }
            
        }
    }
    applyGravity() {
        this.velocity.y += this.gravity;
        this.pos.y += this.velocity.y;
    }


    checkLevelCompletion() {
        for (let i = 0; i < this.winnerBlocks.length; i++) {
            const collisionBlock = this.winnerBlocks[i];

            if (
                this.pos.x <= collisionBlock.position.x + collisionBlock.width &&
                this.pos.x + this.dimensions.width >= collisionBlock.position.x &&
                this.pos.y + this.dimensions.height >= collisionBlock.position.y && // Fix: Compare with collisionBlock.position.y
                this.pos.y <= collisionBlock.position.y + collisionBlock.height
            ) {
                console.log("winner!")
                console.log(this.currentLevel++)
                this.pos.x = this.levelPosition[this.currentLevel].x;
                this.pos.y = this.levelPosition[this.currentLevel].y;
                
            }
            
        }
    }
}