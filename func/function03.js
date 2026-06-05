function func01(a) {
    console.log(a);

}
func01(1231); // func01 함수를 호출합니다. a에는 1231이 전달됩니다.

function func02(f) {
    console.log('func02()');
    f(); // f 함수를 호출합니다. f는 func01 함수를 참조하므로, func01 함수가 호출됩니다.

}

const temp1 = () => {
    console.log('temp1() 함수 호출');
}

const temp2 = () => {
    console.log('temp2() 함수 호출 temp2()');
}

func02(temp1); // func02 함수를 호출합니다. f에는 temp1 함수가 전달됩니다.
func02(temp2); // func02 함수를 호출합니다. f에는 temp2 함수가 전달됩니다.

function reserve(name) {
    console.log("예약 종류 확인");
    console.log("예약 가능여부 확인");
    console.log("예약 스케쥴 조정");

console.log('ooo 님 예약 기능 확인 -> 예약 완료 처리');

console.log('예약 완료 안내');
}

function sendMsg(){
    console.log('문자로 안내문자 전송');
}

reserve('김부장');

reserve('최이사', function(){
    console.log('전화로 안내');
})

reserve('강회장', () => {
    console.log('카톡안내메시지 전달');
});
