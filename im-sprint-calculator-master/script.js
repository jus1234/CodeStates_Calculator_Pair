/**
 * 1. EventListener 로 눌렀을때, 누른 버튼을 콘솔로 보여주기
 * 2. 콘솔에서 표시해야할 데이터 ( 숫자라면 '숫자', 연산자면 '연산자 기호' );
 * 3. decimal
 * 4. 첫번째 숫자 버튼 -> 첫번째 화면에 숫자 출력
 * 5. addEventListner 에서 누른 버튼의 내용을, 출력화면에 표시
 * 
 * 6-0. 몇번째 입력하는지 ButtonInputCount 변수 생성, 4번째 버튼은 첫번째 화면에다가 표시
 * 6-1. 첫번째 입력은 숫자 인가? 입력 : 입력불가 
 * 6-2. 두번째 입력은 무조건 연산자 인가? 입력 : 입력불가
 * 6-3. 세번째 입력은 숫자 인가? 입력 : 입력불가
 * 6-4. 네번째 입력은 엔터인가? Calculator 함수 호출 : 숫자라면, Reset호출하고, 첫번째 화면에다가 숫자 넣어줌 |
 *      연산자라면, 초기화 함수 Reset 호출
 *      Calculate 함수 호출 (QuerySelector 로 각 출력화면의 숫자를 가져와서 인자로 넣어줌)
 * 6-5. 5번째 화면에다가 결과값 출력, 
 * 6-6. if(Count==5){초기화, 숫자입력시 1번째 화면에 출력}
 * 
 * 7-0. 만들어야할 함수 Reset, 변수는 ButtonInputCount
 */

let buttonInputCount = 0; // 몇번째 입력인지 저장하는 변수

const calculator = document.querySelector('.calculator'); // calculator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const buttons = calculator.querySelector('.calculator__buttons'); // calculator__keys 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.

const firstOperend = document.querySelector('.calculator__operend--left'); // calculator__operend--left 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const operator = document.querySelector('.calculator__operator'); // calculator__operator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const secondOperend = document.querySelector('.calculator__operend--right'); // calculator__operend--right 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const calculatedResult = document.querySelector('.calculator__result'); // calculator__result 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.

// 초기화 함수
function reset()
{
  console.log("Reset");
}

function calculate(n1, operator, n2) {
  let result = 0;
  // TODO : n1과 n2를 operator에 따라 계산하는 함수를 만드세요.
  // ex) 입력값이 n1 : '1', operator : '+', n2 : '2' 인 경우, 3이 리턴됩니다.
  return String(result);
}

// Debug 함수
function debug(target_)
{
  const action_ = target_.classList[0];
  const buttonContent_ = target_.textContent;
  if (action_ === 'number') {
    // 그리고 버튼의 클레스가 number이면
    // 아래 코드가 작동됩니다.
    console.log('숫자 ' + buttonContent_ + ' 버튼');
  }

  if (action_ === 'operator') {
    console.log('연산자 ' + buttonContent_ + ' 버튼');
  }

  if (action_ === 'decimal') {
    console.log('소수점 버튼');
  }

  if (action_ === 'clear') {
    console.log('초기화 버튼');
  }

  if (action_ === 'calculate') {
    console.log('계산 버튼');
  }
}

buttons.addEventListener('click', function (event) {
  // 버튼을 눌렀을 때 작동하는 함수입니다.

  const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
  const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
  const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.
  // ! 위 코드(Line 19 - 21)는 수정하지 마세요.
  
  if (target.matches('button')) {
    // TODO : 계산기가 작동할 수 있도록 아래 코드를 수정하세요. 작성되어 있는 조건문과 console.log를 활용하시면 쉽게 문제를 풀 수 있습니다.
    // 클릭된 HTML 엘리먼트가 button이면
    debug(target);
    console.log(++buttonInputCount);

    if(buttonInputCount == 1)
    {
      // 여기까지 진행 2021.12.29------------------------------------------------------------------------------####
      console.log(test);
    }
  }
});


// ! Advanced Challenge test와 Nightmare test를 위해서는 아래 주석을 해제하세요.

const display = document.querySelector('.calculator__display--for-advanced'); // calculator__display 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
let firstNum, operatorForAdvanced, previousKey, previousNum;

buttons.addEventListener('click', function (event) {
  // 버튼을 눌렀을 때 작동하는 함수입니다.

  const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
  const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
  const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.
  // ! 위 코드는 수정하지 마세요.

  // ! 여기서부터 Advanced Challenge & Nightmare 과제룰 풀어주세요.
  if (target.matches('button')) {
    if (action === 'number') {}
    if (action === 'operator') {}
    if (action === 'decimal') {}
    if (action === 'clear') {}
    if (action === 'calculate') {}
  }

});
