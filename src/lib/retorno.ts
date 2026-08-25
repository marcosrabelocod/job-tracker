/**
 * Função para buscar uma lista de um Webhook/Endpoint seguro
 * @param url A URL do endpoint (ex: https://hook.us2.make.com/...)
 * @param apiKey A sua chave de autenticação
 * @returns Retorna a lista de dados ou null em caso de erro
 */
export async function buscarLista(url: string, apiKey: string) {
    try {
        const resposta = await fetch(url, {
            method: 'POSt', // Usamos GET pois estamos "buscando" uma lista
            headers: {
                'Content-Type': 'application/json',
                // O padrão mais usado é o Bearer Token, mas dependendo de como 
                // o Make.com foi configurado, pode ser necessário usar 'x-api-key': apiKey
                'Authorization': `${apiKey}` 
            }
        });

        // Verifica se o servidor retornou algum erro (como 401 Não Autorizado ou 404 Não Encontrado)
        if (!resposta.ok) {
            throw new Error(`Erro na API: ${resposta.status} - ${resposta.statusText}`);
        }

        // Converte a resposta recebida para um objeto/array JavaScript
        const listaRetornada = await resposta.json();
        
        return listaRetornada;

    } catch (erro) {
        // Captura e exibe qualquer problema de rede ou de permissão
        console.error("Falha ao consumir o endpoint do Make:", erro);
        return null; // Retorna null para o seu frontend não quebrar
    }
}

// 1. Tipamos o que a função vai receber para garantir que nada vá faltando
interface PerfilJobTracker {
    work: string;
    level: string; // ou o seu NivelSenioridade
    stacks: string[];
}

export async function enviarDadosParaMake(dadosDoPerfil: PerfilJobTracker, apiKey: string) {
    const url = 'https://hook.us2.make.com/yclgeuaosdd6dyy35exxp6jjp8gl13u0';

    try {
        const resposta = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // Mantenha o header de autorização dependendo de como configurou lá
                'Authorization': `Bearer ${apiKey}` 
            },
            // 2. Aqui nós empacotamos o seu estado React no formato EXATO que o Make pediu
            body: JSON.stringify({
                work: dadosDoPerfil.work,
                level: dadosDoPerfil.level,
                stacks: dadosDoPerfil.stacks
            })
        });

        if (!resposta.ok) {
            throw new Error(`Falha no envio: ${resposta.status}`);
        }

        // Webhooks do Make costumam retornar a palavra "Accepted" (texto puro) quando dá certo
        const resultado = await resposta.text(); 
        console.log("Enviado com sucesso para o Make.com!", resultado);
        return true; // Retorna true para a sua tela saber que deu certo

    } catch (erro) {
        console.error("Erro de conexão:", erro);
        return false;
    }
}