function func01() {
    console.log('func01');
}

func01(); // func01 함수를 호출합니다.

const func02 = function() {
    console.log('func02');
}

func02(); // func02 함수를 호출합니다.

const func03 = function func033() {
    console.log('func03');
}

//func033(); // func033 함수를 호출합니다. 
// 하지만 func033 함수는 func03 함수의 이름이므로
// func033 함수를 호출할 수 없습니다. 따라서 ReferenceError가 발생합니다.

func03(); // func03 함수를 호출합니다.

const func04 = () => {
    console.log("func04");
}

func04(); // func04 함수를 호출합니다.

function func05(a, b) {
    console.log('func05()' + a + ' ' + b);
}

func05(10, 20); // func05 함수를 호출합니다. a에는 10이, b에는 20이 전달됩니다.
func05("A", "B"); // func05 함수를 호출합니다. a에는 "A"가, b에는 "B"가 전달됩니다.

const func06 = function(a, b) {
    console.log('func06()' + a + ' ' + b);
}
func06(30, 40); // func06 함수를 호출합니다. a에는 30이, b에는 40이 전달됩니다.

const func07 = function func077(a, b) {
    console.log('func07()' + a + ' ' + b);
}
func07(50, 60); // func07 함수를 호출합니다. a에는 50이, b에는 60이 전달됩니다.

const func08 = (x, y) => {
    console.log('func08()' + x + ' ' + y);
}

func08("hi", 2000);
