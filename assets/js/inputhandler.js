addEventListener("keydown", function (e) {
  console.log(e.code);
  switch (e.code) {
    case "ArrowUp" || "KeyW":
      keys.w.pressed = true;
      lastKey = 'w';
      break;
    case "ArrowLeft" || "KeyA":
      keys.a.pressed = true;
      lastKey = 'a';
      break;
    case "ArrowDown" || "KeyS":
      keys.a.pressed = true;
      lastKey = 's';
      break;
    case "ArrowRight" || "KeyD":
      keys.a.pressed = true;
      lastKey = 'd';
      break;
    default:
      break;
  }
});
addEventListener("keyup", function (e) {
  switch (e.code) {
    case "ArrowUp" || "KeyW":
      keys.w.pressed = false;
      // lastKey = 'w';
      break;
    case "ArrowLeft" || "KeyA":
      keys.a.pressed = false;
      // lastKey = 'a';
      break;
    case "ArrowDown" || "KeyS":
      keys.a.pressed = false;
      // lastKey = 's';
      break;
    case "ArrowRight" || "KeyD":
      keys.a.pressed = false;
      // lastKey = 'd';
      break;
    default:
      break;
  }
});
