def valid_solution(board):
    solved = True
    verticals = [[] for x in range(9)]
    grids = [[] for x in range(9)]
    for i in range(len(board)):
        for j in range(len(board[i])):
            verticals[j].append(board[i][j])
            if (j+1) % 3 == 0:
                grids[i].extend(board[i][(j+1)-3:j+1])
    for i in range(len(board)):
        for j in range(len(board[i])):
            if board[i][j] == 0:
                solved = False
                break
            if j+1 not in board[i]:
                solved=False
                break
            if j+1 not in verticals[i]:
                solved=False
                break
            if j+1 not in grids[i]:
                solved=False
                break
            #if board[i][j] not in verticals[i]:
                #solved = False
                #break
            #if board[i][j] not in grids[i]:
                #solved = False
                #break
    print(solved)

valid_solution([[5, 3, 4, 6, 7, 8, 9, 1, 2], 
                [6, 7, 2, 1, 9, 5, 3, 4, 8],
                [1, 9, 8, 3, 4, 2, 5, 6, 7],
                [8, 5, 9, 7, 6, 1, 4, 2, 3],
                [4, 2, 6, 8, 5, 3, 7, 9, 1],
                [7, 1, 3, 9, 2, 4, 8, 5, 6],
                [9, 6, 1, 5, 3, 7, 2, 8, 4],
                [2, 8, 7, 4, 1, 9, 6, 3, 5],
                [3, 4, 5, 2, 8, 6, 1, 7, 9]])
valid_solution([[5, 3, 4, 6, 7, 8, 9, 1, 2], 
                [6, 7, 2, 1, 9, 0, 3, 4, 9],
                [1, 0, 0, 3, 4, 2, 5, 6, 0],
                [8, 5, 9, 7, 6, 1, 0, 2, 0],
                [4, 2, 6, 8, 5, 3, 7, 9, 1],
                [7, 1, 3, 9, 2, 4, 8, 5, 6],
                [9, 0, 1, 5, 3, 7, 2, 1, 4],
                [2, 8, 7, 4, 1, 9, 6, 3, 5],
                [3, 0, 0, 4, 8, 1, 1, 7, 9]])
