
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
const gravity = 0.2;

canvas.width = 2000;
canvas.height = 576;

context.fillRect(0, 0, canvas.width, canvas.height);

class Sprite {
    constructor({ position, velocity }) {
        this.position = position;
        this.velocity = velocity;
        this.height = 150;
        
    }

    draw() {
        context.fillStyle = 'blue';
        context.fillRect(this.position.x, this.position.y, 50, this.height);

    }

    update() {
        this.draw();

        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y; 

        
        if (this.position.y + this.height + this.velocity.y >= canvas.height){
            this.velocity.y = 0;
            
        }else this.velocity.y += gravity
    }
}

const player = new Sprite({
    position: {
        x: 0,
        y: 0
    },

    velocity: {
        x: 0,
        y: 0
    }
});

const enemy = new Sprite({
    position: {
        x: 400,
        y: 100
    },

    velocity: {
        x: 0,
        y: 0
    }
});


function animate() {
    window.requestAnimationFrame(animate);
    context.fillStyle = 'black';
    context.fillRect(0, 0, canvas.width, canvas.height);
    player.update();
    enemy.update();
}

animate();

//Moving characters with event listeners
window.addEventListener('keydown', (event) =>{
    switch(event.key){
        case 'd':
            player.velocity.x = 1;
            break;

        case 'a':
            player.velocity.x = -1;
            break;

        case 'w':
            player.velocity.y = -10;
            break;
}
    console.log(event.key);
})

window.addEventListener('keyup', (event) =>{
    switch(event.key){
        case 'd':
            player.velocity.x = 0;
            break;

        case 'a':
            player.velocity.x = 0;
            break;

        case 'w':
            player.velocity.y = 0;
            break;
}
    console.log(event.key);
})