var exp = document.querySelectorAll('.detail');
var default_detail = 0;

function Job(srno){
  if(default_detail !== srno ){
    exp[default_detail].classList.remove("active");
    exp[srno].classList.add("active");
    default_detail = srno;

    gsap.from(
      document.getElementsByClassName("active")[0].children,
      {
        y:50,
        opacity:0,
        duration:0.5,
        stagger:0.2
      }
    )
  }
}

gsap.from(
  document.getElementsByClassName("intro")[0].children,
  {
    y:100,
    opacity:0,
    duration:1.5,
    stagger:0.3
  }
)

// gsap.from(
//   document.getElementsByClassName("about-me")[0].children,
//   {
//     y:100,
//     opacity:0,
//     duration:1.5,
//     stagger:0.5,
//     scrollTrigger:{
//       trigger:".about-me",
//       markers:true,
//     }
//   }
// )
