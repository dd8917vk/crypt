def generate_bc(url, separator):
    ignored = ['#', '?', '=', '&']
    bad_words = ["the","of","in","from","by","with","and", "or", "for", "to", "at", "a"]
    homeAhref = '<a href="/">'
    nextAhref = '<a href="'
    endAhref = '</a>'
    openSpan = '<span class="active">'
    closeSpan = '</span>'
    urlArr = url.split("/")
    urlArr = [u.upper() for u in urlArr]
    path = ''
    pathArr = []

    for i in range(len(urlArr)):
        for j in range(len(urlArr[i])):
            if urlArr[i][j] in ignored:
                urlArr[i]=urlArr[i][:j]
                break
    
    for i in range(len(urlArr)):
        if 'INDEX' in urlArr[i]:
            urlArr.remove(urlArr[i])
    for i in range(len(urlArr)):
        #for first element in array
        if i == 0:
            urlArr[i]=homeAhref+'HOME'+endAhref
        #for last element in array
        if i == len(urlArr)-1 and len(urlArr[i]) < 30:
            if '.' in urlArr[i]:
                indx = urlArr[i].index('.')
                urlArr[i]=urlArr[i][:indx]
            urlArr[i]=urlArr[i].replace('-', ' ')
            urlArr[i]=openSpan+urlArr[i]+closeSpan
        #for all other elements than last and first
        if i != 0 and i != len(urlArr)-1 and len(urlArr[i]) < 30:
            urlArr[i]=urlArr[i].replace('-', ' ')
            if i > 0 and i < len(urlArr[i])-1:
                pathArr.append(urlArr[i])
                if len(pathArr) > 1:
                    pathStr = "/".join(pathArr)+'/'
                    urlArr[i]=(f'{nextAhref}/{pathStr.lower()}">{urlArr[i]+endAhref}')
                else:
                    urlArr[i]=(f'{nextAhref}/{urlArr[i].lower()}/">{urlArr[i]+endAhref}')
        else:
            if i !=0 and i != len(urlArr)-1:
                tmpArr = urlArr[i].split('-')
                wordArr = [word.upper() for word in tmpArr]
                finalArr = []
                for index, word in enumerate(wordArr):
                    if word.lower() not in bad_words:
                        finalArr.append(word[0])
                finalStr = "".join(finalArr)
                urlArr[i]=(f'{nextAhref}/{urlArr[i].lower()}/">{finalStr+endAhref}')

    #add separator
    finalLis = []  
    for i in range(len(urlArr)):
            finalLis.append(urlArr[i])
            finalLis.append(separator)
    finalLis.pop()
    return "".join(finalLis)



print(generate_bc("mysite.com/pictures/holidays.html", " : "))
print(generate_bc("www.codewars.com/users/GiacomoSorbi?ref=CodeWars", " / "))
print(generate_bc("www.microsoft.com/important/confidential/docs/index.htm#top", " * "))