function solution(n, lost, reserve) {

    const sortLost = lost.sort();
    const sortReserve = reserve.sort();
    //먼저 다른 학생들한테는 체육복을 빌려줄수 없는 경우의 수를 먼저 빼놔야함
    for(let i=0;i<lost.length;i++){
       for(let j=0;j<reserve.length;j++){
           if((sortLost[i]) == sortReserve[j]){
                sortLost.splice(i,1,"k");
               sortReserve.splice(j,1,"p");
               i++;
           }
       }
    }
          for(let i=0;i<lost.length;i++){
       for(let j=0;j<reserve.length;j++){
        
          if(sortLost[i] == sortReserve[j]+1){
               sortLost.splice(i,1,"k");
               sortReserve.splice(j,1,"p");
               i++;   
            
           }else if((sortLost[i]) == sortReserve[j]-1){
                    sortLost.splice(i,1,"k");
               sortReserve.splice(j,1,"p");
               i++;  
           }
          }}
    const possible = [];
    for(let k=0;k<sortLost.length;k++){
        if(sortLost[k] == "k"){
        possible.push("1")
        }
    }
    var answer = n-(sortLost.length-possible.length);
    return answer;
}
