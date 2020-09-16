def anagrams(word, words):
    finalArr = []
    for i in range(len(words)):
        seen = {}
        wordDict = {}
        for j in range(len(words[i])):
            if words[i][j] not in seen:
                seen[words[i][j]] = 1
            else:
                seen[words[i][j]]+=1
        for k in range(len(word)):
            if word[k] not in wordDict:
                wordDict[word[k]] = 1
            else:
                wordDict[word[k]]+=1
        if seen == wordDict:
            finalArr.append(words[i])
    return finalArr
            
print(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']))