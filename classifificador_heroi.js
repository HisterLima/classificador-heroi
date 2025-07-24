const nameHeroes = [
    {name: "Stratovarius", expHeroe:750},
    {name: "Hammerfall", expHeroe:1200},
    {name: "Helloween", expHeroe:3500},
    {name: "Savatage", expHeroe:6900},
    {name: "Whitesnake", expHeroe:7500},
    {name: "Nightwish", expHeroe:8200},
    {name: "Masterplan", expHeroe:10000},
    {name: "Stryper", expHeroe:10200},
]

function levelHeroes(expHeroe) {
    if (expHeroe < 1000){
        return "Ferro"
    } else if (expHeroe <= 2000){
        return "Bronze"
    } else if (expHeroe <= 5000){
        return "Prata"
    } else if (expHeroe <= 7000){
        return "Ouro"
    } else if (expHeroe <= 8000){
        return "Platina"
    } else if (expHeroe <= 9000){
        return "Ascendente"
    } else if (expHeroe <= 10000){
        return "Imortal"
    } else return "Radiante"
}
  
for (let i = 0; i < nameHeroes.length; i++){
    const hero = nameHeroes [i]
    const level = levelHeroes(hero.expHeroe)
     console.log(`O Herói de nome **${hero.name}** está no nível de **${level}**`);
}


