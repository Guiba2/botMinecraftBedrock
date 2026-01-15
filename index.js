const bedrock = require("bedrock-protocol");

function startBot() {
    console.log("Tentando conectar o bot...");

    const client = bedrock.createClient({
        host: 'PEBsadasA.aternos.me', 
        port: 55920,                
        username: 'Gui',
        offline: true
    });

    // Isso evita que o erro "Ping timed out" derrube o script
    client.on('error', (err) => {
        console.error(`Ocorreu um erro: ${err.message}`);
        console.log("Tentando reconectar em 10 segundos...");
        setTimeout(startBot, 10000); // Tenta reconectar após 10 segundos
    });

    client.on('spawn', () => {
        console.log("Bot entrou no servidor com sucesso!");
    });

    // Se o bot for desconectado por qualquer motivo (kick ou queda)
    client.on('close', () => {
        console.log("Conexão fechada. Reiniciando...");
        setTimeout(startBot, 10000);
    });
}

// Inicia o processo
startBot();