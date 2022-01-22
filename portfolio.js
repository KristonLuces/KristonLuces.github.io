const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
})
//Back to top button end

//Hamburger menu 
const menuToggle = document.querySelector('.toggle')
// const menuLinks = document.querySelector('.menu')
const showcase = document.querySelector('.showcase')


menuToggle.addEventListener('click', () =>{
    menuToggle.classList.toggle('active')
    showcase.classList.toggle('active')
})

// const hideMenuToggle = () => {
//     const menuToggle = document.querySelector('.active')
//     if(window.innerWidth <= 768 && menuToggle) {
//         menuToggle.classList.toggle('active')
//         menuLinks.classList.remove('active')
//     }
// }

// menuLinks.addEventListener('click', hideMenuToggle)


//Hamburger menu end

//Typing animation
var typed = new Typed(".typing", {
    strings: ["Cybersecurity Analyst", "Web Developer", "IT Technician", "Researcher"],
    typeSpeed: 30,
    backSpeed: 20,
    loop: true
});
//Typing animation end

// JQuery Plugin
$('.skill-per').each(function(){
    var $this = $(this);
    var per = $this.attr('per');
    $this.css("width",per+'%');
    $({animatedValue: 0}).animate({animatedValue: per},{
      duration: 1000,
      step: function(){
          $this.attr('per', Math.floor(this.animatedValue) + '%');
      },
      complete: function(){
          $this.attr('per', Math.floor(this.animatedValue) + '%');
      }
    });
});
//JQuery End

//Portfolio
$(document).on('click', '.project-filter li',function(){
    $(this).addClass('project-filter-active').siblings().removeClass('project-filter-active')
})

$(document).ready(function(){
    $('.pro-list').click(function(){
        const value = $(this).attr('data-filter');
        if(value == 'all'){
            $('.project-box').show('1000');
        }
        else{
            $('.project-box').not('.'+value).hide('1000');
            $('.project-box').filter('.'+value).show('1000');
        }
    });
});
//Portfolio End

//Animations 
gsap.registerPlugin(ScrollTrigger);

gsap.from('.animate-about', {
    scrollTrigger: '.animate-about',
    duration: 0.6,
    opacity: 0,
    y: -150,
    stagger: 0.3
});

gsap.from('.animate-exp', {
    scrollTrigger: '.animate-exp',
    duration: 0.9,
    opacity: 0,
    y: -150,
    stagger: 0.6
});

gsap.from('.animate-skills', {
    scrollTrigger: '.animate-skills',
    duration: 0.9,
    opacity: 0,
    y: -150,
    stagger: 0.6
});

gsap.from('.animate-service', {
    scrollTrigger: '.animate-service',
    duration: 0.9,
    opacity: 0,
    y: -150,
    stagger: 0.6
});

gsap.from('.animate-portfolio', {
    scrollTrigger: '.animate-portfolio',
    duration: 0.9,
    opacity: 0,
    y: -150,
    stagger: 0.6
});

gsap.from('.animate-contact', {
    scrollTrigger: '.animate-contact',
    duration: 0.7,
    opacity: 0,
    y: -150,
    stagger: 0.1
});
//Animation End




//Contact Me Animation
const input = document.querySelectorAll(".input");

function focusFunc(){
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc(){
    let parent = this.parentNode;
    if(this.value == "") {
        
        parent.classList.remove("focus");
    }
}

input.forEach(input => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
});


//Autoplay video on low power mode
const videoElement = document.getElementById('video_id');
 videoElement.addEventListener('suspend', () => {
            // suspend invoked
            // show play button
        });

        videoElement.addEventListener('play', () => {
            // video is played
            // remove play button UI
        });
$('body').on('click touchstart', function () {
            const videoElement = document.getElementById('video_id');
            if (videoElement.playing) {
                // video is already playing so do nothing
            }
            else {
                // video is not playing
                // so play video now
                videoElement.play();
            }
    });
