var drums= document.querySelectorAll(".drum");
for( let i=0; i<drums.length; i++ ){
    drums[i].addEventListener("click",function(){
        var audio= document.querySelectorAll("audio")[i];
        audio.play();
    })
}
document.addEventListener("keypress", function (event){
    makenoise(event.key);
})
function makenoise( key){
    for(let i=0; i<drums.length; i++){
        if( drums[i].textContent==key){
            var audio= document.querySelectorAll("audio")[i];
            audio.play();
        }
    }
}
