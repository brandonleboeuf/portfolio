// creat toggel access hidden pages if password is valid

const input = document.querySelector("input");
input.addEventListener("input", changePage);

let isSelected = document.getElementById("resume");

// const dimensions = document.getElementsByClassName("dimensions");
// console.log(dimensions[1]);

function changePage(e) {
  let pw = e.target.value.toLowerCase();

  if (
    pw === "d&d" ||
    pw === "dnd" ||
    pw === "dungeons and dragons" ||
    pw === "dungeons & dragons"
  ) {
    isSelected.classList.add("hidden"); // Hides current page
    isSelected = document.getElementById("d_and_d"); // Sets new page as isSelected
    isSelected.classList.remove("hidden"); // Removes .hidden class
  } else if (pw === "donut") {
    isSelected.classList.add("hidden");
    isSelected = document.getElementById("donut");
    isSelected.classList.remove("hidden");
  } else if (pw === "jurassic park" || pw.length === 15) {
    isSelected.classList.add("hidden");
    isSelected = document.getElementById("jurassicPark");
    isSelected.classList.remove("hidden");
    let audio = new Audio("./styles/jurassicPark/ahahah.mp3");
    audio.play();
  } else {
    isSelected.classList.add("hidden");
    isSelected = document.getElementById("resume");
    isSelected.classList.remove("hidden");
  }
}

// popmotion pysics for navigation

const { styler, spring, listen, pointer, value } = window.popmotion;

const ball = document.querySelector(".grab");
const divStyler = styler(ball);
const ballXY = value({ x: 0, y: 0 }, divStyler.set);

listen(ball, "mousedown touchstart").start((e) => {
  e.preventDefault();
  pointer(ballXY.get()).start(ballXY);
});

listen(document, "mouseup touchend").start(() => {
  spring({
    from: ballXY.get(),
    velocity: ballXY.getVelocity(),
    to: { x: 0, y: 0 },
    stiffness: 200,
    mass: 5,
    damping: 10,
  }).start(ballXY);
});

const name = document.querySelector(".name");
const nameStyler = styler(name);
const nameXY = value({ x: 0, y: 0 }, nameStyler.set);

listen(name, "mousedown touchstart").start((e) => {
  e.preventDefault();
  pointer(nameXY.get()).start(nameXY);
});

listen(document, "mouseup touchend").start(() => {
  spring({
    from: nameXY.get(),
    velocity: nameXY.getVelocity(),
    to: { x: 0, y: 0 },
    stiffness: 200,
    mass: 5,
    damping: 10,
  }).start(nameXY);
});
