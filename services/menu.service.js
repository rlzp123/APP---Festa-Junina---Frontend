// Simulando um banco de dados em memória
const usersDB = [{ u: "admin", s: "123" }];

const previsoes = [
    "<span>🤠 Status do dia:</span> Mais disputado(a) que o último pedaço de bolo de milho da mesa. Aproveite o hype!",
    "<span>🔥</span> Sua energia hoje está mais alta que labareda de fogueira. Só cuidado para não queimar a largada.",
    "<span>💌</span> Alguém quer te enviar um bilhetinho, mas o nível de timidez é maior que a fila do banheiro químico.",
    "<span>🥧</span> A previsão astral indica 100% de chances de encontrar a pamonha perfeita e 0% de arrependimento.",
    "<span>🎯</span> Alguém está te observando... mas é só para ver se você vai desistir da pescaria para herdar o seu lugar na fila.",
    "<span>🐍</span> Olha a cobra! é mentira, mas a vontade de pedir o segundo espetinho é a maior verdade do seu dia",
    "<span>🍎</span> A maçã do amor que você comprar hoje vai ser a mais doce da festa.",
    "<span>👰</span> Estão tentando te empurrar pro casamento da quadrilha, mas seu verdadeiro par ideal é um prato de canjica bem quentinho.",
    "<span>⭐</span> Os astros dizem que você vai ganhar o Bingo... ou pelo menos sair sem nenhuma mancha de gordura de pastel."
];

const registerUser = (usuario, senha) => {
    const exists = usersDB.find(item => item.u === usuario);
    if (exists) return false;
    usersDB.push({ u: usuario, s: senha });
    return true;
};

const loginUser = (usuario, senha) => {
    return usersDB.find(item => item.u === usuario && item.s === senha);
};

const getRandomPrevisao = () => {
    const randomIndex = Math.floor(Math.random() * previsoes.length);
    return previsoes[randomIndex];
};

module.exports = { registerUser, loginUser, getRandomPrevisao };