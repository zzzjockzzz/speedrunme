
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 64 * 16;
canvas.height = 64 * 9; 







const parsedCollisionsLevel1 = collisionsLevel1.parse2D()
const collisionBlocksLevel1 = parsedCollisionsLevel1.createObjectsFrom2D(1)

const parsedSpikesLevel1 = spikesLevel1.parse2D()
const spikeBlocksLevel1 = parsedSpikesLevel1.createSpikesFrom2D(3)

const parsedWinnerLevel1 = winnerLevel1.parse2D()
const winnerBlocksLevel1 = parsedWinnerLevel1.createWinnerFrom2D(2)



const parsedCollisionsLevel2 = collisionsLevel2.parse2D()
const collisionBlocksLevel2 = parsedCollisionsLevel2.createObjectsFrom2D(1)

const parsedSpikesLevel2 = spikesLevel2.parse2D()
const spikeBlocksLevel2 = parsedSpikesLevel2.createSpikesFrom2D(3)

const parsedWinnerLevel2 = winnerLevel2.parse2D()
const winnerBlocksLevel2 = parsedWinnerLevel2.createWinnerFrom2D(2)



const parsedCollisionsLevel3 = collisionsLevel3.parse2D()
const collisionBlocksLevel3 = parsedCollisionsLevel3.createObjectsFrom2D(1)

const parsedSpikesLevel3 = spikesLevel3.parse2D()
const spikeBlocksLevel3 = parsedSpikesLevel3.createSpikesFrom2D(3)

const parsedWinnerLevel3 = winnerLevel3.parse2D()
const winnerBlocksLevel3 = parsedWinnerLevel3.createWinnerFrom2D(2)


const parsedCollisionsLevel4 = collisionsLevel4.parse2D()
const collisionBlocksLevel4 = parsedCollisionsLevel4.createObjectsFrom2D(1)

const parsedSpikesLevel4 = spikesLevel4.parse2D()
const spikeBlocksLevel4 = parsedSpikesLevel4.createSpikesFrom2D(3)

const parsedWinnerLevel4 = winnerLevel4.parse2D()
const winnerBlocksLevel4 = parsedWinnerLevel4.createWinnerFrom2D(2)


const parsedCollisionsLevel5 = collisionsLevel5.parse2D()
const collisionBlocksLevel5 = parsedCollisionsLevel5.createObjectsFrom2D(1)

const parsedSpikesLevel5 = spikesLevel5.parse2D()
const spikeBlocksLevel5 = parsedSpikesLevel5.createSpikesFrom2D(3)

const parsedWinnerLevel5 = winnerLevel5.parse2D()
const winnerBlocksLevel5 = parsedWinnerLevel5.createWinnerFrom2D(2)



const parsedCollisionsLevel6 = collisionsLevel6.parse2D()
const collisionBlocksLevel6 = parsedCollisionsLevel6.createObjectsFrom2D(1)

const parsedSpikesLevel6 = spikesLevel6.parse2D()
const spikeBlocksLevel6 = parsedSpikesLevel6.createSpikesFrom2D(3)

const parsedWinnerLevel6 = winnerLevel6.parse2D()
const winnerBlocksLevel6 = parsedWinnerLevel6.createWinnerFrom2D(2)



const player = new Player({collisionBlocks:collisionBlocksLevel1}, {spikeBlocks:spikeBlocksLevel1}, {levelCompletion:winnerBlocksLevel1}, {});


const keys = {
    w: {
        code: 87,
        isPressed: false
    },
    a: {
        code: 65,
        isPressed: false
    },

    d: {
        code: 68,
        isPressed: false

    }
}



id = setInterval(setTime, 1000);

function setTime() {
  ++totalSeconds;
  secondsLabel.innerHTML = formatTime(totalSeconds);
}

function pad(val) {
    var valString = val + "";
    if (valString.length < 2) {
    return "0" + valString;
    } else {
    return valString;
    }

}

function formatTime(totalSeconds) {
    var minutes = pad(parseInt(totalSeconds / 60));
    var seconds = pad(totalSeconds % 60);
    return minutes + ":" + seconds;
}



function animate() {
    

    window.requestAnimationFrame(animate);
    c.fillStyle = "white";
    c.fillRect(0,0,canvas.width,canvas.height)



    if (player.currentLevel === 1) {

        collisionBlocksLevel1.forEach(block => {
            block.draw()
        })

        spikeBlocksLevel1.forEach(block => {
            block.draw()
        })

        winnerBlocksLevel1.forEach(block => {
            block.draw()
        })
    }

    else if (player.currentLevel === 2) {

        player.collisionBlocks = collisionBlocksLevel2
        player.spikeBlocks = spikeBlocksLevel2
        player.winnerBlocks = winnerBlocksLevel2


        collisionBlocksLevel2.forEach(block => {
            block.draw()
        })

        spikeBlocksLevel2.forEach(block => {
            block.draw()
        })

        winnerBlocksLevel2.forEach(block => {
            block.draw()
        })
    }

    else if (player.currentLevel === 3) {
            
            player.collisionBlocks = collisionBlocksLevel3
            player.spikeBlocks = spikeBlocksLevel3
            player.winnerBlocks = winnerBlocksLevel3

            collisionBlocksLevel3.forEach(block => {
                block.draw()
            }
            )
            spikeBlocksLevel3.forEach(block => {
                block.draw()
            }
            )
            winnerBlocksLevel3.forEach(block => {
                block.draw()
            }
            )
    }

    else if (player.currentLevel === 4) {
                
                player.collisionBlocks = collisionBlocksLevel4
                player.spikeBlocks = spikeBlocksLevel4
                player.winnerBlocks = winnerBlocksLevel4
    
                collisionBlocksLevel4.forEach(block => {
                    block.draw()
                }
                )
                spikeBlocksLevel4.forEach(block => {
                    block.draw()
                }
                )
                winnerBlocksLevel4.forEach(block => {
                    block.draw()
                }
                )
        }

    else if (player.currentLevel === 5) {
    
                        player.collisionBlocks = collisionBlocksLevel5
                        player.spikeBlocks = spikeBlocksLevel5
                        player.winnerBlocks = winnerBlocksLevel5
            
                        collisionBlocksLevel5.forEach(block => {
                            block.draw()
                        }
                        )
                        spikeBlocksLevel5.forEach(block => {
                            block.draw()
                        }
                        )
                        winnerBlocksLevel5.forEach(block => {
                            block.draw()
                        }
                        )
                }

    else if (player.currentLevel === 6) {
        
                                player.collisionBlocks = collisionBlocksLevel6
                                player.spikeBlocks = spikeBlocksLevel6
                                player.winnerBlocks = winnerBlocksLevel6
                        
                                collisionBlocksLevel6.forEach(block => {
                                    block.draw()
                                }
                                )
                                spikeBlocksLevel6.forEach(block => {
                                    block.draw()
                                }
                                )
                                winnerBlocksLevel6.forEach(block => {
                                    block.draw()
                                }
                                )
                        }
  




    player.velocity.x = 0;

    if (keys.d.isPressed) {
        player.velocity.x = 3
    }

    else if (keys.a.isPressed) {
        player.velocity.x = -3
    }

    if (player.currentLevel === 6) {
        clearInterval(id)
    }

    player.draw();
    player.update();


}
animate()

var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;

var audio = new Audio("song.mp3")
audio.loop = true
audio.play()
