function createAnimationLoop(updateFn) {
  let lastTime = 0;

  function loop(currentTime) {
    const deltaTime = currentTime - lastTime;
    lastTime = currentTime;

    updateFn(deltaTime);

    requestAnimationFrame(loop);
  }

  requestAnimationFrame(loop);
}

function compose(...fns) {
  return fns.reduce(
    (f, g) =>
      (...args) =>
        f(g(...args))
  );
}

function pipe(...fns) {
  return fns.reduce(
    (f, g) =>
      (...args) =>
        g(f(...args))
  );
}

const rotate = (speed) => (state) => ({
  ...state,
  rotation: (state.rotation + speed) % 360,
});

const scale = (amount) => (state) => ({
  ...state,
  scale: state.scale * amount,
});

const move = (dx, dy) => (state) => ({
  ...state,
  x: state.x + dx,
  y: state.y + dy,
});


function animate(...animations) {
  return (deltaTime) => (state) =>
    animations.reduce((s, anim) => anim(deltaTime / 1000)(s), state);
}

function render(ctx) {
  return (state) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.save();
    ctx.translate(state.x, state.y);
    ctx.rotate((state.rotation * Math.PI) / 180);
    ctx.scale(state.scale, state.scale);
    ctx.fillRect(-25, -25, 50, 50);
    ctx.restore();
    return state;
  };
}

// Initial state
const initialState = {
  x: 400,
  y: 300,
  rotation: 0,
  scale: 1,
};

// Compose our animation
const animationUpdate = pipe(
  animate(rotate(90), scale(Math.sin), move(50, 0)),
  render(ctx)
);

// Create and start the animation loop
createAnimationLoop((deltaTime) => {
  initialState = animationUpdate(deltaTime)(initialState);
});



