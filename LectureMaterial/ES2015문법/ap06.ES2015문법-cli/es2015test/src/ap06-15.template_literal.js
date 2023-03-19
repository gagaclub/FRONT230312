/*

  ES2015의 template literal( 백틱, ` ) 에 대해서 알아본다.
  template literal 의 용도
  1. 다중(여러 줄) 문자열 만들 때
  2. 변수 치환
*/

const string1 = '안녕하세요.';
const string2 = '반갑습니다.';

const greeting = `${string1}


${string2}`;
console.log(greeting);

// 이렇게는 쓰지 말자
// const value1 = 1;
// const value2 = 2;
// const value3 = value1 * value2;
// const value4 = value1 === value2 ? '참' : '거짓';
// const operator1 = '곱셈값은 ${value3}입니다.';
// const operator2 = ''

const student = {
  name: 'John Kagga',
  city: 'Kampala',
};

// ES5
const message1 = 'Hello ' + student.name + ' from ' + student.city;
console.log(message1);

// ES6
let message2 = `Hello ${student.name} from ${student.city}`;
console.log(message2);


