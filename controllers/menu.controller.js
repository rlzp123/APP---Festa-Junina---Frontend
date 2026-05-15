const menuService = require('../services/menu.service');
const jwt = require('jsonwebtoken');

const SECRET_KEY = 'segredo_do_arraia'; // Em produção, use variáveis de ambiente (.env)

const register = (req, res) => {
    const { usuario, senha } = req.body;
    
    if (!usuario || !senha) {
        return res.status(400).json({ message: 'Preencha os campos, sô!' });
    }

    const success = menuService.registerUser(usuario, senha);
    if (success) {
        res.status(201).json({ message: 'Cadastro feito! Agora é só logar.' });
    } else {
        res.status(400).json({ message: 'Esse nome já tá na lista!' });
    }
};

const login = (req, res) => {
    const { usuario, senha } = req.body;
    const user = menuService.loginUser(usuario, senha);

    if (user) {
        // Gera um token de autenticação que expira em 2 horas
        const token = jwt.sign({ usuario: user.u }, SECRET_KEY, { expiresIn: '2h' });
        res.status(200).json({ message: 'Entrando na festa...', token, usuario: user.u });
    } else {
        res.status(401).json({ message: 'Usuário ou senha errados!' });
    }
};

const getSorte = (req, res) => {
    const previsao = menuService.getRandomPrevisao();
    res.status(200).json({ previsao });
};

module.exports = { register, login, getSorte };