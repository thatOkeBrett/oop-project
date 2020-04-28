class Person{
  constructor(name,age,gender,interests){
    this.name = name;
   this.age = age;
   this.gender = gender;
   this.interests = interests;
  }
  hello(){
    return (`Hello, my name is ${this.name}  and I am ${this.age} years old.I am ${this.gender} and my interests are ${this.interests[0,1]} and ${this.interests[2]}`)
  }
}

module.exports = {Person}


