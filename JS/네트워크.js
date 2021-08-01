function solution(n, computers) {
    //dfs라 생각한 이유?
    //1과 연결된 Array[0] 만 봐서는 1과 연결된 것인지 확인할 수 없기 때문.
    //단순히 push를 통해 인수를 집어넣고, for문으로 단절된 부분을 확인하면 또 효율성에서 걸릴수도?
    const num = [[]]
    const leftNum = Array(n).fill().map((v,i)=>i)
    
    let p=0;
    network(0,0)
    while(p<10){
        network()
    }
    
   
    
    function network(com,target){
        if( num[target][num[target].length-1] !== com){
            leftNum.splice(com,1,"N")
            num[target].push(com)
        }
     
        for(let i=com+1;i<n;i++){
            if(computers[com][i] === 1){
                leftNum.splice(i,1,"N")
                num[target].push(i)
                network(i,target)
            }
        }
    }
    network(0,0)

    console.log(leftNum)

    var answer = 0;
    return answer;
}
