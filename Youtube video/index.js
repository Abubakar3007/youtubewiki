
$(document).ready(function() {
    // $('.acc-container .acc:nth-child(1) .acc-head').addClass('active');
    // $('.acc-container .acc:nth-child(1) .acc-content').slideDown();
    $('.acc-head').click( function() {
        if($(this).hasClass('active')) {
          $(this).siblings('.acc-content').slideUp();
          $(this).removeClass('active');
        }
        else {
          $('.acc-content').slideUp();
          $('.acc-head').removeClass('active');
          $(this).siblings('.acc-content').slideToggle();
          $(this).toggleClass('active');
        }
    });     
    });

let btn=document.getElementById('btn')
let show=document.querySelector(".showVideo");
btn.addEventListener("click",function(e){
    e.preventDefault()
    show.classList.add("show")

})
let video=document.getElementById('video');
let audioclick=document.getElementById("audioclick");
let mp4=document.getElementById("mp4");
let audio=document.getElementById("audio")
audioclick.addEventListener("click",function(e){
    e.preventDefault();
    mp4.classList.add("hide");
    mp4.classList.remove("show");
    audio.classList.add("show");
    audio.classList.remove("hide");


})
video.addEventListener("click",function(e){
    e.preventDefault();
    mp4.classList.add("show");
    mp4.classList.remove("hide");
    audio.classList.add("hide");
    audio.classList.remove("show");

})
let endHide=document.querySelector('.endhidenavbar')
let cross=document.querySelector(".logoCross");
let hubberger=document.querySelector(".humberger");
hubberger.addEventListener("click",function(e){
    e.preventDefault();
    endHide.classList.add("show");
    endHide.classList.remove("hide");
    endHide.classList.add("left")
})
cross.addEventListener("click",function(e){
    e.preventDefault();
endHide.classList.add("hide");

})




$(".TabLink ul li").click(function(){
    $(this).addClass("active").siblings().removeClass("active")
})