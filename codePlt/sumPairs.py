l1= [1, 4, 8, 7, 3, 15]
l8= [5, 9, 13, -3]
#call with l1, 8

def sum_pairs(ints, sum):
    len1 = len(ints)
    for i in range(len1):
        #print(ints[i+1:])
        for j in ints[i+1:]:
            result = ints[i]+j
            if result == sum:
                return [ints[i], j]
    return None


print(sum_pairs(l8, 10))
