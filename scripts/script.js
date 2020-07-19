// jarasic park password denial gif
{
  /* <iframe src='https://gfycat.com/ifr/LikelyWhichHarrier' frameborder='0' scrolling='no' allowfullscreen width='640' height='404'></iframe><p> <a href="https://gfycat.com/likelywhichharrier">via Gfycat</a></p> */
}

// script taken from https://github.com/MarkHjorth/nedry

//    <script>
//   ahahah = new Audio("./styles/jarasicPark/ahahah.mp3");
//   ahahah.addEventListener('ended', function() {
//     this.play();
//   }, false);
//   ahahah.play();
// </script>

// creat toggel access hidden pages if password is valid

const input = document.querySelector("input");
input.addEventListener("input", changePage);

let currentDisplaied = document.getElementById("resume");
const dimensions = document.getElementsByClassName("dimensions");
console.log(dimensions[1]);

function changePage(e) {
  let pw = e.target.value;

  if (
    pw === "d&d" ||
    pw === "dungeons and dragons" ||
    pw === "dungeons & dragons"
  ) {
    currentDisplaied.classList.add("hidden");
    currentDisplaied = document.getElementById("d_and_d");
    currentDisplaied.classList.remove("hidden");
    document.getElementById("dimensions").classList.remove("fadeBlue");
    document.getElementById("dimensions").classList.add("dandd");
  } else if (pw === "resume") {
    currentDisplaied.classList.add("hidden");
    currentDisplaied = document.getElementById("resume");
    currentDisplaied.classList.remove("hidden");
    document.getElementById("dimensions").classList.add("fadeBlue");
    document.getElementById("dimensions").classList.remove("dandd");
  }
}
