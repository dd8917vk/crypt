import re

m = re.compile('[a-z]+')

s = "this"

c = m.match(s)

print(c.group(), c.start(), c.end(), c.span())

if c:
    print(f"Match: {c.group()}")
else:
    print("No match")

p = re.compile('\d+')
print(p.findall('12 drummers drumming, 11 pipers piping, 10 lords a-leaping'))