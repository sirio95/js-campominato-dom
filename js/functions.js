//funzioni

function creazioneDiv (x, y, z){
    const newEl= document.createElement("div");
    newEl.classList.add("box", `${z}`);
    //newEl.innerHTML += x;
    y.append(newEl);
}
 
function cambioCol(){
     this.classList.toggle('col_nuovo');
     console.log(this.innerHTML);
}

function randomNum(max, min){
    return Math.floor(Math.random() * (max - min) + min);
}

function randomNumArr(num, maxN, minN){
    const arrN= [];

    while(arrN.length < num){
        let numero= randomNum(maxN, minN);
        if(!arrN.includes(numero)){
            arrN.push(numero);
        }
    }
    console.log(arrN);
}

