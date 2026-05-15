const jwt = require('jsonwebtoken');
const SECRET_KEY = 'segredo_do_arraia';

const verificarToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    
    // O token geralmente vem no formato "Bearer <token>"
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(403).json({ message: 'Você precisa estar na festa para ver sua sorte!' });
    }

    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Credencial inválida ou expirada!' });
        }
        req.usuario = decoded.usuario;
        next();
    });
};

module.exports = verificarToken;