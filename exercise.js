function countDown(num) {
    for (let i=0; i<=num; i++) {
        setTimeout(function() {
            if (num>0) {
                console.log(num); num--;
            }
            else {
                console.log("DONE!")
            }
        }, i * 1000);
    }
}


function randomGame() {
    let counter = 0;
    let timerID = setInterval(function() {
        let num = Math.random();
        counter++;
        if (num > 0.75) {
            console.log(counter);
            clearInterval(timerID);
        }
    }, 1000);
}