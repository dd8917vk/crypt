voters = [["a", "c", "d", "e", "b"], #[1] was c
         ["e", "b", "d", "c", "a"],
         ["d", "e", "c", "a", "b"],
         ["c", "e", "d", "b", "a"],
         ["b", "e", "a", "c", "d"]]
def runoff(voters):
    t = {}
    winner = None
    for i in voters:
        for j in i:
            if j not in t:
                t[j] = 0
            else:
                t[j] += 1
    expected_value = next(iter(t.values())) 
    all_equal = all(value == expected_value for value in t.values())
    if all_equal:
        return None
    else:
        max_value = max(t.values())
        winner = [k for k, v in t.items() if v == max_value]
        

print(runoff(voters))


all_candidates = [j for i in voters for j in i]
print(all_candidates)