let answer = document.getElementById("screen");

let calculate=(number)=> {
    answer.value += number;
}

let Answer=()=> {
    try {
        answer.value = eval(answer.value)
    }
    catch(err) {
        alert("RUBBISH!!! " + "ITE KU TE!!")
    }
}

function eraseDel() {
    answer.value = " ";
}

function erase() {
    answer.value = answer.value.slice(0,-1)
}