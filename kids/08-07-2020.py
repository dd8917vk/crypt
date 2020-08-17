def area_triangle(b, h):
    return((b*h)/2)

operations = ['parentheses', 'exponents', 'multiplication', 'division', 'addition', 'subtraction']


def area_square_rec(b, h):
    return b*h

def cube(s):
    return s**3


from math import pi

def sphere(r):
    return((4/3)*pi*r**3)

lis = ['Have','A','Merry','Merry','Christmas','And','A','Happy','New','Year']


def reverse(lis):
    reversed_list = []
    ll = len(lis)
    for i in range(ll):
        reversed_list.append(lis[ll-(i+1)])
    return reversed_list




    