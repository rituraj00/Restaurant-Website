burger = document.querySelector('.burger')
navigation = document.querySelector('.navigation')
navList = document.querySelector('.nav_list')
rightNav = document.querySelector('.rightnav')
navbar = document.querySelector('.navbar');

 


burger.addEventListener('click', ()=>{
    rightNav.classList.toggle('resp-btn');
    // navbar.classList.toggle('resp-nav');
    navList.classList.toggle('resp-nav');
    
    
})