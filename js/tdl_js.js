var textfield = document.getElementById('textt');
var todo = document.getElementById('button');
var tdl = document.getElementById('todolist');
var alldel = document.getElementById('alldelbtn');


todo.addEventListener('click', ()=> {
    if (textfield.value == '') 
        alert('오늘의 할 일을 입력해 주세요!');
    else {
    var list = document.createElement('li'); // html에 li태그 추가
        list.innerText = textfield.value; // list에 textfield에 쓴 거 적음
        tdl.appendChild(list); // tdl에 자식으로 list추가
        textfield.value = ""; // textfield.value를 공백으로 초기화

        list.addEventListener('click', ()=> { // list 클릭하면
            list.style.textDecoration = "line-through"; // list 취소선 생김
    })
}})


// todo.addEventListener('keyup', function(e) {
//     if (e.key == 'Enter') {
//         if (textfield.value == '') 
//             alert('plz fill up this zone!');
//         else {
//         var list = document.createElement('li'); // html에 li태그 추가
//             list.innerText = textfield.value; // list에 textfield에 쓴 거 적음
//             tdl.appendChild(list); // tdl에 자식으로 list추가
//             textfield.value = ""; // textfield.value를 공백으로 초기화

//             list.addEventListener('click', ()=> { // list 클릭하면
//                 list.style.textDecoration = "line-through"; // list 취소선 생김
//             })
//         }
//     }
// })


alldel.addEventListener('click', function() {
    var delcf = confirm('정말 전체 삭제 할까요?') // alldelbtn 버튼 클릭하면 리얼리? 뜸
    if (delcf == true) {    // 컨펌창에 Really? 뜨고 ㅇㅇ 누르면
        if (tdl.innerText == '') { // 리스트에 할 일 아무것도 없으면
            alert('삭제할 항목이 없습니다!');}
        else
            tdl.innerText='';  // 전체 삭제
    }
    else   // 진짜 지울 거임?에 ㄴㄴ일 때
        return false;  // 삭제 취소
}
)