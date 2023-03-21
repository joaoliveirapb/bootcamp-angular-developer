class Person {
  name;
  age;

  constructor(name, age) {
    this.name = name ;
    this.age = age ;
  }
}

function comparePeople(p1, p2) {
  if(p1.age > p2.age) {
    console.log(`${p1.name} é mais velho(a) que o(a) ${p2.name}`);
  } else if(p2.age > p1.age) {
    console.log(`${p2.name} é mais velho(a) que o(a) ${p1.name}`);
  } else {
    console.log(`${p1.name} e ${p2.name} tem a mesma idade`);
  }
}

const person1 = new Person('João', 21);
const person2 = new Person('Rebeca', 21);

comparePeople(person1, person2);