def solution(phone_book):
    answer = True
    phoneArr = sorted(phone_book)
    for i in range(0, len(phoneArr)-1):
        if(phoneArr[i] == phoneArr[i+1][0:len(phoneArr[i])]):
            return False
    return answer
