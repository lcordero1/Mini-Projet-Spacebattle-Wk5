//Rules of the game are
/*
You attack the first alien ship

If the ship survives, it attacks you

If you survive, you attack the ship again

If it survives, it attacks you again … etc

If you destroy the ship, you have the option to attack the next ship or to retreat

If you retreat, the game is over, perhaps leaving the game open for further developments or options

You win the game if you destroy all of the aliens

You lose the game if you are destroyed

Ship Properties
hull is the same as hitpoints. If hull reaches 0 or less, the ship is destroyed

firepower is the amount of damage done to the hull of the target with a successful hit

accuracy is the chance between 0 and 1 that the ship will hit its target

Your spaceship, the USS HelloWorld should have the following properties:

hull/hp - 20
firepower - 5
accuracy - .7
The alien ships should each have the following ranged properties determined randomly:

hull - between 3 and 6
firepower - between 2 and 4
accuracy - between .6 and .8
You could be battling six alien ships each with unique values.
*/

//Main player ship
//6 alien characthers, begin with first alien

//=====================================================================================

//calling our elements
const mainPlayer1El = document.getElementById('characther')
const gameEl = document.getElementById('enemy')
const scoreEl = document.querySelector('score')
const computer = document.querySelector('computer')

const game = 

{
    players: [],
    start: function () {
        startContainer.classList.toggle("hide")
        gameContainer.classList.toggle("hide")
    },
}
//Creating the main player: the spaceship
class EarthStar {
    construtor(hp, firepower, accuracy){
        this.hp = 20;
        this.firepower = 5;
        this.accuracy = .7;
    }
     
    attack(){
        console.log('Die! You vile creature!');
    }
    lose(){
        console.log('Oh no! Ill get you next time!');

    }
    win(){
        console.log('Planet Earth is saved! Hip-hip-HOORAY!');
    }
}
console.log(EarthStar)



class Enemy {
    constructor(hpEne, fiepowerEne, accuracyEne){
        this.hpEne = Math.round((Math.random() * (6 - 3)) + 3),
        this.firepowerEne = Math.round((Math.random() * (4 - 2)) + 2),
        this.accuracyEne = (Math.random() * (.8 - .6)) + .6 
    }

    attackShip(EarthStar) {
        let ranInteger = Math.random();
        console.log(`Enemy accuracy is ${ranNum}`);

        if (ranInteger < this.accuracy) {
            console.log(`${mainPlayer} has been hit!`);
            EarthStar.hp = target.hp - this.firepowerEne;
            console.log(`${EarthStar} hp level is now ${target.hp}`);
            if (target.hp <= 0) {
                console.log(`DEATH TO HUMANS!`);
        }
        const alien = new Enemy();
    }
}

//creating group of aliens(6)


alienCount = 6;



// const alien1 = new Enemy(hpEne.getRndInteger(3, 6),firePowerEne.getRndInteger(2, 4), accuracyEne.Math.floor(Math.random))
// const alien2 = new Enemy(hpEne.getRndInteger(3, 6),firePowerEne.getRndInteger(2, 4), accuracyEne.Math.floor(Math.random))
// const alien3 = new Enemy(hpEne.getRndInteger(3, 6),firePowerEne.getRndInteger(2, 4), accuracyEne.Math.floor(Math.random))
// const alien4 = new Enemy(hpEne.getRndInteger(3, 6),firePowerEne.getRndInteger(2, 4), accuracyEne.Math.floor(Math.random))
// const alien5 = new Enemy(hpEne.getRndInteger(3, 6),firePowerEne.getRndInteger(2, 4), accuracyEne.Math.floor(Math.random))
// const alien6 = new Enemy(hpEne.getRndInteger(3, 6),firePowerEne.getRndInteger(2, 4), accuracyEne.Math.floor(Math.random))



//battle

// const battle = 



// function getRndInteger(min, max){
//     return Math.floor(Math.random) 
// }
// let hpEne = getRndInteger(3, 6);
// let firepowerEne = getRndInteger(2, 4)
// let accuracyEne = math.floor(Math.random)

//Enemy: which is the aliens
// class Enemy{
//     constructor(hpEne, firePowerEne, accuracyEne) {
//         hull: Math.round((Math.random() * (6 - 3)) + 3),
//         firepower: Math.round((Math.random() * (4 - 2)) + 2),
//         accuracy: (Math.random() * (.8 - .6)) + .6
//     } 
//     
// }

// const alien1 = new Enemy
// newEnemy(alien1){
//   allEnemy(){
//     return this.newEnemy
//   }
//   numberOfEnemy(){
//       return this.newEnemy.length
//   }
// }

// const leagueOfAliens = new Enemy()
// league.newEnemy()
// league.newEnemy()

// console.log(leagueOfAliens.numberOf + 'Enemy')
// console.log(leagueOfAliens.allEnemy)