// import { Swiper, SwiperOptions } from "swiper";
// Import Swiper and modules
import { Swiper, Navigation, Pagination, Scrollbar, EffectCube } from "swiper";

// Install modules
Swiper.use([Navigation, Pagination, Scrollbar, EffectCube]);

// Now you can use Swiper
// let swiper = new Swiper(".swiper-container", {
//   speed: 400,
//   effect: "cube",
//   loop: true,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   // ...
// });

let swiper = new Swiper(".swiper-container", {
  speed: 400,
  spaceBetween: 100,
  effect: "cube",
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
