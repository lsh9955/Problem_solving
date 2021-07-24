function solution(numbers, target) {
    let sortNum = numbers.sort();
    let addAll = sortNum.reduce((a,b)=>a+b)
    let zeroIndex = [];


    for(let i=0;i<sortNum.length;i++){
        //result숫자까지 끌어와서 중간값을 구하면 안됨?
        
        console.log(sortNum)
        if(sortNum.reduce((a,b)=>a+b) !== target){
            sortNum.splice(i,1,-sortNum[i])
             zeroIndex.push(sortNum[i])
        }
    }
    
 
    // var answer = 0;
    // return answer;
}
