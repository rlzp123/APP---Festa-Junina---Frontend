const express = require('express');
const cors = require('cors');
const menuRoutes = require('./routes/menu.routes');

const app = express();

// Middlewares
app.use(cors()); // Permite que o frontend acesse o backend
app.use(express.json()); // Permite receber dados em JSON

// Rotas
app.use('/api', menuRoutes);

// Inicia o servidor localmente (caso não esteja no Vercel)
if (require.main === module) {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`🔥 Fogueira acesa na porta ${PORT}`);
    });
}

module.exports = app;