import math
class Vector:
    def __init__(self, lis):
        self.lis = lis
    def __str__(self):
        return str(self.lis)
    def __setitem__(self, index, value):
        self.lis[index] = value
    def __getitem__(self, index):
        return self.lis[index]
    def __len__(self):
        return len(self.lis)
    def __add__(self, other):
        concat_list = list(self.lis) + list(other)
        return concat_list
    def add(self, other):
        if len(self.lis) == len(other):
            final_list = [sum(i) for i in zip(self.lis, other)] 
            return final_list
        else:
            raise Exception("Vectors must be same length")
    def subtract(self, other):
        if len(self.lis) == len(other):
            final_list = [i-j for i, j in zip(self.lis, other)] 
            return final_list
        else:
            raise Exception("Vectors must be same length")
    def dot(self, other):
        if len(self.lis) == len(other):
            final_list = [i*j for i, j in zip(self.lis, other)] 
            return sum(final_list)
        else:
            raise Exception("Vectors must be same length")
    def norm(self):
        final_list = [i**2 for i in self.lis] 
        return(math.sqrt(sum(final_list)))
    def equals(self, other):
        if self.lis == other:
            return True
        else:
            return False


        



a = Vector([1,2,3])
b = Vector([4,5,9])

print(a)
print(a.add(b))
print(a.subtract(b))
print(a.dot(b))
print(a.norm())
print(a.equals(b))