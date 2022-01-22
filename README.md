# P5.js-vite Starter Template

[Vite](https://vitejs.dev/) starter template to scaffold a new [p5.js](https://p5js.org) project.

This is an unopinionated template; aside from P5.js and Vite, the rest of your project's tools are entirely up to you.

## Installation

Pull the template files with [degit](https://github.com/Rich-Harris/degit) and install dependencies.

```
npx degit makinteract/p5js-vite my-project

cd my-project
npm install
npm run dev
```

## npm scripts

- `npm run dev` - Starts the development server at port 3000
- `npm run build` - Builds the application
- `npm run preview` - Serves the build files locally at port 5000

## A single p5.js sketch

```js
import '../css/style.css';
import sketch from 'p5js-wrapper';

sketch.setup = function () {
  createCanvas(800, 600);
};

sketch.draw = function () {
  background(127); // grey
  fill(255, 0, 0); // red
  noStroke();
  rectMode(CENTER);
  rect(width / 2, height / 2, 50, 50);
};

sketch.mousePressed = function () {
  console.log(`I am here at ${mouseX}:${mouseY}`);
};
```

And here the body of the html file:

```html
<body>
  <script type="module" src="/src/single_sketch.js"></script>
</body>
```

## Multiple p5.js sketches

If you want to use multiple sketches, you need to use a different syntax.

```js
import '../css/style.css';
import sketch from 'p5js-wrapper';

let sketch1 = new p5((p) => {
  p.setup = () => {
    const one = document.getElementById('one');
    p.createCanvas(one.clientWidth, one.clientHeight);
  };

  p.draw = () => {
    p.background(100);
  };
}, 'one');

// Sketch2
let sketch2 = new p5((p) => {
  p.setup = () => {
    const two = document.getElementById('two');
    p.createCanvas(two.clientWidth, two.clientHeight);
  };

  p.draw = () => {
    p.background(170);
  };
}, 'two');
```

This file is expecting two divs in the html file:

```html
<body>
  <script type="module" src="/src/multi_sketch.js"></script>
  <div id="one"></div>
  <div id="two"></div>
</body>
```
