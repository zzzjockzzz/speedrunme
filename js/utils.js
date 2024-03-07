Array.prototype.parse2D = function() {
    const rows = [];
    for (let i = 0; i < this.length; i+=16) {
        rows.push(this.slice(i, i+16));
    }
    return rows
}

Array.prototype.createObjectsFrom2D = function(symbol_) {
        const objects = []
        this.forEach((row,y) => {
        row.forEach((symbol, x) => {
            if (symbol == symbol_) {
                objects.push(
                    new CollisionBlock({
                    position: {
                        x: x * 64,
                        y: y * 64
                    }
                }))
            }
        })
    })
    return objects
}

Array.prototype.createSpikesFrom2D = function(symbol_) {
    const objects = []
    this.forEach((row,y) => {
    row.forEach((symbol, x) => {
        if (symbol == symbol_ || symbol == 3) {
            objects.push(
                new SpikeBlock({
                position: {
                    x: x * 64,
                    y: y * 64
                }
            }))
        }
    })
})
return objects
}

Array.prototype.createWinnerFrom2D = function(symbol_) {
    const objects = []
    this.forEach((row,y) => {
    row.forEach((symbol, x) => {
        if (symbol == symbol_ || symbol == 2) {
            objects.push(
                new NextLevel({
                position: {
                    x: x * 64,
                    y: y * 64
                }
            }))
        }
    })
})
return objects
}