def solution(lottos, win_nums):
  #lottos에서의 0의 갯수, 0이 아닌 숫자를 따로 분리
    zero_num = 0
    lottosNotZero = []
    for i in range(0,len(lottos)):
        if(lottos[i] == 0):
            zero_num += 1
            #win_nums에 있다면 lottosNotZero에 추가
        elif lottos[i] in win_nums:
            lottosNotZero.append(lottos[i])
    #가장 순위가 낮을 경우 = 7-lottosNotZero에 있는 수
    minRank = 7 - len(lottosNotZero)
    #가장 순위가 높을 경우 = 0이 다 맞았을 때
    maxRank = minRank - zero_num
    #모두 맞추지 않았을 때 7로 나오는 것을 방지
    if minRank == 7:
        minRank = 6
    if maxRank == 7:
        maxRank = 6
    answer = [maxRank,minRank]
    return answer
