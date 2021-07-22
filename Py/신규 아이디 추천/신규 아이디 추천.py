def solution(new_id):
    # 1단계 new_id의 모든 대문자를 대응되는 소문자로 치환합니다.
    lowerId = str(new_id.lower())

    # 2단계 new_id에서 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거합니다.
    specialId = ["~", "!", "@", "#", "$", "%", "^", "&", "*",
                 "(", ")", "=", "+", "[", "{", "]", "}", ":", "?", ",", "<", ">", "/"]
    exceptSpecial = []
    for i in range(0, len(lowerId)):
        if lowerId[i] in specialId:
            ""
        else:
            exceptSpecial.append(lowerId[i])

  # 3단계 new_id에서 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환합니다.
    notTwodots = []
    for k in range(0, len(exceptSpecial)-1):
        if exceptSpecial[k] == exceptSpecial[k+1] == ".":
            ""
        else:
            notTwodots.append(exceptSpecial[k])
    #마지막 글자가 반영이 안되어있음
    notTwodots.append(exceptSpecial[len(exceptSpecial)-1])
    
   # 4단계 new_id에서 마침표(.)가 처음이나 끝에 위치한다면 제거합니다.
    if len(notTwodots) ==0:
        notTwodots =[]
    elif notTwodots==["."]:
         notTwodots =[]
    elif len(notTwodots) ==2:
        if notTwodots[0] == notTwodots[1] and notTwodots[1]== ".":
            notTwodots =[]
        elif notTwodots[0] == ".":
            notTwodots = notTwodots[1]
        elif notTwodots[1] == ".":
            notTwodots = notTwodots[0]
    else:
        if notTwodots[0] == ".":
            notTwodots = notTwodots[1:]
        if notTwodots[len(notTwodots)-1] == ".":
            notTwodots = notTwodots[:-1]
    
    # 5단계 new_id가 빈 문자열이라면, new_id에 "a"를 대입합니다.
    if notTwodots == []:
        notTwodots = ["a"]
    
    # 6단계 new_id의 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거합니다.
    # 만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거합니다.
    if len(notTwodots) >= 16:
        notTwodots = notTwodots[0:15]
        if notTwodots[14] == ".":
            notTwodots = notTwodots[0:14]
    
    # 7단계 new_id의 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙입니다.
    if len(notTwodots) <= 2:
        notTwodots.append(
            notTwodots[len(notTwodots)-1]*(3-len(notTwodots)))

    answer = ''.join(notTwodots)
    return answer
