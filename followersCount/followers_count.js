let count = 0  //initialize count
function increaseCount(){
    count++;  //increment the count

    displayCount();  //Displaying the count

    checkCountvalue();  //Checking count values and display messages
}

function displayCount(){
    document.getElementById('countDisplay').innerHTML = count ; //Display the count
}

function checkCountvalue(){
    if(count === 10){
        alert("Your Instagram flowers gained 10 followers! Congratulations!");
    }else if(count === 20){
        alert("Your Instagram flowers gained 20 followers! Keep it up!");
    }
}