function toggleMenu(){
    document.getElementById("nav").classList.toggle("active");
}

/* Counter Animation */

function counter(id,start,end,speed){

    let obj=document.getElementById(id);
    let current=start;

    let timer=setInterval(()=>{

        current++;
        obj.innerHTML=current+"+";

        if(current>=end){
            clearInterval(timer);
        }

    },speed);

}

counter("students",0,2500,1);
counter("faculty",0,150,20);
counter("placements",0,1200,2);

/* Scroll Animation */

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
});

document.querySelectorAll(".card,.facility,.stat").forEach(el => {

    el.style.opacity="0";
    el.style.transform="translateY(50px)";
    el.style.transition="all 1s";

    observer.observe(el);

});