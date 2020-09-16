def increment_string(string):
    original_string = ''
    zeros = ''
    new_string = ''
    for i in string:
        try:
            i = int(i)
        except ValueError:
            original_string+=i
        if type(i) == int and i == 0:
            zeros+='0'
            
        else:
            if type(i) == int and i != 0:
                new_string += string[len(string)-1:]
    if new_string:
        new_string = int(new_string)
        new_string+=1
        new_string = str(new_string)
        return(original_string+zeros+new_string)
    else:
        zeros = zeros[:-1]
        return(original_string+zeros+'1')
    

print(increment_string("foo"))
print(increment_string("foobar001"))
print(increment_string("foobar1"))
print(increment_string("foobar00"))
print(increment_string("foobar99"))
print(increment_string("foobar999"))
print(increment_string("foobar0100"))


#Test.assert_equals(increment_string("foo"), "foo1")
#Test.assert_equals(increment_string("foobar001"), "foobar002")
#Test.assert_equals(increment_string("foobar1"), "foobar2")
#Test.assert_equals(increment_string("foobar00"), "foobar01")
#Test.assert_equals(increment_string("foobar99"), "foobar100")
#Test.assert_equals(increment_string("foobar099"), "foobar100")