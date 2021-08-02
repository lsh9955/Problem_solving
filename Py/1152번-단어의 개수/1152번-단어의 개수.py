a = str(input())
b = a.count(' ')
if a[0] == ' ':
    b = b - 1
if a[-1] == ' ':
    b = b - 1
print(b+1)
