let scores = [10, 20, 30, 40, 50];

console.log(scores); 

for (let i = 0; i < scores.length; i++) {
    console.log(scores[i]);
}

for(let i in scores) {
    console.log(i + " " + scores[i]);
}

for(let value of scores) {
    console.log(value);
}

scores.forEach((value, index) => {
    console.log(index + " " + value);
})
