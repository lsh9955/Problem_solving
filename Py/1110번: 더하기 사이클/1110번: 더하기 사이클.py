a=int(input())
b=0
s=1
if a<10 and a>10:
    b = a*10
else:
    b = a
k = (a%10)*10+(b//10+b%10)%10
if k == a:
    print(s)
while a != k:
    k = (k%10)*10+(k//10+k%10)%10
    s = s+1
    if a == k:
        print(s)
