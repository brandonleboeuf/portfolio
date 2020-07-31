// creat toggel access hidden pages if password is valid

const input = document.getElementById("passwordInput");
input.addEventListener("input", changePage);

let isSelected = document.getElementById("main");

// const dimensions = document.getElementsByClassName("dimensions");
// console.log(dimensions[1]);

// Keeps JurassicPark audio from firing more than once every 30seconds
let readyToPlay = true;

function changePage(e) {
  let pw = e.target.value.toLowerCase();
  let pwPick;

  if (pw.length >= 15) {
    pw = "jurassic park";
  }
  
  switch (pw) {
    case "d&d": 
    case "dungeons and dragons":
    case "dungeons & dragons":
      pwPick = document.getElementById("d-and-d"); // Sets new page as isSelected
      break;
    case "donut":
      pwPick = document.getElementById("donut");
      break;
    case ("calc" || "calculator"):
      pwPick = document.getElementById("calc");
      break;
    case "jurassic park":
    
      pwPick = document.getElementById("jurassicPark");
      let audio = new Audio("./public/audio/ahahah.mp3");
      // Sets timeout to only allow the audio to play once every 30 seconds
      function timmer(){
        setTimeout(function () {
          readyToPlay = true;
        }, 30000);

        if (readyToPlay) {
          audio.play();
          readyToPlay = false;
        }
      }

      timmer();
      break;
    default:
      pwPick = document.getElementById("main");
  }
  isSelected.classList.add("hidden"); 
  isSelected = pwPick;
  isSelected.classList.remove("hidden");
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

// popmotion pysics for "Brandon LeBoeuf" (top left of page)

const name = document.querySelector(".logo");
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
