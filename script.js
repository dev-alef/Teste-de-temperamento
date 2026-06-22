



const homeTela = document.getElementById("home");

const questionsTela = document.getElementById("questions");

const resultTela = document.getElementById("result");

const button1 = document.getElementById("button1");

const comoFuncionaButton = document.getElementById("como-funciona");
const saibaMaisButton = document.getElementById("saiba-mais");
const temperamentosButton = document.getElementById("temperamentos");

const comoFunciona = document.getElementById("como-funciona1");
const saibaMais = document.getElementById("saiba-mais1");
const temperamentos = document.getElementById("temperamentos1");

document.addEventListener("DOMContentLoaded", () => {
    homeTela.classList.add('visivel');
});
  

button1.addEventListener("click", () => {
    homeTela.classList.remove('visivel');
    questionsTela.classList.add('visivel');
    mostrarPergunta();
    window.scrollTo(0, 0);
    
});

saibaMaisButton.addEventListener("click", () => {
     saibaMais.style.display = "block";
       comoFunciona.style.display = "none"; // esconde
    temperamentos.style.display = "none"; // esconde

    // Adiciona classe ativa no botão clicado
    saibaMaisButton.classList.add("ativa");
    // Remove dos outros dois
    comoFuncionaButton.classList.remove("ativa");
    temperamentosButton.classList.remove("ativa");
});

comoFuncionaButton.addEventListener("click", () => {
    comoFunciona.style.display = "block";
    temperamentos.style.display = "none"; // esconde
    saibaMais.style.display = "none";

    comoFuncionaButton.classList.add("ativa");
    saibaMaisButton.classList.remove("ativa");
    temperamentosButton.classList.remove("ativa");
});

temperamentosButton.addEventListener("click", () => {
    temperamentos.style.display = "block";
    saibaMais.style.display = "none";
    comoFunciona.style.display = "none";

    temperamentosButton.classList.add("ativa");
    saibaMaisButton.classList.remove("ativa");
    comoFuncionaButton.classList.remove("ativa");
});


const perguntas = [
    { texto: "Adoro conhecer pessoas novas — quanto mais gente, melhor!", temperamento: "Sanguíneo" },
    { texto: "Se eu vejo algo errado, eu logo penso em como consertar — e quero fazer isso agora.", temperamento: "Colérico" },
    { texto: "Antes de tomar uma decisão, preciso analisar bem todos os detalhes.", temperamento: "Melancólico" },
    { texto: "Raramente perco a calma — as pessoas sempre me procuram pra me contar seus problemas.", temperamento: "Fleumático" },
    
    { texto: "Erros me incomodam muito — especialmente os meus.", temperamento: "Melancólico" },
    { texto: "Quando o grupo entra em conflito, eu costumo ser o ponto de equilíbrio.", temperamento: "Fleumático" },
    { texto: "Liderar um grupo é algo que vem naturalmente pra mim, mesmo sem eu pedir.", temperamento: "Colérico" },
    { texto: "Quando estou animado com algo, é quase impossível me calar sobre o assunto.", temperamento: "Sanguíneo" },

    { texto: "Mudo de humor rapidinho, mas também me animo de volta com a mesma velocidade.", temperamento: "Sanguíneo" },
    { texto: "Eu prefiro uma conversa profunda com uma pessoa do que uma festa com muita gente.", temperamento: "Melancólico" },
    { texto: "Não preciso ser o centro das atenções — fico feliz contribuindo nos bastidores.", temperamento: "Fleumático" },
    { texto: "Perder tempo esperando as coisas acontecerem não é pra mim — eu prefiro ir lá e fazer.", temperamento: "Colérico" },

    { texto: "Quando tenho um objetivo, dificilmente alguém me convence a desistir.", temperamento: "Colérico" },
    { texto: "Mudanças bruscas me deixam desconfortável; prefiro a estabilidade do dia a dia.", temperamento: "Fleumático" },
    { texto: "Tomar decisões na hora? Sim, por favor. Planejar demais me entedia.", temperamento: "Sanguíneo" },
    { texto: "Tenho uma sensibilidade aguçada: músicas, filmes e histórias me tocam de verdade.", temperamento: "Melancólico" },

    { texto: "Eu sei exatamente o que quero e não tenho medo de deixar isso claro.", temperamento: "Colérico" },
    { texto: "Eu sou o tipo de pessoa que transforma qualquer situação chata em diversão.", temperamento: "Sanguíneo" },
    { texto: "Organização e planejamento me deixam muito mais confortável do que improviso.", temperamento: "Melancólico" },
    { texto: "Costumo deixar as coisas fluírem naturalmente em vez de forçar a barra.", temperamento: "Fleumático" },


]

const pontuacao = {
  Sanguíneo: 0,
  Colérico: 0,
  Melancólico: 0,
  Fleumático: 0,
};

