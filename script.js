const drawFirst = () => {
  const first = document.querySelector("#first");
  const canFirst = first.getContext("2d");

  canFirst.font = "50px Comic Neue";
  canFirst.strokeText("Nikhil", 80, 80);
};

drawFirst();
