    const navbar = document.querySelector('header');
    const closeDiv = document.querySelector('.hamburger');
const smallSizeLogo = document.querySelector('.hide');
const bio = document.querySelector('.bio');
function toggleMenu() {
    if (navbar.style.display === 'flex') {
          for (var i = 0; i < closeDiv.children.length; i++){
              closeDiv.style = '';
              closeDiv.children[i].style = ""
              closeDiv.classList.add('.hamburger')
              closeDiv.children[i].classList.add('close');
              smallSizeLogo.style = 'display : flex;'
              
        }

        navbar.style.display = 'none'
    } else {
        console.log(closeDiv.children[0]);
        closeDiv.classList.remove('.hamburger')
        // closeDiv.style = "top : 10px ; right : 10px;"
        closeDiv.children[0].style = "transform: rotate(45deg) ; margin : 4px 0; position : absolute;top : 10px ; right : 10px; "
        closeDiv.children[1].style = "transform: rotate(-45deg) ; margin : 4px 0; position : absolute;top : 10px ; right : 10px;"
        closeDiv.children[2].style = "display:none ;"
        navbar.style.display = 'flex';
        smallSizeLogo.style = 'display : none;'

   
    }

  
}

  window.addEventListener('resize',   function() {
      if (this.window.innerWidth < 1200) {
        // bio.style = "margin : 300px 20px;"
    }  
    else if (this.window.innerWidth < 768) {
            
            navbar.style.display = 'none';
            smallSizeLogo.style = 'display : flex';
          // closeDiv.style = 'display :none';
          

      } else {
          console.log(navbar.style.display);
              smallSizeLogo.style = 'display : none';
              navbar.style.display = 'flex';
        for (var i = 0; i < closeDiv.children.length; i++){
              closeDiv.style = '';
              closeDiv.children[i].style = ""
                closeDiv.classList.add('.hamburger')
            smallSizeLogo.style = 'display : none';
        
        closeDiv.children[i].classList.add('close');     
              
        }
        }
      
  });
var yScroll = 0;
window.addEventListener('scroll', function () {
    yScroll = window.scrollY;
    console.log(yScroll);
    if (yScroll > this.window.scrollY) {
        console.log("scrolling up")
    } if (yScroll < this.window.scrollY) {
        console.log('scrolling down')
    }
})
// let lastScrollTop = 0; // Variable to store the last scroll position

// window.addEventListener('scroll', function() {
//     const currentScroll = window.scrollY;  // Get current scroll position

//     // Detect if the user is scrolling down or up
//     if (currentScroll > lastScrollTop) {
//         // Scrolling down: Scroll to 100vh (viewport height)
//         if (currentScroll > 0) {
//             window.scrollTo({
//                 top: window.innerHeight,
//                 behavior: 'smooth'
//             });
//         }
//     } else {
//         // Scrolling up: Scroll to the top (0px)
//         if (currentScroll < window.innerHeight) {
//             window.scrollTo({
//                 top: 0,
//                 behavior: 'smooth'
//             });
//         }
//     }

//     lastScrollTop = currentScroll; // Update the last scroll position
// });


