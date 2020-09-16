a = [['c','d'], ['a', 'b'], 'b,', 'c']

def t(l):
    if not l:
        return l
    else:
        if isinstance(l[0], str):
            print(l[:1])
            



print(a[0]+a[1:])
print(a[1:])
print(a[:1]+a[1:])