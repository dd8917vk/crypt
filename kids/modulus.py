class Bank:
    members = []
    def __init__(self, name):
        self.bankName = name
    def addMember(self, member):
        self.members.append(member)

b = Bank('US')

class Customer(Bank):
    accounts = []
    def __init__(self, fname, lname, dob, vip):
        self.fname = fname
        self.lname = lname
        self.dob = dob
        self.vip = vip
    def showCustomers(self, arr):
        for i in arr:
            print(i.fname, i.lname, i.dob, i.vip)

class Account(Customer):
    def __init__(self, fname, lname, dob, vip, accountNumber):
        super().__init__(self, fname, lname, dob)
        self.accountNumber = accountNumber

c = Customer('John', 'Johns', '09-14-55', True)
b.addMember(c)
c.showCustomers(Bank.members)
a = Account('John', 'Johns', '09-44-25', True, 123)
