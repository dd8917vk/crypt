board = [[0, 0, 1],
         [0, 1, 2],
         [2, 1, 0]]

board2 = [[1, 2, 0],
         [1, 1, 2],
         [1, 1, 1]]

def is_solved(board):
    x = False
    o = False
    backslash = []
    forwardslash = []
    verticals = []
    for i in range(len(board)):
        if 0 in board[i]:
            return -1
        horizontals_set = set(board[i])
        if 1 in horizontals_set and len(horizontals_set) < 2 > 0:
            x = True
        if 2 in horizontals_set and len(horizontals_set) < 2 > 0:
            o = True

        backslash.append(board[i][i])
        forwardslash.append(board[i][(len(board)-1)-i])
        tmpArray = []
        for j in range(len(board[i])):
            tmpArray.append(board[j][i])
        verticals.append(tmpArray)
        verticals_set = set(verticals[i])
        if 1 in verticals_set and len(verticals_set) < 2 > 0:
            x = True
        if 2 in verticals_set and len(verticals_set) < 2 > 0:
            o = True

    backslash_set = set(backslash) 
    forwardslash_set = set(forwardslash)
    if x and o == True:
        return 0
    if x == True:
        return 1
    if o == True:
        return 2
            
print(is_solved(board2))

