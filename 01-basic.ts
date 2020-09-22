// 콘솔 출력은 console 내장 메소드를 사용.
console.info("정보메시지");
console.log("일반 로그");
console.warn("경고 메시지");
console.error("에러 메시지");

//  필요한 출력 객체를 , 구분하여 출력
console.log("ECMA Script", 2015);


// 변수
// var, let, const

var testVar = 10;   // ES6 이전 변수를 할당하는 방법
// WEB 환경에서 var를 사용하도록 하자..(?)

let testVar1 = "let variable"; // 재할당 가능 변수
const TEST_CONST = "const"; // 재할당 불가능 변수

console.log(testVar, testVar1,TEST_CONST);

// const는 선언과 동시에 할당해야 한다.

// typeof : 동적 타이핑 언어 -> 실제 객체의 타입을 확인해야 한다.
let v = "TypeScript";   // 데이터 타입이 할당과 동시에 결정.
console.log("v -> ", typeof(v));
let v2 = 2020;
console.log("v2 -> ", typeof(v2));

// number, string, boolean, object