//가위바위보 버튼 가져오기 (한번에)
const buttons = document.querySelectorAll('button'); // 문서에 있는 모든 버튼 불러오기
// 그럼 버튼스 안에는 버튼들이 배열로 저장되어있음
const computerchoice = document.querySelector('.computer-choice');
const userchoice = document.querySelector('.you-choice');
const winner = document.querySelector('.result');

const result = ['가위','바위','보']; //전역변수로 컴퓨터 가바보 배열
 
const show = (user, computer, result) => {
    computerchoice.innerText = computer;
    userchoice.innerText = user;
    winner.innerText = result;
};

const game = (user,computer)=>{
        let res;

    if (user === computer){
        res ='무승부!';
    }else{
        switch (user+computer){
            //텍스트연산
            // 사용자이김 : 가위보, 바위가위, 보바위
            // 사용자짐 : 가위바위, 바위보, 보가위
            case '가위보':
            case '바위가위':
            case '보바위':
                res= '사용자 승리~';
                break;
            //switch 문은 case가 참일경우 break를 만날때까지 실행됨.
            case '가위바위':
            case '바위보' :
            case '보가위':
                res = '사용자 짐 ㅜㅜ~ 컴터승,,';
                break;
        }
    }

    show(user,computer, res);
};

const play = (event) => {
    //사람이 클릭한버튼의 글자 저장.
    const user = event.target.innerText;
    //result 배열의 0~2 를 랜덤으로 뽑게하기
    const comindex = Math.floor(Math.random() *3);
    //배열인덱스를 computer변수에 저장.
    const computer = result[comindex];
    game(user,computer);
};


buttons.forEach((button) => {
    button.addEventListener('click', play); 
});

