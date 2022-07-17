// 데이터 타입(Data Type)은 프로그래밍 언어에서 사용할 수 있는 데이터(숫자, 문자열, 불리언 등)의 종류.
// Javascript의 데이터 타입은 크게 원시 타입 (primitive data type) 과 객체 타입 (object/reference type) 으로 나뉨

// 1. 원시 타입 (Primitive Data Type)
// 원시 타입의 값은 변경 불가능한 값(immutable value)이며 pass-by-value(값에 의한 전달) 이다.

// ① number
// ECMAScript 표준에 따르면, 숫자 타입의 값은 배정밀도 64비트 부동소수점 형(double-precision 64-bit floating-point format : -(253 -1) 와 253 -1 사이의 숫자값)을 따른다. 
// 즉, 모든 수를 실수를 처리하며 정수만을 표현하기 위한 특별한 데이터 타입(integer type)은 없다.
var integer = 10;        // 정수
var double = 10.12;      // 실수
var negative = -20;      // 음의 정수
var binary = 0b01000001; // 2진수
var octal = 0o101;       // 8진수
var hex = 0x41;          // 16진수

console.log(1 === 1.0);  // true

const pInf = 10 / 0;     // 양의 무한대
console.log(pInf);       // Infinity

const nInf = 10 / -0;    // 음의 무한대
console.log(nInf);       // -Infinity

const nan = 1 * 'string';// 산술 연산 불가
console.log(nan);        // NaN

// ② string
// 문자열은 0개 이상의 16bit 유니코드 문자(UTF-16) 들의 집합으로 대부분의 전세계의 문자를 표현할 수 있다. 문자열은 작은 따옴표(‘’) 또는 큰 따옴표(“”) 안에 텍스트를 넣어 생성한다
const str1 = "string";   // 큰 따옴표
const str2 = 'string';   // 작은 따옴표
const str3 = `string`;   // 백틱(ES6 템플릿 리터럴)

// ③ boolean
// 불리언(boolean) 타입의 값은 논리적 참, 거짓을 나타내는 true와 false 뿐이다.
const bolY = true;
const bolN = false;
// typeof 연산자는 타입을 나타내는 문자열을 반환한다.
console.log(typeof bolY); // boolean

// ④ undefined
// 선언은 되었지만 값을 할당하지 않은 변수에 접근하거나 존재하지 않는 객체 프로퍼티에 접근할 경우 undefined가 반환된다.
let und;
console.log(und); // undefined

// ⑤ null
// 프로그래밍 언어에서 null은 의도적으로 변수에 값이 없다는 것을 명시할 때 사용한다. 
const nl = null;
console.log(nl); // null

// ⑥ symbol
// 심볼(symbol)은 ES6에서 새롭게 추가된 7번째 타입으로 변경 불가능한 원시 타입의 값이다.

// 2. 객체 타입 (object/reference type)
// ① Array
const fruits = ['apple', 'banana'];
console.log(fruits.length); // 2
console.log(fruits[0]); // apple
console.log(fruits[2]); // undefined
console.log(fruits[fruits.length - 1]);

// ② Objects
const wo = { name: 'wo', age: '20' };

// let
// 변수에 재할당 가능

// const
// 변수 재선언, 변수 재할당 모두 불가능

// function
// 코드를 캡슐화하여 여러곳에서 사용할 수 있음