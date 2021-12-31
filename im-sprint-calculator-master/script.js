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
  document.querySelector('.calculator__operend--left').textContent = '0';
  document.querySelector('.calculator__operator').textContent = '+';
  document.querySelector('.calculator__operend--right').textContent = '0';
  document.querySelector('.calculator__result').textContent = '0';
  buttonInputCount = 0;

  console.log("Reset");
}

function calculate(n1, operator, n2) {
  let result = 0;
  // TODO : n1과 n2를 operator에 따라 계산하는 함수를 만드세요.
  // ex) 입력값이 n1 : '1', operator : '+', n2 : '2' 인 경우, 3이 리턴됩니다.
  n1 = Number(n1);
  n2 = Number(n2);
  console.log(`n1(${n1}),operator(${operator}),n2(${n2})`);
  switch(operator){
    case '+': result = n1+n2;break;

    case '-': result = n1-n2;break;

    case '*': result = n1*n2;break;

    case '/': result = n1/n2;break;

  }
  console.log(result);
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
    //console.log(++buttonInputCount);
    
    // 첫번째 버튼 (숫자)
    if(buttonInputCount == 0)
    {
      if(action === 'number')
      {
        document.querySelector('.calculator__operend--left').textContent = buttonContent;
        console.log(++buttonInputCount); // 첫번째 누른 버튼이 숫자라면, 카운트를 증가시킨다.
      }
    }

    // 두번째 버튼 (연산자)
    if(buttonInputCount == 1)
    {
      if(action === 'operator')
      {
        document.querySelector('.calculator__operator').textContent = buttonContent;
        console.log(++buttonInputCount); // 두번째 누른 버튼이 연산자라면, 카운트를 증가시킨다.
      }
    }

    // 세번째 버튼 (숫자)
    if(buttonInputCount == 2)
    {
      if(action === 'number')
      {
        document.querySelector('.calculator__operend--right').textContent = buttonContent;
        console.log(++buttonInputCount); // 세번째 누른 버튼이 숫자라면, 카운트를 증가시킨다.
      }
    }

    // 네번째 버튼 (계산)
    if(buttonInputCount == 3)
    {
      if(action === 'calculate')
      {
        let num1 =Number(document.querySelector('.calculator__operend--left').textContent);
        let oper = document.querySelector('.calculator__operator').textContent;
        let num2 = Number(document.querySelector('.calculator__operend--right').textContent);

        let res = calculate(num1,oper,num2); // 계산
        console.log(res);
        document.querySelector('.calculator__result').textContent = res;
        console.log(++buttonInputCount); // 
      }
    }

    // 다섯번째 버튼 (숫자)
    if(buttonInputCount == 4)
    {
      // 초기화, 첫번째 숫자 를 입력한다.
      if(action === 'number')
      {
        reset();
        document.querySelector('.calculator__operend--left').textContent = buttonContent;
        console.log(++buttonInputCount); // 세번째 누른 버튼이 숫자라면, 카운트를 증가시킨다.
      }
    }


    // reset 버튼 (clear)
    if(action === 'clear')
    {
      reset();
    }

  }
});


// ! Advanced Challenge test와 Nightmare test를 위해서는 아래 주석을 해제하세요.

const display = document.querySelector('.calculator__display--for-advanced'); // calculator__display 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
let firstNum, previousKey, previousNum;// firstNum은 현재 작성중인 숫자
firstNum='';
let operatorForAdvanced=[];

