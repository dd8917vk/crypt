import string

def alphabet_position(text):
    newStr = ''
    alpha = list(string.ascii_lowercase)
    text = text.lower()
    for letter in range(len(text)):
        if text[letter] in alpha:
            index = alpha.index(text[letter])+1
            newStr+=str(index)+' '
    newStr = newStr.strip()
    return newStr
print(alphabet_position('christmas'))
