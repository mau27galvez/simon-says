let main = document.getElementsByTagName("main");
let green = document.getElementById("green");
let red = document.getElementById("red");
let yellow = document.getElementById("yellow");
let blue = document.getElementById("blue");
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

function getRamdomNumber() 
{
    return Math.floor( Math.random() * 4 + 1 );
}

function toggleOpacity( color )
{
    return new Promise( ( resolve, reject ) => {
        setTimeout( function() {
            NUMBER_COLOR[color].style = "opacity: 1;";
            resolve();
        }, SHOW_TIME );
    });
}

function timeOut()
{
    return new Promise( ( resolve, reject ) => {
        setTimeout( function() {
            resolve();
        }, TIMEOUT );
    });
}

async function showSequence()
{
    // debugger;
    for ( color of sequence ) {
        console.log(sequence);
        NUMBER_COLOR[color].style = "opacity: 0.6;"
        await toggleOpacity( color );
        await timeOut();
    }

    userInput = [];
}

function exe()
{
    sequence.push( getRamdomNumber() );
    showSequence();
    console.log(sequence);
}

function check()
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