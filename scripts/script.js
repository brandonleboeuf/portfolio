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

let isSelected = document.getElementById("resume");

// const dimensions = document.getElementsByClassName("dimensions");
// console.log(dimensions[1]);

function changePage(e) {
  let pw = e.target.value.toLowerCase();
  let prev = isSelected;

  if (
    pw === "d&d" ||
    pw === "dungeons and dragons" ||
    pw === "dungeons & dragons"
  ) {
    // class change
    isSelected.classList.add("hidden");
    isSelected = document.getElementById("d_and_d");
    isSelected.classList.remove("hidden");
  } else if (pw === "resume") {
    isSelected.classList.add("hidden");
    isSelected = document.getElementById("resume");
    isSelected.classList.remove("hidden");
  } else if (pw === "donut") {
    isSelected.classList.add("hidden");
    isSelected = document.getElementById("donut");
    isSelected.classList.remove("hidden");
  }
}
