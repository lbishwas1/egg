
 let egg=document.querySelector('.egg');
let pos=0;
bottommax=window.innerHeight+50;
//EGG ANIMATION
position=Math.floor(random(10,130))*10-30;
egg.style.marginLeft=position;
setInterval(()=>{
position=Math.floor(random(10,130))*10-30; 
 egg.style.marginLeft=position;
 //FUNCTION TO GEN NUMBER BETWEEN TWO NUM
 
 }, 7200);
 function random(min, max) {
  return min + Math.random() * (max - min);
}
setInterval(() => {
  if(pos!==720)
  {
  pos++; 
  egg.style.top = pos + 'px';

  }
  else if(pos===720)
  {
    pos=0;
    
  }
 
}, 10);

