<<<<<<< HEAD
//////////////////////////    GAME CONSTANTS     //////////////////////////
// canvas
const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
canvas.width = 1024;
canvas.height = 576;

// game constants
const ACCELERATION = 10;
const MASS = 80;
const DRAG = 0.99;

// set initial key states for no movement
var keys = {
  up: {
    pressed: false,
  },
  down: {
=======
import background from "../assets/images/background.png";
import pole from "../assets/images/pole.png";
import house from "../assets/images/house.png";
import fence from "../assets/images/fence.png";
import cloud from "../assets/images/cloud.png";

//////////////////////////    GAME CONSTANTS     //////////////////////////
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const gravity = 0.5;
canvas.width = 1024;
canvas.height = 576;
const poleImage = createImage(pole);
const backgroundImage = createImage(background);
const houseImage = createImage(house);
const fenceImage = createImage(fence);
const cloudImage = createImage(cloud);

// KEY STATES
let keys = {
  right: {
>>>>>>> 6828b9c1733aea07b93cdcc35f3334c6ac50ceb1
    pressed: false,
  },
  left: {
    pressed: false,
  },
<<<<<<< HEAD
  right: {
    pressed: false,
=======
  up: {
    jumpFlag: false,
>>>>>>> 6828b9c1733aea07b93cdcc35f3334c6ac50ceb1
  },
};

//////////////////////////    CLASSES     //////////////////////////
<<<<<<< HEAD
// Player class
class Player {
  constructor() {
    // set player mass, used for acceleration, velocity, position: global constant
    this.mass = MASS;
    // initial position
    this.position = {
      // center of canvas
      x: canvas.width / 2,
      // 1/3rd of the way from the top
      y: canvas.height / 3,
    };
    // set initial force experienced by player to zero
    // used to generate acceleration, velocity, and finally position
    this.force = {
      x: 0,
      y: 0,
    };
    // set initial velocity to zero
=======
// PLAYER
class Player {
  constructor() {
    this.position = {
      x: 100,
      y: 100,
    };
>>>>>>> 6828b9c1733aea07b93cdcc35f3334c6ac50ceb1
    this.velocity = {
      x: 0,
      y: 0,
    };
<<<<<<< HEAD
    // set initial acceleration to zero
    this.acceleration = {
      x: 0,
      y: 0,
    };
    // set width and height of player box ** to be replaced by image
    this.width = 30;
    this.height = 30;
  }
  // Methods
  draw() {
    // set color, position, and dimension
    context.fillStyle = "red";
    context.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
  // Euler integration from F = m * a
  applyForce(forceX, forceY) {
    // acceleration from force, mass
    this.acceleration.x = forceX / this.mass;
    this.acceleration.y = forceY / this.mass;
    // velocity from acceleration
    this.velocity.x += this.acceleration.x;
    this.velocity.y += this.acceleration.y;
    // if player is moving downhill
    if (this.velocity.y >= 0) {
      // apply drag coefficient
      this.velocity.y = this.velocity.y * DRAG;
    }
    // else set Y velocity to zero: attempting to ski uphill
    else this.velocity.y = 0;
    // set X velocity and apply drag
    this.velocity.x = this.velocity.x * DRAG;
    // position move from velocity
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    return;
  }
  update() {
    // draw player
    this.draw();
  }
}

// Tree class
class Tree {
  constructor({ x, y }) {
    this.position = {
      x: x,
      y: y,
    };
    this.width = 40;
    this.height = 150;
=======
    this.width = 30;
    this.height = 30;
  }
  // methods
  draw() {
    ctx.fillStyle = "red";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
  // player update method
  update() {
    this.draw();
  }
}
// PLATFORM
class Platform {
  constructor({ x, y, image }) {
    this.position = {
      x: x,
      y: y,
      image: image,
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
>>>>>>> 6828b9c1733aea07b93cdcc35f3334c6ac50ceb1
  }
  draw() {
<<<<<<< HEAD
    context.fillStyle = "green";
    context.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
  update() {
    this.draw();
  }
}

//////////////////////////     FUNCTIONS   //////////////////////////
// image path function
=======
    ctx.drawImage(this.image, this.position.x, this.position.y);
  }
}
// PARALLAX
class ParallaxObject {
  constructor({ x, y, image }) {
    this.position = {
      x: x,
      y: y,
      image: image,
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }
  draw() {
    ctx.drawImage(this.image, this.position.x, this.position.y);
  }
}

//////////////////////////    IMAGE PATH GENERATION FUNCTION   //////////////////////////
>>>>>>> 6828b9c1733aea07b93cdcc35f3334c6ac50ceb1
function createImage(imageSrc) {
  const image = new Image();
  image.src = imageSrc;
  return image;
}
<<<<<<< HEAD

function handleKeys() {
  if (keys.down.pressed === true) {
    // applyForce(direction vector) while key is pressed
    player.applyForce(0, ACCELERATION);
  }
  // if slowing
  else if (keys.up.pressed === true) {
    player.applyForce(0, -ACCELERATION);
  }
  // if moving left
  else if (keys.left.pressed === true) {
    player.applyForce(-ACCELERATION, 0);
  }
  // if moving right
  else if (keys.right.pressed === true) {
    player.applyForce(ACCELERATION, 0);
  }
  // apply zero net force
  else player.applyForce(0, 0);
}

function mover() {
  // if inside no scroll region
  if (
    player.position.x > 250 &&
    player.position.x < 750 &&
    player.position.y > 180 &&
    player.position.y < 380
  ) {
    handleKeys();
  }
  // stop moving outside no scroll region
  else {
    tree.position.x -= player.velocity.x;
    tree.position.y -= player.velocity.y;
    player.position.x -= player.velocity.x;
    player.position.y -= player.velocity.y;
    handleKeys();
  }
}

// instantiate game properties from classes
function init() {
  // create player object
  player = new Player();
  tree = new Tree({ x: 10, y: 200 });
}

//////////////////////////    ANIMATION LOOP    //////////////////////////
function animate() {
  // built in animation loop function
  requestAnimationFrame(animate);
  context.fillStyle = "white";
  // clear the canvas before drawing new frame
  context.fillRect(0, 0, canvas.width, canvas.height);
  mover();
  tree.update();
  player.update();
}

//////////////////////////    GAME CREATION         //////////////////////////
init();

//////////////////////////    GAME LOOP         //////////////////////////
animate();

//////////////////////////    EVENT LISTENERS     //////////////////////////
// Keydown
window.addEventListener("keydown", ({ key }) => {
  switch (key.toString()) {
    case "a":
      keys.left.pressed = true;
      break;
    case "d":
      keys.right.pressed = true;
      break;
    case "s":
      keys.down.pressed = true;
      break;
    case "w":
      keys.up.pressed = true;
      break;
  }
});
// Keyup;
window.addEventListener("keyup", ({ key }) => {
  switch (key.toString()) {
    // left
    case "a":
      keys.left.pressed = false;
      break;
    // right
    case "d":
      keys.right.pressed = false;
      break;
    // down
    case "s":
      keys.down.pressed = false;
      break;
    // up
    case "w":
      keys.up.pressed = false;
=======
//////////////////////////    GAME CREATION     //////////////////////////
// PLAYER OBJECT
let player = new Player();
//////   parallax effect objects     /////////
// background object
let backgroundObject = new ParallaxObject({
  x: 0,
  y: 0,
  image: backgroundImage,
});
// cloud objects
let cloudObjects = [
  new ParallaxObject({
    x: 170,
    y: 180,
    image: cloudImage,
  }),
  new ParallaxObject({
    x: 800,
    y: 120,
    image: cloudImage,
  }),
];
// house objects
let houseObjects = [
  new ParallaxObject({
    x: 50,
    y: canvas.height - houseImage.height,
    image: houseImage,
  }),
  new ParallaxObject({
    x: 850,
    y: canvas.height - houseImage.height,
    image: houseImage,
  }),
];
// fence objects
let fenceObjects = [
  new ParallaxObject({
    x: houseObjects[0].position.x - houseObjects[0].width / 9,
    y: canvas.height - fenceImage.height + fenceImage.height / 3,
    image: fenceImage,
  }),
  new ParallaxObject({
    x: houseObjects[1].position.x - houseObjects[1].width / 9,
    y: canvas.height - fenceImage.height + fenceImage.height / 3,
    image: fenceImage,
  }),
];
// platform object
let platforms = [
  new Platform({ x: -1, y: canvas.height - 100, image: poleImage }),
  new Platform({ x: 400, y: canvas.height - 200, image: poleImage }),
];
// WIN CONDITION
let scrollOffset = 0;

//////////////////////////    INIT FUNCTION - RESETS GAME  //////////////////////////
function init() {
  // player object
  player = new Player();
  ///////   parallax effect objects     //////////
  // background object
  backgroundObject = new ParallaxObject({
    x: 0,
    y: 0,
    image: backgroundImage,
  });
  cloudObjects = [
    new ParallaxObject({
      x: 170,
      y: 180,
      image: cloudImage,
    }),
    new ParallaxObject({
      x: 800,
      y: 120,
      image: cloudImage,
    }),
  ];
  // house objects
  houseObjects = [
    new ParallaxObject({
      x: 50,
      y: canvas.height - houseImage.height,
      image: houseImage,
    }),
    new ParallaxObject({
      x: 850,
      y: canvas.height - houseImage.height,
      image: houseImage,
    }),
  ];
  // house objects
  fenceObjects = [
    new ParallaxObject({
      x: houseObjects[0].position.x - houseObjects[0].width / 9,
      y: canvas.height - fenceImage.height + fenceImage.height / 3,
      image: fenceImage,
    }),
    new ParallaxObject({
      x: houseObjects[1].position.x - houseObjects[1].width / 9,
      y: canvas.height - fenceImage.height + fenceImage.height / 3,
      image: fenceImage,
    }),
  ];
  // platform object
  platforms = [
    new Platform({
      x: -1,
      y: canvas.height - 100,
      image: poleImage,
    }),
    new Platform({
      x: 400,
      y: canvas.height - 200,
      image: poleImage,
    }),
  ];
  // WIN CONDITION
  scrollOffset = 0;
}
//////////////////////////    ANIMATION LOOP    //////////////////////////
function animate() {
  // built in animation loop function
  requestAnimationFrame(animate);
  ctx.fillStyle = "white";
  // clear the canvas before drawing new frame
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Y Position move
  player.position.y += player.velocity.y;
  // if the jump key flag is raised and player is not already in the air, jump and reset the flag
  if (keys.up.jumpFlag && player.velocity.y == 0) {
    player.velocity.y -= 10;
    keys.up.jumpFlag = false;
  }
  // if the player is not at the bottom of the canvas, apply gravity
  else if (
    player.position.y + player.height + player.velocity.y <=
    canvas.height
  ) {
    player.velocity.y += gravity;
  } else if (player.position.y - 2 * player.height > canvas.height) {
    console.log("death");
    init();
  }

  // X POSITION MOVE
  player.position.x += player.velocity.x;

  // CONDITION: PLAYER INSIDE NO SCROLL REGION
  if (player.position.x >= 100 && player.position.x <= 400) {
    // move right
    if (keys.right.pressed) {
      player.velocity.x = 5;
    }
    // move left
    else if (keys.left.pressed) {
      player.velocity.x = -5;
    }
    // stop
    else player.velocity.x = 0;
  }
  // CONDITION: PLAYER AT LEFT THRESHOLD, SCROLL BACK
  else if (player.position.x < 100) {
    // move right
    if (keys.right.pressed) {
      player.velocity.x = 5;
    }
    // move left
    else if (keys.left.pressed) {
      player.velocity.x = 0;
      cloudObjects.forEach((cloudObject) => {
        cloudObject.position.x += 1;
      });
      houseObjects.forEach((houseObject) => {
        houseObject.position.x += 3;
      });
      fenceObjects.forEach((fenceObject) => {
        fenceObject.position.x += 3;
      });
      platforms.forEach((platform) => {
        platform.position.x += 5;
      });
    }
    // stop
    else player.velocity.x = 0;
  }
  // CONDITION: PLAYER AT RIGHT THRESHOLD, SCROLL FORWARD
  else {
    // move right
    if (keys.right.pressed) {
      player.velocity.x = 0;
      cloudObjects.forEach((cloudObject) => {
        cloudObject.position.x -= 1;
      });
      houseObjects.forEach((houseObject) => {
        houseObject.position.x -= 3;
      });
      fenceObjects.forEach((fenceObject) => {
        fenceObject.position.x -= 3;
      });
      platforms.forEach((platform) => {
        platform.position.x -= 5;
        scrollOffset += 5;
        // WIN CONDITION
        console.log(scrollOffset);
      });
    }
    // move left
    else if (keys.left.pressed) {
      player.velocity.x = -5;
    }
    // stop
    else player.velocity.x = 0;
  }

  //////////////////////////    DRAW OBJECTS     //////////////////////////
  // BACKGROUND
  backgroundObject.draw();

  // MIDGROUND
  cloudObjects.forEach((cloudObject) => {
    cloudObject.draw();
  });
  houseObjects.forEach((houseObject) => {
    houseObject.draw();
  });
  fenceObjects.forEach((fenceObject) => {
    fenceObject.draw();
  });

  // FOREGROUND
  // draw platforms
  platforms.forEach((platform) => {
    platform.draw();
  });

  // platform collision detection last
  platforms.forEach((platform) => {
    if (
      player.position.y + player.height <= platform.position.y + 35 &&
      player.position.y + player.height + player.velocity.y >=
        platform.position.y + 35 &&
      player.position.x + player.width >= platform.position.x &&
      player.position.x <= platform.position.x + platform.width
    ) {
      player.velocity.y = 0;
    }
  });
  player.update();
}

//////////////////////////    ANIMATION LOOP    //////////////////////////
animate();

//////////////////////////    EVENT LISTENERS     //////////////////////////
// keyCodes: A(left) = 65, S(down) = 83, D(right) = 68, W(up) = 87
// KEYDOWN
window.addEventListener("keydown", ({ keyCode }) => {
  switch (keyCode) {
    case 65:
      keys.left.pressed = true;
      break;
    case 68:
      keys.right.pressed = true;
      break;
    case 83:
      break;
    case 87:
      // check double jump
      if (player.velocity.y == 0) {
        keys.up.jumpFlag = true;
      }
      break;
  }
});
// KEYUP
window.addEventListener("keyup", ({ keyCode }) => {
  switch (keyCode) {
    // left
    case 65:
      keys.left.pressed = false;
      break;
    // right
    case 68:
      keys.right.pressed = false;
      break;
    // down
    case 83:
      break;
    // up
    case 87:
>>>>>>> 6828b9c1733aea07b93cdcc35f3334c6ac50ceb1
      break;
  }
});
