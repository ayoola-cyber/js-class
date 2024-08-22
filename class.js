// In practice, we often need to create many objects of the same kind, like users, or goods or whatever.
// As we already know from the chapter Constructor, operator "new", new function can help with that.
// But in the modern JavaScript, there’s a more advanced “class” construct,
//  that introduces great new features which are useful for object-oriented programming.

// The “class” syntax
// The basic syntax is:

// class MyClass {
//   // class methods
//   constructor() { ... }
//   method1() { ... }
//   method2() { ... }
//   method3() { ... }
//   ...
// }

// when you use a function(constructor) inside a class it is called a method


class MyClass {
    constructor(first_name, last_name,  age, nickname){
        this.first_name = first_name
        this.l = last_name // the this.(...)can be anything as it is a variable but the value has to be be last_name
        this.age = age
        this.nickname = nickname
        this.isTeacher = false


    }
    walk() {
        console.log(`${this.first_name} is currently goig for a walk`)
    }
    sleep() {
        console.log(`${this.l} is currenly sleeping`)
    }
    teach() {
        console.log(`The answer to if you are a teacher is ${this.isTeacher}`)
    }
}

// Instantiating an object with the class with the "new" keyword

let student1 = new MyClass ("Ayoola", "Okunola", 14, "A");

console.log(student1.first_name);
console.log(student1.last_name);
console.log(student1.nickname);
console.log(student1.isTeacher);
console.log(student1.walk());
console.log(student1.sleep());
console.log(student1.teach());


let student2 = new MyClass("Michelle", "Okunola", 15, "Michy");
console.log(student2.first_name);
console.log(student2.last_name);
console.log(student2.nickname);
console.log(student2.isTeacher);
console.log(student2.walk());
console.log(student2.sleep());
console.log(student2.teach());