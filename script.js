let themeCode = true;
let body = document.querySelector("body");
let themeBtn = document.querySelector(".themeBtn");
let title_with_score = document.querySelector(".title_with_score");


let img_for_rule = false;
let img = document.querySelector(".rules_and_next-IMG");

let user_choosen_value = "";
let symbol_div = document.querySelector(".symbols");

let paper_symbol = document.querySelector("#paper");
paper_symbol.addEventListener("click", function(){
    user_choosen_value = "paper";
    symbol_div.style.display = "none";
    // alert(user_choosen_value);
})

let rock_symbol = document.querySelector("#rock");
rock_symbol.addEventListener("click", function(){
    user_choosen_value = "rock";
    symbol_div.style.display = "none";
})

let scissor_symbol = document.querySelector("#scissor");
scissor_symbol.addEventListener("click", function(){
    user_choosen_value = "scissor";
    symbol_div.style.display = "none";
})

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

function gameRules(){
    if(!img_for_rule){
        img.style.display = "block"
        img_for_rule = true;
    }else{
        img.style.display = "none"
        img_for_rule = false;
    }
}

function nextBtn(){
    symbol_div.style.display = "block";
}