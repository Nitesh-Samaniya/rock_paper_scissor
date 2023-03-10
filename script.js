let comp_score = document.querySelector(".comp_score");
let comp_score_value = 0;
comp_score.textContent = comp_score_value;

function submit_btn(){
    let user_name_input = document.querySelector(".user_name_input");
    if(user_name_input.value.length === 0){
        alert("please insert your name");
        return;
    }
    let score = document.querySelector(".score");
    score.style.display = "flex";

    document.querySelector(".user_name").textContent = user_name_input.value;

    let input_field = document.querySelector(".input_field");
    input_field.style.display = "none";
}


let user_score = document.querySelector(".user_score");
let user_score_value = 0
user_score.textContent = user_score_value