class Character{
  constructor(name,lifePts,attackPts,defensePts){
    this.name=name
    this.lifePts=lifePts
    this.attackPts=attackPts
    this.defensePts
  }

  attack(targetCharacter){
targetCharacter.lifePts -= this.attackPts - targetCharacter.defensePts
  }
}

class Thief extends Character{
  attack(targetCharacter){
targetCharacter.lifePts -=(this.attackPts - targetCharacter.defensePts) *2
  }
}

class Mage extends Character{
  constructor(name,lifePts,attackPts,defensePts,magicPts){
  super(name,lifePts,attackPts,defensePts)
  this.magicPts=magicPts
  }

  attack(targetCharacter){
    targetCharacter.lifePts -=(this.attackPts + this.magicPts) -targetCharacter.defensePts
  }

  heal(targetCharacter){
  targetCharacter.lifePts += this.magicPts *2
  }
}

class Warrior extends Character{
  constructor(name,lifePts,attackPts,defensePts,shieldPts){
    super(name,lifePts,attackPts,defensePts)
    this.shieldPts=shieldPts
    this.stance='attacking'
  }

  attack(targetCharacter){
    if(this.stance ==='attacking'){
      super.attack(targetCharacter)
    }
  }

  switchStance(){
    if(this.stance ==='attacking'){
      this.stance='defending'
      this.defensePts += this.shieldPts
    }else{
      this.stance='attacking'
      this.defensePts-= this.shieldPts
    }
  }
}

const Lemuel= new Mage('Lemuel',200,4,2,30)
const Marina = new Thief('Marina',150,3,8)
const Daniela= new Warrior('Daniela',180,2,6,4)
console.table({Lemuel,Marina,Daniela})