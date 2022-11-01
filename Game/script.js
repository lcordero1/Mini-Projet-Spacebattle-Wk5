//Rules of the game are
/*
You attack the first alien ship

if EarthStar

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
const startContainer = document.querySelector('start-container')

const game = {
    players: [],
    start: function () {
        startContainer.classList.toggle("hide")
        gameContainer.classList.toggle("hide")
    },
    //battle
    battle = (EarthStar) => {

        outcome()

        while (alienCount > 0) {
            if (alien.hpEne < 1) {
                alienCount--
            }
        }



        //Creating the main player: the spaceship
        class EarthStar {
            construtor(hp, firepower, accuracy) {
                this.hp = 20;
                this.firepower = 5;
                this.accuracy = .7;
            }

            attack() {
                console.log('Die! You vile creature!');
            }
            lose() {
                console.log('Oh no! Ill get you next time!');

            }
            win() {
                console.log('Planet Earth is saved! Hip-hip-HOORAY!');
            }
        }
        console.log(EarthStar)



        class Enemy {
            constructor(hpEne, fiepowerEne, accuracyEne) {
                this.hpEne = Math.round((Math.random() * (6 - 3)) + 3),
                    this.firepowerEne = Math.round((Math.random() * (4 - 2)) + 2),
                    this.accuracyEne = (Math.random() * (.8 - .6)) + .6
            }

            attackShip(EarthStar) {
                let ranInteger = Math.random();
                console.log(`Enemy accuracy is ${ranInteger}`);

                if (ranInteger < this.accuracy) {
                    console.log(`${mainPlayer} has been hit!`);
                    EarthStar.hp = target.hp - this.firepowerEne;
                    console.log(`${EarthStar} hp level is now ${target.hp}`);
                    if (target.hp <= 0) {
                        console.log(`DEATH TO HUMANS!`);
                    }
                    const alien = new Enemy();
                    //creating group of aliens(6)
                    alienCount = 6;
                }
            }

          


           






