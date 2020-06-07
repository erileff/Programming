# Phaser
Phaser is a game framework built with JS.

[Phaser Quick Guide](https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/Phaser+Quick+Guide.pdf)

## Draw a Circle
`this.add.circle()` creates a `GameObject` that we can use to represent a circle in the game. It takes 4 arguments:
1. `x` coordinate for center of the circle (larger value = further to right)
2. `y` coordinate for center of circle (larger = further down)
3. `radius` for how large circle should be
4. `fillColor` for the circle's color

## Draw a Sprite
`this.load.image()` in `preload()` takes 2 arguments: `key` to refer to it and `path` to image itself.

`this.add.sprite()` in `create()` takes 3 arguments: `x`, `y`, and `key`.

## Draw a Background Image
Load same as sprites. `this.add.image()` in `create()` to draw the image.

## Create a Config
`new Phaser.Game()` is called with an object that specifies meta-information about the game. We define this with the variable name `config`. Keys we can define include:
- `height` of `canvas`
- `width` of `canvas`
- `parent` (HTML element where `canvas` will go)
- `backgroundColor` of game

## Storing State
Can create a `gameState` object to store information.
```js
const gameState = {};
```

## Input
To interact with a GameObject, we call `setInteractive()` method on it. `setInteractive()` is provided an event handler.

- `pointerdown`: called when mouse button is pressed but not released GameObject
- `pointerup`: called when mouse button is released GameObject
- `pointerover` called when mouse pointer hovers over GameObject
- `pointerout` called when mouse pointer that was hovering is moved

```js
const gameState = {}

function create() {
gameState.circle = this.add.circle(50, 50, 20, 0xFF0000);
gameState.circle.setInteractive();
gameState.circle.on('pointerup', function() {
    this.fillColor = 0x00FF00;
});
}

const config = {
    scene: { create }
}

const game = new Phaser.Game(config)
```

## Keyboard Events
Keyboard handlers handle keypresses that happen while the game is in focus.

```js
const gameState = {};

function create() {
gameState.circle = this.add.circle(30, 30, 10, 0xFF0000);
this.input.keyboard.on('keyboard-W', function() {
    gameState.circle.fillColor = 0xFFFF00;
});
}
```

```js
const gameState = {};

function create() {
gameState.circle = this.add.circle(50, 50, 20, 0xFF0000);
gameState.cursors = this.input.keyboard.createCursorKeys();
}

function update() {
if (gameState.cursors.left.isDown) {
    // move the circle left!
    gameState.circle.x -= 3;
}
}

const config = { scene: { create, update }};
const game = new Phaser.Game(config);
```

## Sounds
Sounds are assets, so they can be added during `preload()` function.

```js
const gameState = {};

function preload() {
this.load.audio('theme', 'assets/music/theme.wav');
}

function create() {
gameState.music = this.sound.add('theme');
gameState.music.play();
}

const config = { scene: { preload, create }};
const game = new Phaser.Game(config);
```

# Physics

## Adding a Sprite
`this.physics.add.sprite()` adds a sprite that is affected by physics. It takes arguments for `x`, `y`, and `key`.

## Implementing Physics
Phaser's Arcade physics plugin adds gravity. It's used by adding a `physics` property to `config` with additional specifications in its value.
```js
const config = {
// ...
physics: {
    default: 'arcade',
    arcade: {
    gravity: { y: 300 },
    debug: true
    }
}
};
```

## Adding Static Groups
Ground platforms aren't affected by gravity but can interact with the player sprite. `this.physics.add.staticGroup()` is used to create a Group object.

## Detecting Collisions
A Collider object checks if two GameObjects bump into each other.
```js
function create() {
const player = this.physics.add.sprite(100, 100, 'player');
const platform = this.physics.add.sprite(100, 500, 'platform');
this.physics.add.collider(player, platform);
}
```
