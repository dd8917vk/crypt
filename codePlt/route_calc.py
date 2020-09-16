import operator
def calculate(expression):
    exp = []
    ops = { "+": operator.add, "-": operator.sub, "*": operator.mul, "$": operator.truediv } # etc.
    for i in expression:
        if i in ops.keys():
            print(i)
    #return '404: Bad request'



print(calculate("1.1")) #, 1.1])
print(calculate("10+5")) #, 15])
print(calculate("8-2")) #, 6]        
print(calculate("4*3")) #, 12]                 
print(calculate("18$2")) #, 9]                 
print(calculate("5+8-8*2$4")) #, 9]            
print(calculate("3x+1"))#, "400: Bad request"] 