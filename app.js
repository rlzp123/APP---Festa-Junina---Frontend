const express = require('express');
const cors = require('cors');
const menuRoutes = require('./routes/menu.routes');

const app = express();

// 1. Middlewares (Sempre vêm primeiro)
app.use(cors()); // Permite que o frontend acesse o backend
app.use(express.json()); // Permite receber dados em JSON

// 2. Rota inicial para evitar o "Cannot GET /"
app.get('/', (req, res) => {
    res.send('🔥 O Backend da Barraca da Adivinhação tá on, sô!');
});

// 3. Rotas da API
app.use('/api', menuRoutes);

// 4. Inicia o servidor localmente (caso não esteja no Vercel)
if (require.main === module) {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`🔥 Fogueira acesa na porta ${PORT}`);
    });
}

// 5. Exportação (Sempre no final)
module.exports = app;
