let basket=document.querySelector('.basket');
var marginLeft=0;
let stop=containerWidth-120;

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
//     console.log("margin="+marginLeft)
// console.log("x="+x_position)
// console.log("y="+y_position)
}
    
 {/*   console.log('eggpos'+position)
    console.log('basketpos'+marginLeft)
    console.log('eggy-axis'+pos)
*/}
// console.log('inner height'+innerHeight);
// console.log('y'+y_position)
    
         // collision detected!
    
        // else if (y_position>containerHeight-40&& marginLeft < x_position + 50 &&
        //     marginLeft > x_position)
        //     {
        //       live--;
        //        console.log(live);
        //     }
    

   }
 )

