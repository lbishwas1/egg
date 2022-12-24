let egg=document.querySelector('.egg');
let y_position=0;
let containerHeight=700
let containerWidth=1500
let bottom_max=containerHeight;
let x_position

//EGG ANIMATION
getX();

//FUNCTION TO GENERATE NUMBER BETWEEN TWO NUMBER
function random(min, max) {
  return min + Math.random() * (max - min);
}

//THIS GENERATE X-COORDINATES(EGG)

function getX(){
  x_position=Math.floor(random(50,(containerWidth-150)/10))*10-30;
  egg.style.marginLeft=x_position;
}

//Function to disappear popup
function GreetPopup(){
    document.querySelector(".popup").style.display = "none";
    EggMovement()
    document.querySelector(".egg").style.display='block'
    var audio = new Audio('audio/start.mp3');
    audio.play();


}
function PlayAgain(){
    window.location.reload();

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
      document.querySelector('.dead').style.display='block'
      document.querySelector(".egg").style.display='none'
    

    }
   
  }

function EggMovement(){ 
setInterval(() => {
  if(y_position!==bottom_max)
  {
  y_position++; 
  egg.style.top = y_position + 'px';
  if((x_position>=marginLeft+120||marginLeft >= x_position+30) && y_position==651)
  {
    updateLives()
    document.querySelector(".splash-egg").style.display='block'
    document.querySelector(".splash-egg").style.marginLeft=x_position+80
    // var audio1 = new Audio('audio/dead.mp3');
    // audio1.play();
    console.log(x_position+"x"+marginLeft+"margin")
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
}





