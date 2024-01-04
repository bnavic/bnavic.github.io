const slide = document.querySelector('.text-center');

window.addEventListener('scroll',()=>{

    const {scrollTop,clientHeight} = document.documentElement;

    const elementTop = slide.getBoundingClientRect().top;
    if(scrollTop > (scrollTop + elementTop).toFixed() - clientHeight *0.50)
    slide.classList.add('active')
})