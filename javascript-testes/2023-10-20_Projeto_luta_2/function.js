const defaultCharacter = {
    name: '',
    life: 0,
    maxLife: 1,
    attack: 0,
    defense: 0
}
const createKnight = (name) => {
    return {
        ...defaultCharacter,
        name: name,
        life: 100,
        maxLife: 100,
        attack: 10,
        defense: 8

    }
}
const createSorcerer = (name) => {
    return {
        ...defaultCharacter,
        name: name,
        life: 50,
        maxLife: 50,
        attack: 20,
        defense: 4
    }
}

const createLittleMonster = () => {
    return {
        ...defaultCharacter,
        name: 'Little Monster',
        life: 40,
        maxLife: 40,
        attack: 4,
        defense: 4
    }
}
const createBigMonster = () => {
    return {
        ...defaultCharacter,
        name: 'Big Big',
        life: 120,
        maxLife: 120,
        attack: 16,
        defense: 6
    }
}

const stage = {
    fighter1: null,
    fighter2: null,
    fighter1El: null,
    fighter2El: null,


    start(fighter1, fighter2, fighter1El, fighter2El) {
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.fighter1El = fighter1El;
        this.fighter2El = fighter2El;


        this.fighter1El.querySelector('.attackButton1').
            addEventListener('click', () => this.
                doAttack(this.fighter1, this.fighter2));

        this.fighter2El.querySelector('.attackButton2').
            addEventListener('click', () => this.
                doAttack(this.fighter2, this.fighter1));

        this.update();

    },
    update() {
        this.fighter1El.querySelector('.name').
            innerHTML = `${this.fighter1.name} está com ${this.fighter1.life.toFixed(1)} HP`;

        let fighter1Pct = (this.fighter1.life / this.fighter1.maxLife) * 100;
        this.fighter1El.querySelector('.bar').style.width = `${fighter1Pct}%`;


        this.fighter2El.querySelector('.name').
            innerHTML = `${this.fighter2.name} está com ${this.fighter2.life.toFixed(1)} HP`;

        let fighter2Pct = (this.fighter2.life / this.fighter2.maxLife) * 100;
        this.fighter2El.querySelector('.bar').style.width = `${fighter2Pct}%`;


    },
    doAttack(attacking, attacked) {
        if (attacking.life <= 0 || attacked.life <= 0) {
            log.addMessage('Alguém ta morto, não pode atacar.');
            return;
        }
        const attackFactor = (Math.random() * 2).toFixed(2);
        const defenseFactor = (Math.random() * 2).toFixed(2);


        const actualAttack = attacking.attack * attackFactor;
        const actualDefense = attacked.defense * defenseFactor;

        if (actualAttack > actualDefense) {
            attacked.life -= actualAttack;
            attacked.life = attacked.life < 0 ? 0 : attacked.life;
            log.addMessage(`${attacking.name} causou ${actualAttack.toFixed(2)} de dano em ${attacked.name}`);
        } else {
            log.addMessage(`${attacked.name} conseguiu defender:)`)
        }


        this.update();
    }
}
const log = {
    list: [],
    addMessage(msg) {
        this.list.push(msg);
        this.render();
    },
    render() {
        const logEl = document.querySelector('.log');
        logEl.innerHTML = '';

        for (let i in this.list) {
            logEl.innerHTML += `<li>${this.list[i]} </li>`;
        }
    }
}
