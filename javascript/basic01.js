console.log('basic01.js');


let a =10;
let b =20;
let c = "Hello World";
let d = 'Hello World';
let e = true;
let f = false;


const g =30;
const h = "Hello World";

a = 20;
// g =  50;  const는 재할당이 불가능하다. 따라서 g = 50;은 오류가 발생한다.

console.log(a);

console.log('abc');

console.log('abc' + 'def'); // 문자열 연결 연산자
console.log('abc' + 123); // 문자열과 숫자를 연결하면 숫자가 문자열로 변환된다.
console.log("asdf  'asdf'"); // 문자열 안에 작은따옴표를 사용할 때는 큰따옴표로 감싸야 한다.
console.log("asdf  'asdf' \"asdf\""); // 문자열 안에 큰따옴표를 사용할 때는 작은따옴표로 감싸거나, 큰따옴표를 이스케이프해야 한다.
console.log(`asdf  'asdf' "asdf"`); // 템플릿 리터럴을 사용하면 문자열 안에 작은따옴표와 큰따옴표를 모두 사용할 수 있다. 또한, 템플릿 리터럴은 여러 줄의 문자열을 작성할 때도 유용하다.

let X = 10;
let Y;

console.log(X);
console.log(Y); // 선언되지 않은 변수 Y를 참조하려고 하면 ReferenceError가 발생한다.

z = 50;

var z= 30;
console.log(z); // var로 선언된 변수 z는 호이스팅되어 undefined로 초기화된다. 따라서 console.log(z)에서 z는 undefined가 된다. 이후에 z에 30이 할당되지만, console.log(z)에서는 여전히 undefined가 출력된다.

var z = 20;
console.log(z); //이후에 z에 20이 할당되지만, console.log(z)에서는 여전히 undefined가 출력된다.

// var는 그냥 덮어버려서 의도치 않은 결과가 나올 수 있다. 따라서 var는 사용하지 않는 것이 좋다. let과 const를 사용하여 변수를 선언하는 것이 좋다.