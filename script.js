// Smooth scrolling

document.querySelectorAll("a[href^='#']").forEach(link=>{

    link.addEventListener("click",function(e){

        e.preventDefault();

        document.querySelector(
            this.getAttribute("href")
        ).scrollIntoView({
            behavior:"smooth"
        });

    });

});



// Card reveal animation

const cards=document.querySelectorAll(".card");


const observer=new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});


cards.forEach(card=>{

    observer.observe(card);

});



// Create floating particles

for(let i=0;i<25;i++){

    let particle=document.createElement("div");

    particle.className="particle";

    particle.style.left=Math.random()*100+"%";

    particle.style.animationDuration=
    (5+Math.random()*5)+"s";

    document.body.appendChild(particle);

      }
