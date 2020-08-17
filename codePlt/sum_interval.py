lis = [[1,4],[7,10],[3,5], [9,12], [14,17]]
def sum_of_intervals(intervals):
    num = []
    for interval in intervals:
        for i in range(interval[0], interval[1]):
            num.append(i)
    print(set(num))
    print(len(set(num)))
sum_of_intervals(lis)