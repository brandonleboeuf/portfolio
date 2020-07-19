// jarasic park password denial gif
{
  /* <iframe src='https://gfycat.com/ifr/LikelyWhichHarrier' frameborder='0' scrolling='no' allowfullscreen width='640' height='404'></iframe><p> <a href="https://gfycat.com/likelywhichharrier">via Gfycat</a></p> */
}

// script taken from https://github.com/MarkHjorth/nedry
{
  /* <script>
  ahahah = new Audio("./styles/jarasicPark/ahahah.mp3"); 
  ahahah.addEventListener('ended', function() {
    this.play();
  }, false);
  ahahah.play();
</script> */
}

// creat toggel access hidden pages if password is valid

const input = document.querySelector("input");
input.addEventListener("input", updateValue);

// const dimensions = document.getElementById("dimensions").childNodes;

let currentDisplaied = document.getElementById("resume");

console.log(currentDisplaied);

function updateValue(e) {
  let pw = e.target.value;
  // console.log(pw);
  if (pw === "d&d") {
    console.log("it worked!");
  }
}

// console.log(input);
// const handleInput = function (e) {
//   if (
//     input === "d&d" ||
//     input === "dungeons and dragons" ||
//     input === "dungeons & dragons"
//   ) {
//   }
// };
