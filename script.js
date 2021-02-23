//color option
let maincolor=localStorage.getItem("color_option");
//check if color option is empty
if(maincolor!==null){
  //  localStorage.setItem("color_option",maincolor);
console.log(localStorage.getItem("color_option"));
document.documentElement.style.setProperty('--main-color',localStorage.getItem("color_option"));
}
let backgroundIntrval;
//cheak if backgroundoption is empty
let backgroundoption=true;
let cheakbackground=localStorage.getItem("background_option");
  if(cheakbackground!==null){
  if(cheakbackground==='true'){
  backgroundoption=true;
  randomizeImages();
  }
  else{
    backgroundoption=false;
  }
  console.log(cheakbackground);
}

//select js landing
let landing=document.querySelector(".landing");
const images=["bg-1.png","bg-2.png","bg-3.png","bg-4.png","bg-5.png"];
//let backgroundIntrval;
function randomizeImages(){
  if(backgroundoption===true){
    backgroundIntrval=setInterval(function(){
      let random=Math.floor(Math.random()*images.length);
      landing.style.backgroundImage='url("images/' +images[random] +'")';
  },1000);
  }
}
//seeting box
let toggle=document.querySelector(".toggle i");
let settingbox=document.querySelector(".setting-box");
toggle.addEventListener("click",function(){
   this.classList.toggle("fa-spin");
   settingbox.classList.toggle("open");
})

// swith colors
let colors=document.querySelectorAll(".option-box li");

colors.forEach(function(event){
   event.addEventListener("click",function(e){
   let color=e.target.dataset.color;
   //console.log(color);
   /*set color in root*/
  document.documentElement.style.setProperty('--main-color',color);


  //set color in local storage
  localStorage.setItem("color_option",e.target.dataset.color);
  let active=document.querySelectorAll(".active");
  active.forEach(function(act){
      act.classList.remove("active");
  })
  e.target.classList.add("active");
})

});
//swith background
let randombackgroung=document.querySelectorAll(".random-background span");
randombackgroung.forEach(function(event){
  event.addEventListener("click",function(e){
    let active=e.target.parentElement.querySelectorAll(".active");
    active.forEach(function(element){
      element.classList.remove("active");
    })
    e.target.classList.add("active");

    if(e.target.dataset.background==='yes'){
      backgroundoption=true;
      randomizeImages();
      localStorage.setItem("background_option", true);
    }
    else{
      backgroundoption=false;
      clearInterval(backgroundIntrval);
      localStorage.setItem("background_option", false);
    }
  })
})
//select skills
let ourskills=document.querySelector(".skills");
window.onscroll=function(){
  let setoftop=ourskills.offsetTop;

  let setofheight=ourskills.offsetHeight;
 
  let windowheight=this.innerHeight;

  let windowscroltop=this.pageYOffset;
  

  if(windowscroltop < (setoftop + setofheight - windowheight)){
    let skills=document.querySelectorAll(".skills .skill-box .skill-progress span");
    skills.forEach(function(skill){
      
     skill.style.width =skill.dataset.progress;

    });
  }
};
//.......................................................
//........................................................
//create popup with the images
let ourgallary=document.querySelectorAll(".gallary .imgages-box img");
ourgallary.forEach(function(img){
  img.addEventListener("click",function(event){
    //create overlay element
    let overlay=document.createElement("div");
    //add class to overlay
    overlay.className="popup-overlay";
    //append overlay to the body
  document.body.appendChild(overlay);
  //create popup box
  let popupbox=document.createElement("div");
  //add class to popupbox
  popupbox.className='popup-box';
//cheak if images contain alt
  if(img.alt!==null){
    //creat heading
    let imageheading=document.createElement("h3");
    //creat text for heading
    let imagetext=document.createTextNode(img.alt);
    //append imagetext to heading
    imageheading.appendChild(imagetext);
    //append image text to popupbox
    popupbox.appendChild(imageheading)
  }
   //create span
let spanimage=document.createElement("span");
let spantxt=document.createTextNode("X");
spanimage.appendChild(spantxt);
spanimage.className='close-button';
//add span txt to popupbox
popupbox.appendChild(spanimage);
  //create image
  let popupimage=document.createElement("img");
  //set image source
  popupimage.src=img.src;
  //add images to popup box
  popupbox.appendChild(popupimage);
  //add popup box to body
  document.body.appendChild(popupbox); 
 
  })
})
//close popup
document.addEventListener("click",function(e){
  if(e.target.className=='close-button'){
    //remove the current pop
    document.querySelector(".popup-box").remove();
   document.querySelector(".popup-overlay").remove();
  }
})
//............................................................
//bullets
//selet all bullets
let allbullets=document.querySelectorAll(".nav-bulltes .bullte");
let alllinks=document.querySelectorAll(".links a");
function scroll(element){
element.forEach(function(ele){
  ele.addEventListener("click",function(e){
    e.preventDefault();
    document.querySelector(e.target.dataset.section).scrollIntoView({
      behavior:'smooth'
    })
  })
})
}
scroll(allbullets);
scroll(alllinks);
//.......................................................
//bullets hide
let bulletspan=document.querySelectorAll(".option-box span");
let navbullets=document.querySelector(".nav-bulltes");
bulletspan.forEach(function(span){
  span.addEventListener("click",function(e){
    if(span.dataset.display==='yes'){
      navbullets.style.display='block';
      localStorage.setItem("bulletlocal",'block');
    }
    else{
      navbullets.style.display='none';
      localStorage.setItem("bulletlocal",'none');
    }
    let active=e.target.parentElement.querySelectorAll(".active");
    active.forEach(function(element){
      element.classList.remove("active");
    })
    e.target.classList.add("active");
  })
})
//bullets in local storage
let bulletlocal=localStorage.getItem("bulletlocal");
if(bulletlocal!==null){
  bulletspan.forEach(function(span){
 span.classList.remove("active");
  })
if(bulletlocal==='block'){
  navbullets.style.display='block';
  document.querySelector(".bullets-option .yes").classList.add("active");
}
else{
  navbullets.style.display='none';
  document.querySelector(".bullets-option .no").classList.add("active");
}
}
//............................................................
//reset
document.querySelector(".reset-option").onclick=function(){
  localStorage.clear();
  window.location.reload();
}
//toggle menu
let togglebtn=document.querySelector(".toogle-menu");
let tlinks=document.querySelector(".links");
togglebtn.onclick=function(){
  this.classList.toggle("menu-active");
  tlinks.classList.toggle("open");
}
//click anywhare outside menue and toggle button
document.removeEventListener("click",function(e){
  e.stopPropagation();
  if(e.target!==togglebtn && e.target!==tlinks){
  if(tlinks.className==='open'){
   
  togglebtn.classList.toggle("menu-active");
  tlinks.classList.toggle("open");
  }
}
})
//stop propagation from ul
tlinks.onclick=function(e){
  e.stopPropagation();
}
function test(){
  const x=35;
  let h="30";
  let total=x-h;
  console.log(total);
}
test();