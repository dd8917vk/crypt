def partition(number):
    answer = set()
    answer.add((number, ))
    for x in range(1, number):
        for y in partition(number - x):
            answer.add(tuple(sorted((x, ) + y)))
    return answer


def partitions(num):
    x = partition(num)
    return len(x)
print(partitions(5))


