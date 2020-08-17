import re
# Making Getters and Setter methods
class Ip:
    def __init__(self, ip):
        self.set_ip(ip)
    
    def set_ip(self, value):
        try:
            value = value.split('.')
            if len(value) != 4:
                return False
            for i in value:
                if not i.isdigit():
                    return False:
                
        if value > 5:
            self._ip = value
        
    
    def get_ip(self):
        return self._ip

i = Ip(6)
print(i.get_ip())