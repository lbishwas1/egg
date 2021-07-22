let egg=document.querySelector('.egg');
let y_position=0;
let bottom_max=window.innerHeight+50;
//EGG ANIMATION
getX();
setInterval(()=>{
getX();
 
 },bottom_max*10);

setInterval(() => {
  if(y_position!==bottom_max)
  {
  y_position++; 
  egg.style.top = y_position + 'px';

  }
  else if(y_position===bottom_max)
  {
    y_position=0;
  }
 
}, 10);

function getX(){
  x_position=Math.floor(random(50,(window.innerWidth-150)/10))*10-30;
  egg.style.marginLeft=x_position;
  //FUNCTION TO GEN NUMBER BETWEEN TWO NUM
  function random(min, max) {
    return min + Math.random() * (max - min);
  }
}