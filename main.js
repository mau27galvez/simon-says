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
let isOk = true;

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
        }, 2000 );
    });
}

function timeOut()
{
    return new Promise( ( resolve, reject ) => {
        setTimeout( function() {
            resolve();
        }, 1000 );
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

// function hasClick()
// {
//     return new Promise( ( resolve, reject ) => {
//         setTimeout( function() {
//             let userInput = [];
    

//         }, 200000000 );
//     });
// }

async function isOK()
{
    return await hasClick();
}

// for ( let i = 0; i < 5; i++ ) {
//     // debugger;
//     sequence.push( getRamdomNumber() );
//     showSequence();
//     let next = isOK();
//     console.log(next);
// }

function exe()
{
    sequence.push( getRamdomNumber() );
    showSequence();
    // let next = isOK();
    // console.log(next);
}

exe();

while ( true ) {
    green.addEventListener( "click", () => {
        userInput.push(1);
        if( sequence[ userInput.length - 1 ] !== userInput[ userInput.length - 1 ] )
        {
            isOk = false;
        } else {
            if ( userInput.length === sequence.length ) {
                alert("Todo ok");
                exe();
            }
        };
    });
    
    red.addEventListener( "click", () => {
        userInput.push(2);
        if( sequence[ userInput.length - 1 ] !== userInput[ userInput.length - 1 ] )
        {
            reject( "EL USUARIO SE EQUIVICO" );
        } else {
            if ( userInput.length === sequence.length ) {
                resolve();
            }
        };
    });
    
    yellow.addEventListener( "click", () => {
        userInput.push(3);
        if( sequence[ userInput.length - 1 ] !== userInput[ userInput.length - 1 ] )
        {
            reject( "EL USUARIO SE EQUIVICO" );
        } else {
            if ( userInput.length === sequence.length ) {
                resolve();
            }
        };
    });
    
    blue.addEventListener( "click", () => {
        userInput.push(4);
        if( sequence[ userInput.length - 1 ] !== userInput[ userInput.length - 1 ] )
        {
            reject( false );
        } else {
            if ( userInput.length === sequence.length ) {
                resolve( true );
            }
        };
    });

    if( !isOk ) {
        sequence = [];
        alert("PERDISTE :(");
    }
}