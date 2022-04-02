# https://programmers.co.kr/learn/courses/30/lessons/42586?language=python3

def solution(progresses, speeds):
    day = 1
    answer = []
    count = 0
    for i in range (0,len(progresses)):
        if progresses[i]+speeds[i]*day>=100:
            count = count + 1
        else:
            if i !=0:
                answer.append(count)
            count = 1
            while progresses[i]+speeds[i]*day<100:
                day = day + 1
    answer.append(count)
    return answer
