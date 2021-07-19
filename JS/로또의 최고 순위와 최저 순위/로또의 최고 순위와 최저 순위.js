function solution(lottos, win_nums) {
    //내가 고른 숫자를 오름차순으로 정렬
    const mySortNum  = lottos.sort((a,b)=>a-b);
    //배열에서 0을 제외함
    const expZero = [];
    for(let i=0;i<mySortNum.length;i++){
        if(mySortNum[i] === 0){
            ''
        }else{
            expZero.push(mySortNum[i])
        }
    }
    //배열에서 0의 개수
    const zeroNum = mySortNum.length-expZero.length
    //당첨 숫자를 오름차순으로 정렬
    const winSortNum = win_nums.sort((a,b)=>a-b);
    //당첨 숫자와 일치하는 개수를 찾아 최소 등수를 구함
    let winMin = 7;
    for(let k=0;k<expZero.length;k++){
        if(expZero.length === 0){
            ''
        }else{
            for(let p=0;p<winSortNum.length;p++){
                if(expZero[k] === winSortNum[p]){
                   winMin -= 1;
                }
            }
    }}
    //당첨된 최소 개수에 0의 개수를 빼서 최대 등수를 구함.
    //1개와 2개 당첨 모두 6등으로 처리되게 함.
    let winMax = winMin - zeroNum;
      if(winMax === 7){
        winMax = 6
    }
        if(winMin === 7){
        winMin = 6
    }
    return([winMax,winMin])
 
}
