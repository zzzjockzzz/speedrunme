class CollisionBlock {
    constructor({ position }) {
      this.position = position
      this.width = 64
      this.height = 64
    }
  
    draw() {
      c.fillStyle = 'rgba(0, 0, 0, 1)'
      c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
  }

class SpikeBlock {
    constructor({ position }) {
        this.position = position
        this.width = 8
        this.height = 64
    }
    draw() {
        c.fillStyle = 'rgba(255, 0, 0, 0.5)'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
  }

class NextLevel {
    constructor({ position }) {
        this.position = position
        this.width = 64
        this.height = 64
    }
    draw() {
        c.fillStyle = 'rgba(0, 0, 255, 0.5)'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}