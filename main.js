/**
 * Scope (스코프))
 *  - 변수 유효 범위
 * - 내부에서 외부로는 접근 가능
 * - 외부에서 내부로는 접근 x
 *
 *
 * 처음부터 => var
 * ES2015+ => let, const
 */

var varVal = "함수-단위";
const constVal = "블록-단위";

function test() {
  var num = 123;
  return num;
}

console.log(test());
