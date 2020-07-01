#returns index after index when sum of elements of the left side
#of the array equal sum of elements of right side of array
li = [1,2,3,4,5,6,5,8,4,2,8,5,4,2,1,4,3,2,1,1,2,1,1,1,1,1]

def find_even_index(arr):
    for i in range(len(li) + 1):
        left = sum(li[:i])
        right = sum(li[i+1:])
        if left == right:
            return i
    return -1

#returns if narcisistc nuber
def narcissistic(num):
    splitNum = map(int, str(num))
    expos = list(map(lambda x: x ** len(splitNum), splitNum))
    return sum(expos) == num

def get_middle(s):
    if len(s)%2==0:
        s =  s[(len(s)//2)-1:(len(s)//2)+1]
        return s
    else:
        s =  s[(len(s)//2):len(s)//2+1]
        return s

def difference(a, b):
    list_difference = []
    for item in a:
        if item not in b:
            list_difference.append(item)
    return list_difference