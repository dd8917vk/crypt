def move_zeros(array):
    zeros = []
    others = []
    final_list = []
    for i in range(len(array)):
        if array[i]== 0 and type(array[i]) == int or type(array[i]) == float:
            zeros.append(int(array[i]))
        else:
            others.append(array[i])
    final_list = others+zeros
        
    return final_list





print(move_zeros([1,2,0,1,0,1,0,3,0,1]))
print(move_zeros([9,0.0,0,9,1,2,0,1,0,1,0.0,3,0,1,9,0,0,0,0,9]))
print(move_zeros(["a",0,0,"b","c","d",0,1,0,1,0,3,0,1,9,0,0,0,0,9]))
print(move_zeros(["a",0,0,"b",None,"c","d",0,1,False,0,1,0,3,[],0,1,9,0,0,{},0,0,9]))
print(move_zeros([0,1,None,2,False,1,0]))
print(move_zeros(["a"]),["a"])