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

}
 

   }
 )

