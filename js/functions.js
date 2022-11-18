//funzioni

function creazioneDiv (x, y, z, n){
    const newEl= document.createElement("div");
    newEl.classList.add("box", `${z}`);
    newEl.innerHTML += x;
    
    if(x % n !== 0){
        newEl.addEventListener("click", safe);
        y.append(newEl);

    }else if(x % n === 0){
        newEl.addEventListener("click", bomba);
        y.append(newEl);
    }

}

function randomNum(max, min){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomNumArr(ext, maxN, minN){
    const arrNum= [];
    let num= randomNum(maxN, minN);
    while(arrNum.length<ext){
        let num= randomNum(maxN, minN);
        if(!arrNum.includes(num)){
            arrNum.push(num);
        }
    }   
    return arrNum;
}

function bomba(){
    this.classList.add('bomba');
    const numero_vittorie=document.getElementsByClassName("safe");
    alert("Hai perso! Il tuo punteggio è " + numero_vittorie.length);
    
}

function safe(){
    this.classList.add('safe');
    
}