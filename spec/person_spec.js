const { Person } = require("../src/person");

let person = new Person("Ryan", 30, "male", [
  "being a hardarse",
  "agile",
  " ssd hard drives",
]);

describe("Person", function () {
  it("should give Ryan as name", function () {
    expect(person.name).toBe("Ryan");
  });

  it("should give 30 as age", function () {
    expect(person.age).toBe(30);
  });

  it("should give male as gender", function () {
    expect(person.gender).toBe("male");
  });

  it("should give the interests", function () {
    expect(person.interests).toEqual([
      "being a hardarse",
      "agile",
      " ssd hard drives",
    ]);
  });

  it("should give out greeting", function () {
    expect(person.hello()).toBe(
      "Hello, my name is Ryan  and I am 30 years old.I am male and my interests are being a hardarse, being a hardarse and  ssd hard drives"
    );
  });
});
