let themeCode = true;
let body = document.querySelector("body");
let themeBtn = document.querySelector(".themeBtn");

let title_with_score = document.querySelector(".title_with_score");

let comp_score_result = document.querySelector(".comp_score_result");
let user_score_result = document.querySelector(".user_score_result");

let comp_score_value = 0;
let user_score_value = 0;

comp_score_result.textContent = comp_score_value;
user_score_result.textContent = user_score_value;

let img_for_rule = false;
let img = document.querySelector(".rules_and_next-IMG");

let user_choosen_value = "";
let symbol_div = document.querySelector(".symbols");

let comp_output_para = document.querySelector(".comp_output_para");
let user_output_para = document.querySelector(".user_output_para");

let show_output = document.querySelector(".show_output");

let paper_symbol = document.querySelector("#paper");
paper_symbol.addEventListener("click", function(){
    user_choosen_value = "paper";
    symbol_div.style.display = "none";

    showImgOnCompOutput();

    showImgOnUserOutput("./images/paper.png");
    document.querySelector(".output").style.display = "flex"
})

let rock_symbol = document.querySelector("#rock");
rock_symbol.addEventListener("click", function(){
    user_choosen_value = "rock";
    symbol_div.style.display = "none";

    showImgOnCompOutput();

    showImgOnUserOutput("./images/rock.png");
    document.querySelector(".output").style.display = "flex"
})

let scissor_symbol = document.querySelector("#scissor");
scissor_symbol.addEventListener("click", function(){
    user_choosen_value = "scissor";
    symbol_div.style.display = "none";

    showImgOnCompOutput();

    showImgOnUserOutput("./images/scissor.jpg");
    document.querySelector(".output").style.display = "flex"
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
    document.querySelector(".output").style.display = "none";
}

function showImgOnUserOutput(url){
    user_output_para.textContent = "";

    let img = document.createElement("img");
    img.src = url;
    img.style.width = "90px";
    img.style.height = "90px";

    user_output_para.appendChild(img);
}

function showImgOnCompOutput(){
    comp_output_para.textContent = "";

    let list = ["./images/paper.png", "./images/rock.png", "./images/scissor.jpg"];
    let list_for_result = ["paper", "rock", "scissor"];

    let theRandomNumber = Math.floor(Math.random() * 3);

    let img = document.createElement("img");
    img.src = list[theRandomNumber];
    img.style.width = "90px";
    img.style.height = "90px";

    comp_output_para.appendChild(img);

    showResult(list_for_result[theRandomNumber], user_choosen_value);
}

function showResult(comp, user){

    if(comp=="rock" && user=="rock")
        show_output.textContent = "Tie"
    else if(comp=="rock" && user=="paper")
        show_output.textContent = "You Won"
    else if(comp=="rock" && user=="scissor")
        show_output.textContent = "You Lose"
    else if(comp=="paper" && user=="rock")
        show_output.textContent = "You Lose"
    else if(comp=="paper" && user=="paper")
        show_output.textContent = "Tie"
    else if(comp=="paper" && user=="scissor")
        show_output.textContent = "You Won"
    else if(comp=="scissor" && user=="rock")
        show_output.textContent = "You Won"
    else if(comp=="scissor" && user=="paper")
        show_output.textContent = "You Lose"
    else if(comp=="scissor" && user=="scissor")
        show_output.textContent = "Tie"

    if(show_output.textContent == "Tie"){
        comp_score_value++;
        user_score_value++;
    }else if(show_output.textContent == "You Won"){
        user_score_value++;
    }else if(show_output.textContent = "You Lose"){
        comp_score_value++;
    }

    comp_score_result.textContent = comp_score_value;
    user_score_result.textContent = user_score_value;

    checkWinner(comp_score_value, user_score_value);
}

function checkWinner(comp, user){
    if(comp==3 && user==3){
        document.querySelector(".pop-up_answer").textContent = "Tie"
        document.querySelector(".pop-up").style.display = "block";

        document.querySelector(".pop-up").style.backgroundColor = "orange";
        document.querySelector(".rules_and_next-NEXT").style.display = "none";
    }else if(comp==3 && user<3){
        document.querySelector(".pop-up_answer").textContent = "You Lose"
        document.querySelector(".pop-up").style.display = "block";

        document.querySelector(".pop-up").style.backgroundColor = "red";
        document.querySelector(".rules_and_next-NEXT").style.display = "none";

    }else if(comp<3 && user==3){
        document.querySelector(".pop-up_answer").textContent = "You Win"
        document.querySelector(".pop-up").style.display = "block";

        document.querySelector(".pop-up").style.backgroundColor = "green";
        document.querySelector(".rules_and_next-NEXT").style.display = "none";

    }
    return;
}

function startNewGame(){
    window.location.reload();
}