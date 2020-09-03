
window.addEventListener("load", checkWindowSize)
window.addEventListener("resize", checkWindowSize)

const header = document.getElementById("header")
const menuBtns = document.getElementById("menuBtns")
const button = document.getElementById("main-menu-toggle")
button.addEventListener('click', toggleBtn)

function checkWindowSize() {
  if (window.matchMedia("(min-width: 850px)").matches) {
    
    createHeadroom()
    // IF NOT MOBILE: Deactivates bubbling for mobile menu
    menuBtns.removeEventListener('click', toggleBtn, true)
    
  } else {
    
    // IF MOBILE: Initiates bubbling to close menu
    menuBtns.addEventListener('click', toggleBtn, true)
    toggleBtn();
  }
}

function createHeadroom() {
  const headroom = new Headroom(header, {
    tolerance : {
      up : 5,
      down : 0
    }
  });
  headroom.init();
} 

// Opens and Closes mobile menu
function toggleBtn() {
  const menu = document.getElementById("drop")
  menu.classList.toggle("dropMenuTog")
  button.classList.toggle("menuDrop")
}