def pig_it(word):
    ay = "ay"
    latinArray = []
    latin = word.split()
    for word in latin:
        if word.isalpha() == False:
            latinArray.append(word)
        else:
            subWord = word[1:]
            firstLetter = word[:1]
            subWord+=firstLetter+ay
            latinArray.append(subWord)
    latinArray = ' '.join(latinArray)
    return latinArray
print(pig_it('o is a piggy !'))