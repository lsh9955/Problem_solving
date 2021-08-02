#입력받은 값 할당
a = int(input())
b = list(map(str, input().split()))
c = int(input())
d = list(map(str, input().split()))

#딕셔너리 만들기 위해 빈 객체 생성
e = {}

#딕셔너리에 값이 없다면 새로 추가, 있다면 1 추가
for i in range(0, a):
    if b[i] in e:
        e[b[i]] += 1
    else:
        e[b[i]] = 1
#딕셔너리에 답으로 찾아야 할 값이 있다면 value값을 print,아니면 0을 print
for k in range(0, c):
    if d[k] in e:
        print(e[d[k]], end=" ")
    else:
        print('0', end=" ")
