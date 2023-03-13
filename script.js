let themeCode = true;
let body = document.querySelector("body");
let themeBtn = document.querySelector(".themeBtn");
let title_with_score = document.querySelector(".title_with_score");

function theme(){
    if(themeCode){
        themeCode = false;
        body.style.backgroundColor = "white"
        body.style.color = "black"
        themeBtn.textContent = "Dark Theme"
        title_with_score.style.border = "2px solid black"
    }else{
        themeCode = true;
        body.style.backgroundColor = "#030b17"
        body.style.color = "white"
        themeBtn.textContent = "Light Theme"
        title_with_score.style.border = "1px solid white"
    }
}