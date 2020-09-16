from itertools import permutations, product
def get_pins(observed):

    pins = {
        '1': ['1', '2', '4'],
        '2': ['1', '2', '5', '3'],
        '3': ['2', '3', '6'],
        '4': ['1', '5', '7', '4'],
        '5': ['2', '4', '6', '8', '5'],
        '6': ['3', '5', '9', '6'],
        '7': ['4', '8', '7'],
        '8': ['5', '7', '9', '8', '0'],
        '9': ['6', '8', '9'],
        '0': ['8', '0']
    }
    lis = [pins[n] for n in observed]
    a = list(product(*lis))
    return [''.join(i) for i in a]


#for i in set(list(p)):
    #print(i)
print(get_pins('369'))
#for key, value in pins.items():
    #for item in value:
        #print(item)