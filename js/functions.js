//funzioni

function creazioneDiv (x, y, z, n, t){
    const newEl= document.createElement("div");
    newEl.classList.add("box", `${z}`);
    newEl.innerHTML += x;
    
    if(x % n !== 0){
        newEl.addEventListener("click", safe(t));
        y.append(newEl);

    }else if(x % n === 0){
        newEl.addEventListener("click", bomba(t));
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

function bomba(started){
    if(!started) return;
    this.classList.add('bomba');
    const numero_vittorie=document.getElementsByClassName("safe");
    alert("Hai perso! Il tuo punteggio è " + numero_vittorie.length);
    
    return !started;
}

function safe(started){
    if(!started) return;
    this.classList.add('safe');
    
}