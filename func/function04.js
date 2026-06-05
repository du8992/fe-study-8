function arrForEach1(){
    let arr = [10, 20, 30, 40, 50];

    for(let i in arr){
        console.log(i + " : " + arr[i]);
    }
}

arrForEach1();

function arrForEach2(arr){
    for(let i in arr){
        console.log(i + " : " + arr[i]);
    }   
}

arrForEach2([1, 5, 7, 12, 33]);

function arrForEach3( func ){
    let arr = [100, 200, 300, 400, 500];
    func(arr);
}

arrForEach3(arrForEach2);

const printFunc = (index, value) => {
    console.log(index + " : " + value);
};

function arrForEach4(func){
    let arr = [100, 200, 300, 400, 500];
    for(let i in arr)   {
        func(i, arr[i]);
    }
}
arrForEach4(printFunc);

function arrForEach5(arr, func){
    for(let i in arr){
        func(i, arr[i]);
    }
}
arrForEach5([ 9,8,7,6], printFunc);

arrForEach5([ 99, 88, 77, 66], (i, v) => {
    console.log('index :'+ i + " <<<------->>> valaue :" + v);
});

//-----------------------------------------------
// 콜백함수를 매게변수로 필요로하는 기능

setTimeout( () => {
    console.log('setTimeout 에 매게변수로 넘긴 콜백함수');
}, 3000); // 3000ms(3초) 후에 콜백함수를 실행합니다.

const cb = () => {
    console.log("cb() 함수입니다.");
}

const outCb = (f) => {
    console.log("outCb() 함수가 수행하는 코드 1");
    console.log("outCb() 함수가 수행하는 코드 2");
    console.log("outCb() 함수가 수행하는 코드 3");
    console.log("outCb() 함수가 수행하는 코드 4");
    f();
}

outCb(cb);

setTimeout( () => {
    console.log('setTimeout 에 매게변수로 넘긴 콜백함수');
    outCb(cb);
}, 5000); 
