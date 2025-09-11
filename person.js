class Person{

    constructor(name,age,occupation){
        this.name = name;
        this.age = age;
        this.occupation = occupation;
    }

    getName(){
        console.log(this.name);
    }


    displayInfo(){
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
        console.log("Occupatio: " + this.occupation);
        console.log("-----------------");
    }

}

const person1 = new Person("Coco Martin",24,"Masahista");

person1.getName();
person1.displayInfo();