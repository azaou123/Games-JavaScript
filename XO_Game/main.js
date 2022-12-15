// full is a table  with 9 different values will help us whene testing values to find out if there is any winner 
var full = new Array('a','b','c','d','e','f','g','h','i')
//function that return if a case is cheched or not 
function checked(x){
    if (full[x]=='✖' || full[x]=='０') return true
    return false
}
// To restart function 
function restart(){
    let span = document.createElement('span')
    span.innerHTML = '⟳'
    document.getElementById('in10').appendChild(span)
    span.onclick = function (){ window.location.reload() }
}
var winner = 0 ;
i=0
var turn = '✖'
function play(x){
    //checking test and testing if there is any winner yet 
    //there is winner => no need to play 
    if (!checked(x-1) && winner==0){
        i++
        document.getElementById('in'+x).style.backgroundColor = "rgb(8, 4, 56)"
        document.getElementById('in'+x).style.color = "rgb(193, 224, 193)"    
        document.getElementById('in'+x).innerHTML = turn
        if (turn=='✖'){
            document.getElementById('in10').innerHTML = 'Turn Of 0'
            turn = '０'
            full[x-1]='✖'
        }
        else {
            document.getElementById('in10').innerHTML = 'Turn Of ✖'
            turn = '✖'
            full[x-1]='０'
        }
        //Find out after each item play if there is a winner or not 
        //Test of lines 
        for ( let i=0; i<9; i+=3){
            if (full[i]==full[i+1] && full[i+1]==full[i+2]){
                for (let j=i+1; j<i+4; j++){
                    document.getElementById('in'+j).style.backgroundColor = "rgb(63, 243, 93)"
                    document.getElementById('in'+j).style.color = "rgb(10, 10, 80)"
                }
                document.getElementById('in10').innerHTML = 'The Winner Is '+full[i]
                restart()
                winner = 1 ;
            }
        }
        //Test of columns
        for ( let i=0; i<3; i++){
            if (full[i]==full[i+3] && full[i+3]==full[i+6]){
                for (let j=i+1; j<i+9; j+=3){
                    document.getElementById('in'+j).style.backgroundColor = "rgb(63, 243, 93)"
                    document.getElementById('in'+j).style.color = "rgb(10, 10, 80)"
                }
                document.getElementById('in10').innerHTML = 'The Winner Is '+full[i]
                restart()
                winner = 1 ;  
            }
        }
        // Test of this direction : \
        if (full[0]==full[4] && full[4]==full[8]) {
            for (let j=1; j<10; j+=4){
                document.getElementById('in'+j).style.backgroundColor = "rgb(63, 243, 93)"
                document.getElementById('in'+j).style.color = "rgb(10, 10, 80)"
            }
            document.getElementById('in10').innerHTML = 'The Winner Is '+full[0]
            restart()
            winner = 1 ;
        }  
        //Test of this dirction : /
        if (full[2]==full[4] && full[4]==full[6]) {
            for (let j=3; j<8; j+=2){
                document.getElementById('in'+j).style.backgroundColor = "rgb(63, 243, 93)"
                document.getElementById('in'+j).style.color = "rgb(10, 10, 80)"
            }
            document.getElementById('in10').innerHTML = 'The Winner Is '+full[4]
            restart()
            winner = 1 ;
        }
    }
    else {
        alert('Not Allowed !')
    }
    if (i==9){
        document.getElementById('in10').innerHTML = 'There is no Winner '
        restart()
    }
}