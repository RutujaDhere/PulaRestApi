const music = document.getElementById("music");


music.addEventListener("click", function() {
  console.log("clicked");
  var audio = new Audio('css/sounds/music.mp3');
  audio.play();
})





// const heart = document.getElementById("heart");


// heart.addEventListener("click", function(){
//     setInterval(createHeart, 300);
   
// })

// function createHeart() {
//     const heart = document.createElement('div');
//     heart.classList.add("heart");
//     heart.style.left = Math.random() * 100 + "vw";
//     heart.style.animationDuration = Math.random() * 2 + 3 +"s";
//     heart.innerText = "💜";
//     document.body.appendChild(heart);
    
//     setTimeout(function() {
//       heart.remove();
//     }, 4000);
//   }