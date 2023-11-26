let nav = document.querySelector("nav");
window.document.addEventListener("scroll",()=>{
if(window.scrollY > 580){
nav.classList.add("sticky")
}else{
nav.classList.remove("sticky")
}

})
let navlist = document.querySelector(".right-nav");
let menu = document.querySelector(".menubar");
        
        menu.addEventListener("click",()=>{
            menu.classList.toggle("click")
            navlist.classList.toggle("open")
        });
        navlist.addEventListener("click",(e)=>{
            let active = document.querySelector(".active");
            if(active){
                active.classList.remove("active");
                menu.classList.remove("click")
            }
            e.target.classList.add("active");
            navlist.classList.remove("open")
            
        });

let slide = document.querySelector(".slide");
let slider = document.querySelector(".slider");
let slidest = document.querySelector(".slidest");


let span = document.querySelectorAll("span");
for(let i = 0;i<span.length;i++){
    span[i].addEventListener("click",(e)=>{
        let s = document.querySelector(".s");
        if(s){
            s.classList.remove("s")
        }
        e.target.classList.add("s")
        // console.log(e.target.classList)
        if(e.target.classList[0]  === "first"){
            slide.classList.add("move0")
            slide.classList.remove("move240")
            slide.classList.remove("move-240")
            slide.classList.remove("move-120")
            slide.classList.remove("move120")
            slider.classList.remove("move0")
            slider.classList.add("move120")
            slider.classList.remove("move-120")
            slider.classList.remove("move-240")
            slider.classList.remove("move240")
            slidest.classList.add("move240")
            slidest.classList.remove("move0")
            slidest.classList.remove("move-120")
            slidest.classList.remove("move-240")
            slidest.classList.remove("move120")
            
            
        }else if(e.target.classList[0] === "second"){
            slide.classList.remove("move0")
            slide.classList.remove("move240")
            slide.classList.remove("move-240")
            slide.classList.add("move-120")
            slide.classList.remove("move120")
            slider.classList.add("move0")
            slider.classList.remove("move120")
            slider.classList.remove("move-120")
            slider.classList.remove("move-240")
            slider.classList.remove("move240")
            slidest.classList.remove("move240")
            slidest.classList.remove("move0")
            slidest.classList.remove("move-120")
            slidest.classList.remove("move-240")
            slidest.classList.add("move120")
            
            
            
            
        }else if(e.target.classList[0] === "third"){
            slide.classList.remove("move0")
            slide.classList.remove("move240")
            slide.classList.add("move-240")
            slide.classList.remove("move-120")
            slide.classList.remove("move120")
            slider.classList.remove("move0")
            slider.classList.remove("move120")
            slider.classList.add("move-120")
            slider.classList.remove("move-240")
            slider.classList.remove("move240")
            slidest.classList.add("move0")
            slidest.classList.remove("move240")
            slidest.classList.remove("move-120")
            slidest.classList.remove("move-240")
            slidest.classList.remove("move120")
           

        }
 
    })
}
let sb = document.querySelector(".sub1");
let s = document.querySelector(".sub2");
let a = document.querySelector(".sub3");
let b = document.querySelector(".sub4");
let left_arrow = document.querySelector(".left")
console.log(left_arrow)
let right_arrow = document.querySelector(".right")
console.log(right_arrow)
let arrow = document.getElementsByClassName("arrow");
    for(let ar of arrow){
        ar.addEventListener("click",(e)=>{
            if(e.target.classList[1] === "left"){
                console.log("Yessss")
                sb.classList.add("scroll-100")
                s.classList.add("scroll-15")
                a.classList.add("scroll-40");
                b.classList.add("scroll-65");
            }else if(e.target.classList[1] === "right"){
                sb.classList.remove("scroll-100")
                s.classList.remove("scroll-15")
                a.classList.remove("scroll-40");
                b.classList.remove("scroll-65");
                
            }
        })
    }