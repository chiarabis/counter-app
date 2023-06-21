const minusBtn = document.querySelector("#minus");
const plusBtn = document.querySelector("#plus");
const output = document.querySelector("#output");
const resetBtn = document.querySelector("#reset-btn");

//opzione 1:
/*plusBtn.addEventListener("click", function(){
    let result = Number(output.innerText) + 1;
    output.innerText = result;
});

minusBtn.addEventListener("click", function(){
    let result = Number(output.innerText) - 1;

    if (result < 0) {
        result = 0;
    }

    output.innerText = result;
});

resetBtn.addEventListener("click", function(){
    output.innerText = 0;
});*/



//opzione 2:
/*let result = 0;

plusBtn.addEventListener("click", function(){
    result++; //result += 1;
    output.innerHTML = result;
});

minusBtn.addEventListener("click", function(){
    result--; //result -= 1;

    if(result < 0){
        result = 0;
    }

    output.innerHTML = result;
});

resetBtn.addEventListener("click", reset);
function reset(){
    result = 0;
    output.innerHTML = result;
}*/



//opzione 3:
/*let result = 0;

minusBtn.addEventListener("click", decrement);
plusBtn.addEventListener("click", increment);
resetBtn.addEventListener("click", reset);

function decrement(){
    if(result > 0){
        result--;
        output.innerHTML = result;
    }
};

function increment(){
    result++;
    output.innerHTML = result;
};

function reset(){
    result = 0;
    output.innerHTML = 0;
};*/



//opzione funzione unica per incremento e decremento:
let result = 0;

plusBtn.addEventListener("click", function(){
    counter("increment");
});
minusBtn.addEventListener("click", function(){
    counter("decrement");
});
resetBtn.addEventListener("click", function(){
    counter("reset");
});

function counter(action){
    if(action === "increment"){
        result++;
    }else if(action === "decrement"){
        if(result > 0){
            result--;
        }
    }else if(action === "reset"){
        result = 0;
    }else{
        alert("Azione non consentita")
    }

    output.textContent = result;
}
counter("increment");
counter("decrement");
counter("reset");