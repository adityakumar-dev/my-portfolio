    const navbar = document.querySelector('header');
    const closeDiv = document.querySelector('.hamburger');
    const smallSizeLogo = document.querySelector('.hide');
const bio = document.querySelector('.bio');

const navbarLinks = document.querySelectorAll('.navbar a')

navbarLinks.forEach(function (item) {
    item.addEventListener('click', function (event) {
       
        navbarLinks.forEach(function (a) {
            a.classList.remove('active');
        });
        item.classList.add('active');
    });
});


const sections = document.querySelectorAll('.home, .skills, .projects, .contacts');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const id = entry.target.getAttribute('id');
        const correspondingLink = document.querySelector(`a[href="#${id}"]`);

        if (entry.isIntersecting) {
            navbarLinks.forEach(link => link.classList.remove('active'));
            correspondingLink.classList.add('active');
        }
    });
}, {
    threshold: 0.5
});

const contact_me = document.querySelectorAll('.contact-me');

//twitter
contact_me[0].addEventListener('click', (event) => {
     window.open('https://x.com/adityakumar_dev', "_blank")
})
//linkedin
contact_me[1].addEventListener('click', (event) => {
     window.open('https://www.linkedin.com/in/adityakumar-dev/', "_blank")
})

//gmail
contact_me[2].addEventListener('click', (event) => {
    window.open('mailto:adityakumar.devxlinux@gmail.com', "_blank");
});


//github
contact_me[3].addEventListener('click', (event) => {
     window.open('https://github.com/adityakumar-dev', "_blank")
})

sections.forEach(section => {
    observer.observe(section);
});
function toggleMenu() {
    if (navbar.style.display !== 'none') {
                navbar.style.display = 'none'

          for (var i = 0; i < closeDiv.children.length; i++){
              closeDiv.style = '';
              closeDiv.children[i].style = ""
              closeDiv.classList.add('.hamburger')
              closeDiv.children[i].classList.add('close');
              smallSizeLogo.style = 'display : flex;'
              
        }

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

window.addEventListener('resize', function () {
      
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
