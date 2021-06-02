let basket=document.querySelector('.basket');
let scores=0;
let  marginLeft=0;
let stop=window.innerWidth-100;
let price=document.getElementById('score');
let increased=0;
let live=3;
window.addEventListener('keydown',(e)=>{
        if(e.key === 'ArrowLeft')
        {
            if(marginLeft===0)
            {
                basket.style.left = marginLeft+'px';
            }
            else{
            marginLeft  = marginLeft-10;
            basket.style.left = marginLeft+'px';
        }
    }
        else if(e.key ==='ArrowRight')
        {
            if(marginLeft>=stop)
            {
                
        basket.style.left = stop;   
    }
    else{
        marginLeft  = marginLeft+10;
        basket.style.left = parseInt(marginLeft)+'px'; 
    }
}
    
 {/*   console.log('eggpos'+position)
    console.log('basketpos'+marginLeft)
    console.log('eggy-axis'+pos)
*/}
    
         // collision detected!
    if (marginLeft < position + 50 &&
        marginLeft + 100 > position&& 
        pos>630&&pos<670)
        {
           scores++;
           score.innerHTML =scores ;
        }

   }
 )

