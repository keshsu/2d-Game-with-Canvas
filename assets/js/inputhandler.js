addEventListener("keydown", function (e) {
  switch (e.code) {
    case "ArrowUp":
    case "KeyW":
      keys.w.pressed = true;
      lastKey = "w";
      break;
    case "ArrowLeft":
    case "KeyA":
      keys.a.pressed = true;
      lastKey = "a";
      break;
    case "ArrowDown":
    case "KeyS":
      keys.s.pressed = true;
      lastKey = "s";
      break;
    case "ArrowRight":
    case "KeyD":
      keys.d.pressed = true;
      lastKey = "d";
    break;
    default:
      break;
  }
});
addEventListener("keyup", function (e) {
  switch (e.code) {
    case "ArrowUp":
    case "KeyW":
      keys.w.pressed = false;
      break;
    case "ArrowLeft":
    case "KeyA":
      keys.a.pressed = false;
      break;
    case "ArrowDown":
    case "KeyS":
      keys.s.pressed = false;
      break;
    case "ArrowRight":
    case "KeyD":
      keys.d.pressed = false;
      break;
    default:
      break;
  }
});
