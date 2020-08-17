words = ['merry', 'merry', 'christmas']
words1 = ["merr'y", "merr'y", 'christmas']
words2 = []
def top_3_words(text):
    wc = {}
    for word in text:
        wc[word] = wc.get(word, 0) + 1
    return wc
print(top_3_words(words))