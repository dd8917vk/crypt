def isPP(n):
    # create emptpy list to return at end if pp is found
    lis = []
    # loop from > 1 through n+1 to check powers
    for i in range(2, n+1):
        # nested loop to run against base num as power
        for j in range(2, i+1):
            # check both num as powers against each other to see
            # if they are perfect powers
            if i**j == n or j**i == n:
                # add i and j to list if they are perfect powers
                lis.extend((i,j))
                # ensure that the second element in list is greater than 2
                # which makes sure that it doesnt return a pp that has 1
                # as its exponent
                if lis[1] > 1:
                    return lis
    return None
print(isPP(25))