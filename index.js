const bedrock = require('bedrock-protocol');

const settings = {
    host: 'PEBsadasA.aternos.me', 
    port: 55920,                
    username: 'GuilhermePlayer', // Mudei o nome para parecer um jogador real
    offline: true,              
    version: '1.21.30',         // Tentando a versão máxima que sua biblioteca aceita
    skipPing: true
};

function connect() {
    console.log(`[${new Date().toLocaleTimeString()}] 🛡️ Tentando entrada forçada...`);

    const client = bedrock.createClient(settings);

    client.on('spawn', () => {
        console.log("✅ CONECTADO! O bot conseguiu entrar.");
    });

    client.on('error', (err) => {
        console.log(`❌ Erro: ${err.message}`);
    });

    client.on('close', () => {
        console.log("🔌 Desconectado. Tentando novamente em 15 segundos...");
        setTimeout(connect, 15000);
    });
}

connect();