let egg=document.querySelector('.egg');
let y_position=0;
let containerHeight=700
let containerWidth=1500
let bottom_max=containerHeight;

//EGG ANIMATION
getX();
// setInterval(()=>{
// getX();
 
//  },bottom_max*10);

function getX(){
  x_position=Math.floor(random(50,(containerWidth-150)/10))*10-30;
  // x_position=200
  egg.style.marginLeft=x_position;
  //FUNCTION TO GEN NUMBER BETWEEN TWO NUM
  function random(min, max) {
    return min + Math.random() * (max - min);
  }
}

function updateScore(){

  var scoreUpdated=0
  if(scoreUpdated==0)
  {
    scores=scores+1;
    score.innerHTML =scores ;
    scoreUpdated=1
  }
  else {
    score.innerHTML=scores
  }
  }
  function updateLives(){
    liveEgg=document.getElementsByClassName('scoreegg')
    let live=liveEgg.length;
    console.log(live)
    if(live>1)
    {
      liveEgg[0].parentNode.removeChild(liveEgg[0]);     
    }
    else if(live==1){
      liveEgg[0].parentNode.removeChild(liveEgg[0]);     

      // window.location.reload();

      alert('Game Over')
    }
   
  }

 
setInterval(() => {
  if(y_position!==bottom_max)
  {
  y_position++; 
  egg.style.top = y_position + 'px';
  
// console.log()
// console.log("x="+x_position)
// console.log("y="+y_position)

  if((x_position>=marginLeft+120||marginLeft >= x_position+30) && y_position==651)
  {
    // console.log(y_position+"y"+)
    updateLives()
    console.log(x_position+"x"+marginLeft+"margin")

    // alert()
  }


  else if (marginLeft < x_position + 30 &&
    marginLeft + 120 > x_position&& 
    y_position>containerHeight-80&&y_position<containerHeight-40&&y_position==651)
    {
      updateScore()
      console.log(marginLeft < x_position+30)
      console.log(marginLeft + 120 > x_position)
      console.log(x_position+"x"+marginLeft+"margin")
    }

  }
  else if(y_position===bottom_max)
  {
    y_position=0;
    getX();
  }

  
 
}, 1);
