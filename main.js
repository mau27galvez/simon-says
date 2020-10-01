const main = document.getElementsByTagName("main");
const start_button = document.getElementById("start");
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
        this.pushAndCheck = this.pushAndCheck.bind( this );
        this.exe();
    }

    addEventListeners()
    {
        green.addEventListener( "click", this.pushAndCheck );
        red.addEventListener( "click", this.pushAndCheck );
        yellow.addEventListener( "click", this.pushAndCheck );
        blue.addEventListener( "click", this.pushAndCheck );
    }

    removeEventListeners()
    {   
        debugger;
        console.log(this);
        green.removeEventListener( "click", this.pushAndCheck );
        red.removeEventListener( "click", this.pushAndCheck );
        yellow.removeEventListener( "click", this.pushAndCheck );
        blue.removeEventListener( "click", this.pushAndCheck );
    }

    fromIdToNumber ( id )
    {
        switch ( id )
        {
            case "green":
                return 1;
            case "red":
                return 2;
            case "yellow":
                return 3;
            case "blue":
                return 4;
        }
    }

    pushAndCheck ( ev )
    {
        let element = this.fromIdToNumber( ev.target.id );
        userInput.push( element );
        this.check();
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
        for ( const color of sequence ) {
            console.log(sequence);
            NUMBER_COLOR[color].classList.add("click", `shadow-${NUMBER_COLOR[color].id}`);
            await this.toggleOpacity( color );
            await this.timeOut();
        }
    
        userInput = [];
        this.addEventListeners();
    }
    
    exe()
    {
        sequence.push( this.getRamdomNumber() );
        this.showSequence();
        console.log(sequence);
    }
    
    check()
    {
        if( sequence[ userInput.length - 1 ] !== userInput[ userInput.length - 1 ] )
        {
            sequence = [];
            alert("PERDISTE :(");
            this.removeEventListeners();
            this.exe();
        } else {
            if ( userInput.length === sequence.length ) {
                alert("Todo ok");
                userInput = [];
                this.removeEventListeners();
                this.exe();
            }
        };
    }
}



function start()
{
    start_button.classList.add( "hide" );
    const game = new Game();
}

start_button.addEventListener( "click", start );