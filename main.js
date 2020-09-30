const main = document.getElementsByTagName("main");
const green = document.getElementById("green");
const red = document.getElementById("red");
const yellow = document.getElementById("yellow");
const blue = document.getElementById("blue");
const NUMBER_COLOR = {
    1: green,
    2: red,
    3: yellow,
    4: blue,
};
let sequence = [];
let userInput;
let isOk = false;

const TIMEOUT = 500;
const SHOW_TIME = 1500; 

class Game
{
    constructor()
    {

    }
    
    getRamdomNumber() 
    {
        return Math.floor( Math.random() * 4 + 1 );
    }
    
    toggleOpacity( color )
    {
        return new Promise( ( resolve, reject ) => {
            setTimeout( function() {
                NUMBER_COLOR[color].classList.remove("click", `shadow-${NUMBER_COLOR[color].id}`);
                resolve();
            }, SHOW_TIME );
        });
    }
    
    timeOut()
    {
        return new Promise( ( resolve, reject ) => {
            setTimeout( function() {
                resolve();
            }, TIMEOUT );
        });
    }
    
    async showSequence()
    {
        for ( color of sequence ) {
            console.log(sequence);
            NUMBER_COLOR[color].classList.add("click", `shadow-${NUMBER_COLOR[color].id}`);
            await toggleOpacity( color );
            await timeOut();
        }
    
        userInput = [];
    }
    
    exe()
    {
        sequence.push( getRamdomNumber() );
        showSequence();
        console.log(sequence);
    }
    
    check()
    {
        if( sequence[ userInput.length - 1 ] !== userInput[ userInput.length - 1 ] )
        {
            sequence = [];
            alert("PERDISTE :(");
            exe();
        } else {
            if ( userInput.length === sequence.length ) {
                alert("Todo ok");
                userInput = [];
                exe();
            }
        };
    }
}


exe();

green.addEventListener( "click", () => {
    userInput.push(1);
    check()
});

red.addEventListener( "click", () => {
    userInput.push(2);
    check()
});

yellow.addEventListener( "click", () => {
    userInput.push(3);
    check()
});

blue.addEventListener( "click", () => {
    userInput.push(4);
    check()
});