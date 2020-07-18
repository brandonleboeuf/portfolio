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

/*
// creat toggel access hidden pages if password is valid

const password = document.getElementById("passwordInput");

const handleInput = function (e) {
  const input = password.onchange.tolowercase;

  if (
    input === "d&d" ||
    input === "dungeons and dragons" ||
    input === "dungeons & dragons"
  ) {
  }
};
 */

// img gallery
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const galleryImgs = document.querySelectorAll(".gallery-img ");
let currentlySelected = 0;

prevBtn.addEventListener("click", function () {
  galleryImgs[currentlySelected].classList.remove("active");
  currentlySelected--;
  galleryImgs[currentlySelected].classList.add("active");
  nextBtn.disabled = false;
  if (currentlySelected === 0) {
    prevBtn.disabled = true;
  }
});

nextBtn.addEventListener("click", function () {
  galleryImgs[currentlySelected].classList.remove("active");
  currentlySelected++;
  galleryImgs[currentlySelected].classList.add("active");
  prevBtn.disabled = false;
  if (galleryImgs.length === currentlySelected + 1) {
    nextBtn.disabled = true;
  }
});
