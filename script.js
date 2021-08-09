const drawFirst = () => {
  const first = document.querySelector("#first");
  const firstCanvas = first.getContext("2d");

  firstCanvas.font = "50px Comic Neue";
  firstCanvas.strokeText("Nikhil", 80, 80);
};

const drawSecond = () => {
  const second = document.querySelector("#second");
  const secondCanvas = second.getContext("2d");

  const canvasGradient = secondCanvas.createLinearGradient(0, 0, 150, 0);
  canvasGradient.addColorStop(0.33, "orange");
  canvasGradient.addColorStop(0.66, "white");
  canvasGradient.addColorStop(1, "green");

  secondCanvas.fillStyle = canvasGradient;
  secondCanvas.fillRect(10, 10, 150, 80);
};

drawFirst();
drawSecond();