const resultados = {
    "Sanguíneo": {
        descricao: "Você é daquelas pessoas que iluminam o ambiente só de entrar. Energético, carismático e sempre com uma história pra contar.",
        comoLidar: "Seja leve, entusiasmado e aberto. Use metáforas e analogias. Faça perguntas e conecte o assunto à vida da pessoa.",
        evite: "Tom frio e distante, excesso de dados e rigidez.",
        relacionamentos: {
            "Colérico": "Vá direto ao ponto — ele não tem paciência pra rodeios. Evite divagar ou abrir muitos assuntos ao mesmo tempo. Foque em resultados e soluções, não em histórias longas.",
            "Melancólico": "Diminua a energia e seja mais cuidadoso. Ele precisa de profundidade, não de superficialidade. Evite mudar de assunto rápido demais — ele quer explorar um tema de verdade.",
            "Fleumático": "Seja leve e sem pressão. Ele valoriza harmonia e não gosta de conflito. Evite ser caótico ou agitado demais. Mostre que você o valoriza e que está ouvindo."
        }
    },
    "Colérico": {
        descricao: "Você nasceu com um GPS interno apontando pra frente. Determinado, direto e com uma energia que move montanhas.",
        comoLidar: "Seja direto, objetivo e vá logo ao ponto. Ofereça soluções, nunca só problemas.",
        evite: "Rodeios, palavras vagas como 'acho' ou 'talvez' e sentimentalismo excessivo.",
         relacionamentos: {
            "Sanguíneo": "Dê espaço pra ele falar e compartilhar ideias. Evite ser muito direto ou cortante. Use entusiasmo na conversa e faça perguntas sobre a opinião dele.",
            "Melancólico": "Diminua o ritmo e seja mais paciente. Traga dados e justificativas — ele não aceita decisões sem embasamento. Evite pressionar por respostas rápidas.",
            "Fleumático": "Reduza a intensidade e evite criar urgência desnecessária. Seja gentil e mostre que vocês estão no mesmo time. Dê tempo pra ele processar."
        }
    },
    "Melancólico": {
        descricao: "Você enxerga o mundo com uma profundidade que poucos alcançam. Analítico, sensível e perfeccionista.",
        comoLidar: "Seja preciso e estruturado. Traga dados e mostre o raciocínio por trás do que você está dizendo.",
        evite: "Improviso, termos vagos e exageros — ele vai desconsiderar tudo mentalmente.",
         relacionamentos: {
            "Colérico": "Seja direto e objetivo — vá logo ao ponto. Traga soluções, não só problemas. Evite sentimentalismo excessivo e palavras vagas como 'acho' ou 'talvez'.",
            "Sanguíneo": "Seja mais leve e aberto. Use metáforas e analogias — ele vai adorar. Faça perguntas e deixe ele falar. Evite ser muito crítico ou frio.",
            "Fleumático": "Seja calmo e paciente. Elogie com frequência e explique o porquê das coisas. Mostre que você está junto com ele na solução."
        }
    },
    "Fleumático": {
        descricao: "Em um mundo caótico, você é o porto seguro. Calmo, estável e com uma paciência que beira o sobre-humano.",
        comoLidar: "Seja calmo, paciente e gentil. Elogie com frequência e dê tempo pra pessoa processar.",
        evite: "Pressão, urgência injustificada e qualquer tom de confronto.",
        relacionamentos: {
            "Colérico": "Seja mais assertivo e direto — ele respeita quem vai ao ponto. Evite ser vago ou indeciso demais. Ofereça soluções práticas e mostre que você tem iniciativa.",
            "Sanguíneo": "Entre no ritmo dele — seja mais animado e aberto. Deixe ele falar e compartilhe experiências. Evite ser muito passivo — ele pode achar que você não está engajado.",
            "Melancólico": "Seja paciente e profundo. Ele valoriza conversas com substância. Evite superficialidade e dê espaço pra ele analisar. Mostre consistência."
        }
    }
};

let perguntaAtual = 0; 

let respostaSelecionada = null;

function mostrarPergunta() {
    const pergunta = perguntas[perguntaAtual];
    respostaSelecionada = null;
    
    questionsTela.innerHTML = `
        <div id="barra-trilha">
        <div id="barra-progresso" style="width: ${(perguntaAtual / perguntas.length) * 100}%"></div>
    </div>
    <p id="porcentagem">${Math.round((perguntaAtual / perguntas.length) * 100)}%</p>
        <p>${pergunta.texto}</p>
        <div id="opcoes">
            <p onclick="selecionarOpcao(3, this)">Me identifico totalmente</p>
            <p onclick="selecionarOpcao(2, this)">Me identifico bastante</p>
            <p onclick="selecionarOpcao(1.5, this)">Neutro</p>
            <p onclick="selecionarOpcao(1, this)">Me identifico pouco</p>
            <p onclick="selecionarOpcao(0, this)">Não me identifico</p>
        </div>
        
    `;
}

