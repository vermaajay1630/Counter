let initialCounter = 0;
document.getElementById("counter").innerHTML = initialCounter;

document.getElementById("increase").addEventListener('click', function(){
    let incCounter = initialCounter++;
    document.getElementById("counter").innerHTML = incCounter;
});

document.getElementById("decrease").addEventListener('click', function(){
    if(initialCounter == 0){
        alert("Can't be below 0");
    }
    else{
        let decCounter = --initialCounter;
    document.getElementById("counter").innerHTML = decCounter;
    }
});

