let x = 10;
let y = 10;
let z = '10';

console.log(x + y);
console.log(x - y); 

console.log(x + z);

console.log(2 ** 4); //제곱 **

console.log ( x == y);
console.log ( x == z); // ==는 값만 비교하기 때문에 true가 된다. 하지만 ===는 값과 타입을 모두 비교하기 때문에 false가 된다.

console.log ( x === z); // ===는 값과 타입을 모두 비교하기 때문에 false가 된다. 따라서 x와 z는 다른 값으로 취급된다.

console.log ( x > 5 && y > 0); // &&는 논리 AND 연산자이다. 
console.log ( x == 1 || y === '10'); // ||는 논리 OR 연산자이다.

let q = 10;
let w = '20';
let e = 30;

console.log(q+e);
console.log(q+w+e); // 문자열과 숫자를 더하면 문자열로 변환된다. 따라서 q+w는 '1020'이 된다.


console.log (q+ String(e)); // String() 함수를 사용하여 숫자를 문자열로 변환할 수 있다. String(e)는 '1030'이 된다.
console.log (q+ Number(w) + e); // Number() 함수를 사용하여 문자열을 숫자로 변환할 수 있다. Number(w)는 20이 된다.

console.log (Number('456456')); // 문자열을 숫자로 변환할 때, 문자열이 숫자로 변환할 수 없는 경우 NaN이 된다. 예를 들어, Number('abc')는 NaN이 된다.
console.log (Number('456456.123123')); // 456456.123123

if(q == 10) {
    console.log('q는 10입니다.');
}

// true && true
// false || true

q== 11 && console.log('&& q는 11입니다.');
q== 10 && console.log('&& q는 10입니다.'); 

console.log( 10 == 10.0);
console.log( 10 === 10.0); // ==는 값만 비교하기 때문에 true가 된다.
console.log( Number(10) === Number(10.0)); // Number() 함수를 사용하여 숫자를 변환하면, 10과 10.0은 모두 10이 된다. 따라서 Number(10)과 Number(10.0)은 같은 값으로 취급된다.
