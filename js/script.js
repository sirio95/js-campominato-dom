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
                creazioneDiv(randomArr[i-1], campo, classe, 6);
            }

        }else if(difficulty === 'intermediate'){
            
            const randomArr= randomNumArr(81, 81, 1);
            console.log(randomArr);

            for(let i=1; i<82; i++){
                const classe= "per9";
                creazioneDiv(randomArr[i-1], campo, classe, 5);
            }

        }else if(difficulty === 'hard'){
            const randomArr= randomNumArr(49, 49, 1);
            console.log(randomArr);

            for(let i=1; i<50; i++){
                const classe= "per7";
                creazioneDiv(randomArr[i-1], campo, classe, 3);
            }
        }
    }
)

