// console.log('Hello world!');

// let grades = [0, 2, 6];
// let sum = 0;
// for (let g of grades) {
//     sum += g
// }

// let avg = sum / grades.length

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

// function randomGame() {
//     let counter = 0;
//     let timerID = setInterval(function() {
//         let num = Math.random();
//         counter++;
//         if (num > 0.75) {
//             console.log(counter);
//             clearInterval(timerID);
//         }
//     }, 1000);
// }

function getNum(tid, ctr) {
    let num = Math.random();
    ctr++;
    if (num > 0.75) {
        console.log(ctr);
        clearInterval(tid);
    }
}

function randomGame() {
    let counter = 0;
    let timerID;
    timerID = setInterval(getNum, 1000, timerID, counter);
}