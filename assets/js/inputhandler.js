addEventListener("keydown", function (e) {
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
      break;
    case "ArrowLeft" || "KeyA":
      keys.a.pressed = false;
      break;
    case "ArrowDown" || "KeyS":
      keys.a.pressed = false;
      break;
    case "ArrowRight" || "KeyD":
      keys.a.pressed = false;
      break;
    default:
      break;
  }
});
