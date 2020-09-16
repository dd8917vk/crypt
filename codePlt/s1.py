import itertools
import string

def mix(s1, s2):
    lca = dict.fromkeys(string.ascii_lowercase, 0)
    lcb = dict.fromkeys(string.ascii_lowercase, 0)
    same_dict = {}
    diff_dict = {}
    seen = 0
    finalStr = ''
    #for i, (a, b) in enumerate(itertools.zip_longest(s1, s2)):
    for i in s1:
        if i.isalpha() and i.islower():  
            lca[i] = lca.get(i, 0)+1
    for j in s2:
        if j.isalpha() and j.islower():
            lcb[j] = lcb.get(j, 0)+1
    #lca = {k: v for k, v in sorted(lca.items(), key=lambda item: item[1], reverse=True)}
    #lcb = {k: v for k, v in sorted(lcb.items(), key=lambda item: item[1], reverse=True)}
    #print(lca, lcb)
    for index, (lcai, lcbi) in enumerate(zip(lca, lcb)):
        #print(f'lca letter->{lcai} lca count->{lca[lcai]}\n'
        #    f'lcb letter ->{lcbi} lcb count-> {lcb[lcbi]}')
        if (lca[lcai] > 1 or lcb[lcbi] > 1) and (lca[lcai] != lcb[lcbi]):
            seen = max(lca[lcai], lcb[lcbi])
            #print(seen, lca[lcai], lcb[lcbi], lcai, lcbi)
            same_dict[lcai] = seen
        if (lca[lcai] > 1 or lcb[lcbi] > 1) and (lca[lcai] == lcb[lcbi]):
            diff_dict[lcai] = lca[lcai]

    same_dict = {k: v for k, v in sorted(same_dict.items(), key=lambda item: item[1], reverse=True)}
    diff_dict = {k: v for k, v in sorted(diff_dict.items(), key=lambda item: item[1], reverse=True)}
    print(same_dict)
    print(diff_dict)
    for k, v in same_dict.items():
        print(k,v)
        for k2, v2 in diff_dict.items():
            print(k2,v2)
    

        


print(mix("Are they here", "yes, they are here"))#, "2:eeeee/2:yy/=:hh/=:rr")
print(mix("looping is fun but dangerous", "less dangerous than coding"))#, "1:ooo/1:uuu/2:sss/=:nnn/1:ii/2:aa/2:dd/2:ee/=:gg")
print(mix(" In many languages", " there's a pair of functions"))#, "1:aaa/1:nnn/1:gg/2:ee/2:ff/2:ii/2:oo/2:rr/2:ss/2:tt")
print(mix("Lords of the Fallen", "gamekult"))#, "1:ee/1:ll/1:oo")
print(mix("codewars", "codewars"))#, "")
print(mix("A generation must confront the looming ", "codewarrs"))#, "1:nnnnn/1:ooooo/1:tttt/1:eee/1:gg/1:ii/1:mm/=:rr")