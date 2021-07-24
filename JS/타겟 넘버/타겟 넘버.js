function solution(numbers, target) {
    let sortNum = numbers.sort();
    let addAll = sortNum.reduce((a,b)=>a+b)
    let zeroIndex = [];


    let znum =[];
    //바깥에서 선언하지 않으면 for문을 돌때마다 다시 target숫자가 됨
    let ztar = target+numbers[numbers.length-1];
    for(let i=0;i<leftnum.length;i++){    
              //return값이 0이 될때까지 numbers에서 한개씩 뺌
        if(!(ztar===0)){
            ztar = ztar-leftnum[i]
          //return이 0이 되면 남은 숫자들을 znum 배열에 추가
        }else if(ztar === 0){
            znum.push(leftnum[i]);
        }
    }
    //numbers항목이 다 넘어갔다면 경우의 수는 하나임.(0=0이므로)
    if(znum.length === 0){
        return 1;
    }else{
        
    }
    
    
 
    // var answer = 0;
    // return answer;
}
