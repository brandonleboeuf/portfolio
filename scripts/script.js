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
  } else if (pw === "jurassic park") {
    isSelected.classList.add("hidden");
    isSelected = document.getElementById("jurassicPark");
    isSelected.classList.remove("hidden");
  } else {
    isSelected.classList.add("hidden");
    isSelected = document.getElementById("resume");
    isSelected.classList.remove("hidden");
  }
}
