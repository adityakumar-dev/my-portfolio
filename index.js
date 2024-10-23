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

