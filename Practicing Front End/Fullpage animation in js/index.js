// you see down is a constructor function just didnt take it in varaible
new fullpage("#fullpage",{
    autoScrolling:true,     //part of fullpage js min link
    navigation:true,
    onLeave:(origin,destination,direction)=>{
        const section=destination.item;
        const title=section.querySelector("h1");
        const tl=new TimelineMax({delay:0.5});
        tl.fromTo(title,0.5,{y:"50",opacity:0},{y:0,opacity:1});
        
        if(destination.index===1){
            const chairs=document.querySelectorAll(".chair");
            const description=document.querySelector(".description");
            tl.fromTo(description,0.5,{y:"50",opacity:0},{y:0,opacity:1})
            .fromTo(chairs,0.5,{x:'700'},{x:"-200"})
            .fromTo(chairs[0],0.6,{opacity:1},{opacity:1})
            .fromTo(chairs[1],0.6,{opacity:0},{opacity:1})
            .fromTo(chairs[2],0.7,{opacity:0},{opacity:1})
        }
        else if(destination.index===2){
            const sofa=document.querySelector(".sofa");
            const lamp=document.querySelector(".lamp");
            tl.fromTo(sofa,0.7,{x:"100%"},{x:"-2%"})
            .fromTo(lamp,1,{x:"-100%"},{x:"4%"})
        }
    }
})

