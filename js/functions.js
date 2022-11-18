//funzioni

function creazioneDiv (numeriBox, classeNumBox, classeDif, num16){
    const newEl= document.createElement("div");
    newEl.classList.add("box", `${classeDif}`);
    newEl.innerHTML += numeriBox;
    
    if(numeriBox % num16 !== 0){
        newEl.addEventListener("click", safe);
        classeNumBox.append(newEl);

    }else if(numeriBox % num16 === 0){
        newEl.addEventListener("click", bomba);
        classeNumBox.append(newEl);
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
    if(!started) {
        return
    }else{
        this.classList.add('bomba');
        const numero_vittorie=document.getElementsByClassName("safe");
        alert("Hai perso! Il tuo punteggio è " + numero_vittorie.length);
        return !started;
    }
    
}

function safe(){
    if(!started) return;
    this.classList.add('safe');
    
}