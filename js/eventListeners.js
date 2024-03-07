window.addEventListener('keydown', function(e) {
    console.log(e.key)
    switch (e.key) {

        case "w":
            if (player.velocity.y === 0) {
                player.velocity.y = -5.5
            } else if (player.velocity.y === -5.5) {
                player.velocity.y = -8.5 // Double jump velocity
            }
            console.log("jumping")
            break

        case "a":
            keys.a.isPressed = true
            player.velocity.x = 10
            break

        case "d":
            keys.d.isPressed = true
            player.velocity.x = -10
            break
    }
})

window.addEventListener('keyup', function(e) {
    console.log(e.key)
    switch (e.key) {

        case "a":
            keys.a.isPressed = false
            player.velocity.x = 0
            break

        case "d":
            keys.d.isPressed = false
            player.velocity.x = 0
            break
    }
})