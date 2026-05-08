import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const SUPABASE_URL = 'https://urjwuznvhwqnffcympom.supabase.co/rest/v1/';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVyand1em52aHdxbmZmY3ltcG9tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQzMzI0MDEsImV4cCI6MjA4OTkwODQwMX0.bwh0sANEzpdHZQN_UnaqY2tCy9OdQdzfSCy7BDd2JlU';
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const frases = {
    amor: [
        "A vidente viu um correio elegante chegando pra você!",
        "O Santo Antônio tá ocupado, mas mandou dizer que tem esperança!",
        "Cuidado: tem alguém te olhando de longe na roda da quadrilha.",
        "A fogueira tá alta, mas o coração vai esquentar ainda mais!"
    ],
    sorte: [
        "O peixe tá no anzol! Você vai ganhar o maior prêmio.",
        "Sua sorte é maior que um pé de moleque gigante!",
        "Prepare as mãos, que o brinde da pescaria é seu.",
        "A sorte sorriu! Pode ir na barraca do milho que hoje é seu dia."
    ]
};

async function consultar(pergunta, categoria) {
    const choiceArea = document.getElementById('choice-area');
    const resultArea = document.getElementById('result-area');
    const textElement = document.getElementById('prediction-text');

    // Sorteia a resposta
    const lista = frases[categoria];
    const resposta = lista[Math.floor(Math.random() * lista.length)];

    // Exibe na tela
    textElement.innerText = "Consultando os astros... \n\n" + resposta;
    choiceArea.classList.add('hidden');
    resultArea.classList.remove('hidden');

    // CONEXÃO SUPABASE: Salva a consulta no banco
    try {
        const { error } = await supabase
            .from('consultas_juninas')
            .insert([{ pergunta: pergunta, resposta: resposta }]);
        
        if (error) console.error("Erro ao salvar no banco:", error.message);
    } catch (err) {
        console.error("Erro de conexão:", err);
    }
}

function resetar() {
    document.getElementById('choice-area').classList.remove('hidden');
    document.getElementById('result-area').classList.add('hidden');
}

// Torna as funções globais para o HTML acessar
window.consultar = consultar;
window.resetar = resetar;