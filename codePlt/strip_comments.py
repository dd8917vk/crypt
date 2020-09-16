def solution(string, markers):
    words = string.split('\n')
    for i, j in enumerate(words):
        for k, h  in enumerate(words[i]):
            if h in markers:
                try:
                    words[i] = words[i][words[i].index(words[i][0]):words[i].index(words[i][k])]
                except IndexError:
                    pass
    for i in range(len(words)):
        words[i] = words[i].strip()
        if words[i] != words[len(words)-1]:
            words[i] = words[i]+'\n'
    return ''.join(words)


            
            

print(solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"]))
print(solution("a #b\nc\nd $e f g ", ["#", "$"]))