buttons.addEventListener('click', function (event) {
  // 버튼을 눌렀을 때 작동하는 함수입니다.

  const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
  const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
  const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.
  // ! 위 코드는 수정하지 마세요.

  // Advanced 수도 코드
  // 1. 첫번째 숫자를 입력할 때
  //  숫자를 연속적으로 클릭할 경우 화면에 숫자가 이어져서 출력된다.
  // 2. 두번째 연산자를 입력할 때
  //  연산자를 클릭하면 첫번째 숫자 입력이 멈추고 연산자가 메모리 상으로 기록(화면 표시 x)
  // 3. 세번째 숫자를 입력할 때
  //  숫자를 연속적으로 클릭할 경우 화면에 숫자가 이어져서 출력된다.
  // 4. 네번째 연산
  //  엔터를 클릭하면 연산된 결과가 화면에 출력
  // 5. 다섯번째 클리어
  //  AC버튼 클릭 시 기록된 메모리 제거

  // Nightmare 수도 코드
  // 1. 엔터 중첩 사용
  //    연산된 결과가 previousNumber가 되고
  //    operator 와 lastNumber로 연산   
  // 2. 연산자 중첩 사용 
  //    마지막에 입력된 연산자로 연산
  // 3. 소숫점 중첩 사용
  //    소숫점이 포함안된 경우에만 소숫점 추가
  // 4. 숫자 연산자 엔터 순으로 입력 시
  //    숫자가 firstNumber이자 lastNumber로 작동
  // 5. 여러 항을 연산하는 경우
  //    두 항 씩 계산
  //    previousNumber 와 opertor와 lastNumber 로 연산 후, 화면에 출력
  //    결과가 previousNumber가 되고 lastNumber는 비워 준다.

  // 현재 상태는 첫항 과 마지막 항을 마지막 연산자로 연산
  // 숫자영역 연산자영역 숫자영역 연산이 발생하고 값 저장 연산자영역
  // first -> previous 연산자 스택 쌓이고 first => previous로 만들어 주기


  // ! 여기서부터 Advanced Challenge & Nightmare 과제룰 풀어주세요.
  if (target.matches('button')) {
    if (action === 'number') {
      firstNum+=buttonContent;// 문자열로 추가
      document.querySelector(".calculator__display--for-advanced").textContent = firstNum;
    }
    if (action === 'operator') {
      if(previousKey==='number'){
        if(previousNum===undefined){
          previousNum = firstNum;
        }else{
          let n1 = Number(firstNum);
          previousNum = calculate(Number(previousNum),operatorForAdvanced[operatorForAdvanced.length-1],n1);
          peratorForAdvanced=[];
        }
      }
      operatorForAdvanced.push(buttonContent);
      
      firstNum='';
      document.querySelector(".calculator__display--for-advanced").textContent = previousNum;
    }
    if (action === 'decimal') {
      //decimal 중복 체크
      if(firstNum.includes('.')){
        return
      }
      if(firstNum===''){
        firstNum+='0';
      }
      firstNum+='.';// decimal을 문자열로 추가
      document.querySelector(".calculator__display--for-advanced").textContent = firstNum;
    }
    if (action === 'clear') {
      resetForAdvanced();
      document.querySelector(".calculator__display--for-advanced").textContent = '0';
    }
    if (action === 'calculate') {
      let n1;
      if(previousNum===undefined){
        n1 = firstNum;
      }else{
        n1 = previousNum;
      }
      let n2;
      if(firstNum===''){// 두번째 숫자 미입력시 연산시키면 첫번째 숫자를 두번째 숫자로 사용
        n2 = n1;
      }else{
        n2 = Number(firstNum);
      }
      let resNumber;
      if(operatorForAdvanced.length===0){
        resNumber = n1;
      }else if(previousKey==='calculate'){
        resNumber=calculate(Number(previousNum),operatorForAdvanced[operatorForAdvanced.length-1],n2)
      }else{
        resNumber=calculate(n1,operatorForAdvanced[operatorForAdvanced.length-1],n2);
      }
      document.querySelector(".calculator__display--for-advanced").textContent = resNumber;
      previousNum = resNumber;
    }
    previousKey = action;
  }

});
/* 어드벤스용 리셋 */
function resetForAdvanced(){
  firstNum='';
  previousNum=undefined;
  operatorForAdvanced=[];
}
