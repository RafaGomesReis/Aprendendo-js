const char = createKnight('Rafa');
const monster = createLittleMonster();
console.log(monster.name);

stage.start(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster')
);