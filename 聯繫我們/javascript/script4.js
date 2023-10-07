
// accordion Q&A 
const accordion = document.getElementsByClassName("contentBox");

for(i=0; i < accordion.length; i++){
    accordion[i].addEventListener('click',function(){
        console.log("被點選");
        this.classList.toggle("active");
    });
}




