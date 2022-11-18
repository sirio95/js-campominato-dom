let start = document.getElementById('start');



start.addEventListener('click', 
    function(){
        let difficulty= document.getElementById('difficulty').value;
        const campo= document.getElementById('campo');

        // creazione campo

        if(difficulty === 'beginner'){

            const randomArr= randomNumArr(100, 100, 1);
            
            console.log(randomArr);

            for(let i=1; i<101; i++){
                const classe= "per10";
                creazioneDiv(randomArr[i-1], campo, classe);
            }

            const arrBox= document.getElementsByClassName("box");
            console.log(arrBox);

            
            

            for(let i=0; i<arrBox.length; i++){
                arrBox[i].addEventListener('click', cambioCol);

            }        

            


        }else if(difficulty === 'intermediate'){
            for(let i=1; i<82; i++){
                const classe= "per9";
                creazioneDiv(i, campo, classe);
            }
        }else if(difficulty === 'hard'){
            for(let i=1; i<50; i++){
                const classe= "per7";
                creazioneDiv(i, campo, classe);
            }
        }








    }
)

