function solution(new_id) {
    //제외할 특수문자 구분
  const specialKey = ["~","!","@","#","$","%","^","&","*","(",")","=","+","[","{","]","}",":","?",",","<",">","/",];
    //소문자로 치환
  const new_idLower = new_id.toLowerCase();
    //특수문자 제외
  const modifyId = [];
  for (let k = 0; k < new_idLower.length; k++) {
    if (!specialKey.includes(new_idLower[k])) {
      modifyId.push(new_idLower[k]);
    }
  }
    //"."이 연속으로 있는 경우 하나로 치환
  const modifyIddot = [];
  for (let a = 0; a < modifyId.length; a++) {
    if (!(modifyId[a] === "." && modifyId[a + 1] === ".")) {
      modifyIddot.push(modifyId[a]);
    }
  }
    //"."가 처음,끝에 있을 때 제거
  if (modifyIddot[0] === ".") {
    modifyIddot.splice(0, 1); 
  }
  if(modifyIddot[modifyIddot.length - 1] === ".") {
  modifyIddot.splice(modifyIddot.length - 1, 1);
  }
    //길이가 0인 경우 'a' 추가
  if (modifyIddot.length === 0) {
	modifyIddot.push("a");
  }
    //배열의 길이를 상수로 선언
    const arraylength = modifyIddot.length;
    //길이가 2 이하라면 마지막 문자 반복되게 하기
  if (modifyIddot.length <= 2) {
    for(let k=0;k<(3 - arraylength);k++){
	modifyIddot.push(modifyIddot[arraylength - 1] 
	);}
  }
    //16자 이상인 경우 15자로 줄이고, 마지막에 '.'일 경우 삭제
     
  if(modifyIddot.length >= 16) {
	modifyIddot.splice(15, modifyIddot.length-15);
      if (modifyIddot[14] === ".") {
	modifyIddot.splice(14, 1);
  }
        
  }
    //배열 문자로 합치기

  var answer = modifyIddot.join('');
  return answer;
}
