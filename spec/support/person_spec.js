const {Person}  = require("/home/dee/oop-project/src/person")

let person = new Person('Ryan',30,'male',['being a hardarse','agile', ' ssd hard drives'] )
let  greeting =person.hello()

describe("Person", function(){
   it("should give out greeting", function(){
       expect(greeting).toBe('Hello, my name is Ryan  and I am 30 years old.I am male and my interests are agile and  ssd hard drives')
   })
})