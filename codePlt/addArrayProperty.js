function addArrayProperty(obj, key, arr) {
    obj[key] = arr
    }
  
const o = {
    fullname : ['james', 'bellamy'],
    hobbies : ['coding', 'gaming']
}
  

var myArr = ['berries', 'bats'];  
addArrayProperty(o, 'fullname', myArr)
  
console.log(o)