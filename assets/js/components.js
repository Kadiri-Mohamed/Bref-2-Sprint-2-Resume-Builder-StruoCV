const progressBar = document.getElementById("progressBar");
const progress = document.getElementById("progress");
const icons = progressBar.querySelectorAll("i");
const NextButton = document.getElementById("nextButton");
const prevButton = document.getElementById("prevButton");
let pro = 0;
function NextProgress() {
    if(pro < 75){
        pro = pro + 25
        progress.style.left = `${pro}%` ;
    }
}
function PrevProgress() {
   if(pro >0){
        pro = pro - 25
        progress.style.left = `${pro}%` ;
    }
}
