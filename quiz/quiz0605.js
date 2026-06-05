
function getMealByTime(time) {
    if(time >= 6 && time <= 10){
        return "아침";
    }else if(time > 10 && time <= 14){
        return "점심";
    }else if(time >= 17 && time <=20){
        return "저녁";
    }else if(time > 20 && time <= 23){
        return "야식";
    }else{
        return "금식";
    }
}


const getMealByTime2 = function(time) {
    if(time >= 6 && time <= 10){
        return "아침";
    }else if(time > 10 && time <= 14){
        return "점심";
    }else if(time >= 17 && time <=20){
        return "저녁";
    }else if(time > 20 && time <= 23){
        return "야식";
    }else{
        return "금식";
    }
}

const getMealByTime3 = (time) => {
    if(time >= 6 && time <= 10){
        return "아침";
    }else if(time > 10 && time <= 14){
        return "점심";
    }else if(time >= 17 && time <=20){
        return "저녁";
    }else if(time > 20 && time <= 23){
        return "야식";
    }else{
        return "금식";
    }
}



console.log(getMealByTime3(5)); //출력값 : 금식
console.log(getMealByTime3(8)); //출력값 : 아침
console.log(getMealByTime3(13)); //출력값 : 점심
console.log(getMealByTime3(16)); //출력값 : 금식
console.log(getMealByTime3(19)); //출력값 : 저녁
console.log(getMealByTime3(22)); //출력값 : 야식
console.log(getMealByTime3(2)); //출력값 : 금식