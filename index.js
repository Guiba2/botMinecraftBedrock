const bedrock = require("bedrock-protocol");

function startBot() {
    console.log("Conectando...");

    const client = bedrock.createClient({
        host: 'PEBsadasA.aternos.me', 
        port: 55920,                
        username: 'Gui',
        offline: true,
    });

    client.on('spawn', () => {
        console.log("Bot entrou! Movimentando para evitar kick...");
        
        // Loop para fazer o bot "mexer a cabeça" a cada 30 segundos
        setInterval(() => {
            if (client.status === 2) { // Verifica se ainda está conectado
                client.write('player_auth_input', {
                    pitch: Math.random(),
                    yaw: Math.random(),
                    position: { x: 0, y: 0, z: 0 },
                    move_vector: { x: 0, z: 0 },
                    head_yaw: Math.random(),
                    input_data: {
                        _value: 0,
                        ascend: false,
                        descend: false,
                        north_jump: false,
                        jump_down: false,
                        sprint_down: false,
                        change_height: false,
                        jumping: false,
                        auto_jumping_in_water: false,
                        sneaking: false,
                        sneak_down: false,
                        up: false,
                        down: false,
                        left: false,
                        right: false,
                        up_left: false,
                        up_right: false,
                        want_up: false,
                        want_down: false,
                        want_down_slow: false,
                        want_up_slow: false,
                        sprinting: false,
                        ascend_block: false,
                        descend_block: false,
                        sneak_block: false,
                        client_mashing_stop: false,
                        start_sneaking: false,
                        stop_sneaking: false,
                        start_swimming: false,
                        stop_swimming: false,
                        start_jumping: false,
                        start_gliding: false,
                        stop_gliding: false,
                        item_interact: false,
                        block_predict: false,
                        attack_is_experimental: false
                    },
                    input_mode: 'mouse',
                    play_mode: 'screen',
                    interaction_model: 'touch',
                    tick: BigInt(1),
                    delta: { x: 0, y: 0, z: 0 }
                });
            }
        }, 30000);
    });

    client.on('error', (err) => {
        console.error(`Erro: ${err.message}`);
        setTimeout(startBot, 15000);
    });

    client.on('close', () => {
        console.log("Desconectado. Tentando novamente...");
        setTimeout(startBot, 15000);
    });
}

startBot();