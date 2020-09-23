// Date 생성자
let now = new Date(); // 현재
console.log("현재: ", now);

// 1999-12-31
let time = new Date(1999, 11, 31); // 월은 0부터 시작
console.log("time: ", time);

time = new Date(2020, 8, 23, 10, 08, 0);
console.log("강의 시간: ", time);

// getter, setter
console.log("오늘 날짜: ", 
    now.getFullYear(),
    now.getMonth() + 1,
    now.getDate());

console.log("오늘의 요일: ", now.getDay()); // 0이 일요일