$(".earth").hover(function() {
     $(".sun").css("backgroundColor","yellow")
     setTimeout(() => {$(".sun").css("backgroundColor","#FAF0E6");
          
     }, 1000);

     });
var allslides = $(".myslide1");
var show1 = 0;
var show2 = 1;
var show3 = 2;
for(var i = 0 ; i < allslides.length;++i){
     allslides[i].style.display = 'none';
}
allslides[show1].style.display = 'flex';
allslides[show2].style.display = 'flex';
allslides[show3].style.display = 'flex';

function rightside(n){
     if(show3 < allslides.length-1){
          for(var i = 0 ; i < allslides.length;++i){
               allslides[i].style.display = 'none';
          }


          allslides[show1 += n].style.display = 'flex';
          allslides[show2 += n].style.display = 'flex';
          allslides[show3 += n].style.display = 'flex';
     }
}
function leftside(n){
     if(show1 > 0){
          for(var i = 0 ; i < allslides.length;++i){
               allslides[i].style.display = 'none';
          }


          allslides[show1 -= n].style.display = 'flex';
          allslides[show2 -= n].style.display = 'flex';
          allslides[show3 -= n].style.display = 'flex';
     }
}