function selecionarOpcao(valor, elemento) {
    // Salva a resposta selecionada
    respostaSelecionada = valor;
    
    // Remove o destaque de todas as opções
    const opcoes = document.querySelectorAll("#opcoes p");
    opcoes.forEach(opcao => opcao.classList.remove("selecionado"));
    
    // Adiciona o destaque na opção clicada
    elemento.classList.add("selecionado");
    setTimeout(() => {
        responder();
        elemento.classList.remove("selecionado");
    }, 400);
    
}

function responder() {
    // Se nenhuma opção foi selecionada, não faz nada
    if (respostaSelecionada === null) return;

     // Pega o temperamento da pergunta atual
    const temperamento = perguntas[perguntaAtual].temperamento;
    
    // Atualiza a pontuação do temperamento
    pontuacao[temperamento] += respostaSelecionada;
    
    // Avança pra próxima pergunta
    perguntaAtual++;
    
    // Se ainda tem perguntas, mostra a próxima
    if (perguntaAtual < perguntas.length) {
        mostrarPergunta();
    } else {
        // Se acabou, vai pro resultado
        mostrarResultado();
    }
}

function mostrarResultado() {
    const temperamentos = Object.keys(pontuacao);
    
   const vencedor = temperamentos.reduce((a, b) => 
    pontuacao[a] > pontuacao[b] ? a : b
);

// Verifica empate
const segundo = temperamentos.filter(t => t !== vencedor)
    .reduce((a, b) => pontuacao[a] > pontuacao[b] ? a : b);

if (pontuacao[vencedor] === pontuacao[segundo]) {
    questionsTela.classList.remove('visivel');
    resultTela.classList.add('visivel');
    window.scrollTo(0, 0);
    
    resultTela.innerHTML = `
        <h1>Você tem um perfil bastante equilibrado!</h1>
        <p>Seus temperamentos dominantes são <strong>${vencedor}</strong> e <strong>${segundo}</strong> com a mesma pontuação.</p>
        <p>Isso significa que você combina características dos dois — uma mistura bastante poderosa!</p>
        <button onclick="iniciarTeste()">Voltar ao início</button>
    `;
    return;
}

// Se não há empate, continua com o resultado normal
const resultado = resultados[vencedor];
    const outros = Object.keys(resultado.relacionamentos);
    
    questionsTela.classList.remove('visivel');
    resultTela.classList.add('visivel');
    window.scrollTo(0, 0);
    
    resultTela.innerHTML = `
        <h1>Você é ${vencedor}!</h1>
        <p>${resultado.descricao}</p>
        
        <h2>Como lidar com você</h2>
        <p>${resultado.comoLidar}</p>
        
        <h2>O que evitar</h2>
        <p>${resultado.evite}</p>

        <h2>Como se relacionar com os outros:</h2>
        <div id="abas-rel">
            ${outros.map(t => `<button class="aba-rel" onclick="mostrarRelacionamento('${t}')">${t}</button>`).join('')}
        </div>
        <div id="conteudo-rel">
            <p>Clique em um temperamento acima para ver as dicas.</p>
        </div>

        
        
        <h2>Sua pontuação</h2>
        <p>🔴 Colérico: ${pontuacao.Colérico} pontos</p>
        <p>🟡 Sanguíneo: ${pontuacao.Sanguíneo} pontos</p>
        <p>🔵 Melancólico: ${pontuacao.Melancólico} pontos</p>
        <p>🟢 Fleumático: ${pontuacao.Fleumático} pontos</p>

        <button onclick="iniciarTeste()">Voltar ao início</button>

       
    
    `;
}

function mostrarRelacionamento(temperamento) {
    const vencedor = Object.keys(pontuacao).reduce((a, b) => 
        pontuacao[a] > pontuacao[b] ? a : b
    );
    
    const texto = resultados[vencedor].relacionamentos[temperamento];
    document.getElementById("conteudo-rel").innerHTML = `<p>${texto}</p>`;
    
    document.querySelectorAll(".aba-rel").forEach(btn => btn.classList.remove("ativa"));
    event.target.classList.add("ativa");
}

function iniciarTeste() {
    // 1. Esconder o resultado e mostrar o home
    resultTela.classList.remove('visivel');
    homeTela.classList.add('visivel');
    
    // 2. Resetar a posição
    perguntaAtual = 0;
    
    // 3. Resetar a pontuação
    pontuacao.Sanguíneo = 0;
    pontuacao.Colérico = 0;
    pontuacao.Melancólico = 0;
    pontuacao.Fleumático = 0;
    
    // 4. Voltar pro topo
    window.scrollTo(0, 0);
}

