

var parallax=(function(){
    var bg=document.querySelector('.parallax');
    var layer1 = document.querySelector('.parallax__layer-one');
    var layer2 = document.querySelector('.parallax__layer-two');
    var layer3 = document.querySelector('.parallax__layer-three');
    var layer4 = document.querySelector('.parallax__layer-four');
    var layer5 = document.querySelector('.parallax__layer-five');
    var layer6 = document.querySelector('.parallax__layer-six');
   return {
       move: function (block, windowScroll, strafeAmount){
           var strafe = windowScroll / -strafeAmount + '%';

           var transformString = 'translate3d(0,+ strafe +, 0)';
           var style = block.style;

           style.transform = transformString;
           style.webkitTransform = transformString;
           style.top = strafe;
       },

       init: function (wScroll){
           this.move (bg, wScroll, 65);
           this.move (layer1, wScroll, 65);
           this.move (layer2, wScroll, 65);
           this.move (layer3, wScroll, 65);
           this.move (layer4, wScroll, 65);
           this.move (layer5, wScroll, 65);
           this.move (layer6, wScroll, 65);
       }
   }
}());


 
window.onscroll = function (){
    var wScroll = window.pageYOffset;
    parallax.init(wScroll);
}

//import { arrayExpression } from "babel-types";


  /*  const parallax = document.querySelector('.parallax');
    const layers = parallax.children;
    const layersToExclude = [0, 4, 6];

    function moveLayersDependsOnScroll (wScroll){
        Array.from(layers).forEach((layer,layerIndex)=> {
            const strafe = `${wScroll / (-layerIndex * 40)} %`;
            if (layersToExclude.includes(layerIndex)==false){
                layer.style.transform = `translateY(${strafe})`;
            }
        });
    }
    

 
const windowWidth = document.body.clientWidth;

if (windowWidth > 768) {
    window.addEventListener('scroll', e =>{
        const wScroll = window.pageYOffset;
        moveLayersDependsOnScroll (wScroll)
    });
}
*/
