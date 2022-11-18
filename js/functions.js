//funzioni

function creazioneDiv (x, y, z){
    const newEl= document.createElement("div");
    newEl.classList.add("box", `${z}`);
    newEl.innerHTML += x;
    y.append(newEl);
}
 
function cambioCol(){
     this.classList.toggle('col_nuovo');
     console.log(this.innerHTML);
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

