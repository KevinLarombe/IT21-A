class Hero{
    #health;
    constructor(name,health,attack){
        this.name = name;
        this.#health = health;
        this.attack = attack;
        this.items =[];
    }
    getHealth(){
        return this.#health;
    }

    getName(){
        console.log(this.name);
    }

    getAttack(){
        console.log(this.attack);
    }

    getStats(){
        console.log("\n");
        console.log("Name: " +this.name);
        console.log("Health: " +this.#health);
        console.log("Attack: " +this.attack);
    }

    addItem(item){
        this.items.push(item);
    }
    
    totalAttack(){
        return this.attack + this.items.reduce((sum,i)=>sum+i.bonusAttack,0);
    }
    
}

class Warrior extends Hero{
    useAbility(){
        console.log(`${this.name} uses power Strike`);

    }
}



class Archmage extends Hero{
    constructor(name,health,attack,mana){
        super(name,health,attack);
        this.mana = mana;
    }
    useAbility(){
         console.log(`${this.name} uses AVADA KEDAVA`);
    }
}

function performAbility(hero){
    console.log("\n");
    hero.useAbility();

}

class Item {
    constructor(name, bonusAttack){
        this.name = name;
        this.bonusAttack = bonusAttack;
    }
}

const sword = new Item ("Sword", 5);
const staff = new Item ("Tom Riddle's Wand", 10000);

    // const Thorin = new Warrior("Thorin", 100, 10);
    // Thorin.getName();
    // Thorin.getAttack();
    // Thorin.addItem(sword);
    // console.log(Thorin.totalAttack());

    const Voldemort = new Archmage("Voldemort", 100, 10000, 50000);
    Voldemort.useAbility(); 
    Voldemort.getStats();
    Voldemort.addItem(staff);
    console.log(Voldemort.totalAttack());

    // performAbility(Thorin);
  //  performAbility(Voldemort);