var x = 11;
var res;
if (x === 0) {
  res = '영';
} else if (x % 2 === 0) {
  res = '짝수';
} else {
  res = '홀수';
}
//홀수

//위의 예제를 삼항 조건 연산자를 활용해 같은 결과가 나오도록 만들어보자.

var x = 11;
var res = x === 0 ? '영' : x % 2 === 0 ? '짝수' : '홀수';
console.log(res);
//홀수
