export interface Aula {
  id: number
  titulo: string
  descricao: string
  professor: string
  duracao: string
  nivel: string
  objetivo: string
  slideUrl: string
  status: 'disponivel' | 'em_breve'
  topicos: string[]
  conteudo: {
    titulo: string
    duracao: string
    descricao: string
    tipo: 'teoria' | 'pratica' | 'exercicio'
  }[]
  materiais: {
    nome: string
    tipo: string
    tamanho: string
    url: string
  }[]
  codigos?: {
    titulo: string
    descricao: string
    codigo: string
    linguagem: string
  }[]
  revisaoConteudo?: {
    titulo: string
    resumo: string
  }[]
}

export const aulasData: Aula[] = [
  {
    id: 1,
    titulo: 'Introdução à Lógica de Programação',
    descricao: 'Introdução ao programa Bolsa Futuro Digital, fundamentos de computação e tecnologias web para desenvolvimento backend',
    professor: 'Lyanh Vinicios',
    duracao: '2 horas',
    nivel: 'Iniciante',
    objetivo: 'Ao final desta aula, você compreenderá o programa Bolsa Futuro Digital, os fundamentos de hardware e software, e as tecnologias web essenciais para desenvolvimento backend.',
    slideUrl: 'https://drive.google.com/file/d/11ymMaYKA0JHLdpCliddkvsx1GD24922e/preview',
    status: 'disponivel',
    topicos: ['Programa Bolsa Futuro Digital', 'Back End Python & Django', 'Hardware e Software', 'Web e Tecnologias', 'Frontend e Backend'],
    conteudo: [
      {
        titulo: 'Programa Bolsa Futuro Digital',
        duracao: '15 min',
        descricao: 'Apresentação do programa, objetivos e estrutura do treinamento acelerado em programação',
        tipo: 'teoria'
      },
      {
        titulo: 'A Disciplina: Back End Python & Django',
        duracao: '20 min',
        descricao: 'Objetivos da disciplina, carga horária e orientações para alunos',
        tipo: 'teoria'
      },
      {
        titulo: 'Fundamentos de Hardware e Software',
        duracao: '25 min',
        descricao: 'Conceitos básicos de computação, componentes de hardware, software e linguagens de programação',
        tipo: 'teoria'
      },
      {
        titulo: 'Introdução à Web e suas Tecnologias',
        duracao: '30 min',
        descricao: 'Internet vs Web, modelo cliente-servidor, protocolos HTTP, TCP/IP, DNS e portas',
        tipo: 'teoria'
      },
      {
        titulo: 'As partes da Aplicação Web',
        duracao: '10 min',
        descricao: 'Frontend, Backend e lógica da informação - tecnologias e funções',
        tipo: 'teoria'
      }
    ],
    materiais: [
      {
        nome: 'Slides da Aula 1',
        tipo: 'PDF',
        tamanho: '2.5 MB',
        url: '#'
      },
      {
        nome: 'Resumo dos Conceitos',
        tipo: 'PDF',
        tamanho: '500 KB',
        url: '#'
      },
      {
        nome: 'Glossário de Termos Técnicos',
        tipo: 'PDF',
        tamanho: '300 KB',
        url: '#'
      }
    ],
    revisaoConteudo: [
      {
        titulo: 'Programa Bolsa Futuro Digital',
        resumo: 'É um treinamento acelerado em programação criado pelo SOFTEX PE, com duração de 9 meses. O programa capacita jovens para desenvolver soluções web seguras e escaláveis, usando metodologias modernas como Aprendizagem Baseada em Projetos (PBL) e Sala de Aula Invertida.'
      },
      {
        titulo: 'Back End Python & Django',
        resumo: 'Esta disciplina específica tem 144 horas de carga horária, com aulas presenciais 2x por semana (terças e quintas, 3h cada). O objetivo é aprofundar no desenvolvimento Back End, ensinando Python, orientação a objetos, padrões de software, web services e o framework Django.'
      },
      {
        titulo: 'Fundamentos de Hardware e Software',
        resumo: 'O computador é uma máquina programável que executa tarefas através de instruções. Hardware são as partes físicas (CPU, memória, disco), enquanto Software são os programas que fazem o hardware funcionar. Tudo funciona através de códigos binários (0s e 1s) que são interpretados pelo sistema operacional.'
      },
      {
        titulo: 'Como a Internet Funciona',
        resumo: 'A Internet é a rede física de computadores, enquanto a Web é um serviço que roda nela. A comunicação funciona como um restaurante: o cliente (navegador) faz pedidos (requisições) e o servidor responde. Protocolos como HTTP, TCP/IP e DNS garantem que as mensagens cheguem ao destino correto.'
      },
      {
        titulo: 'Frontend vs Backend',
        resumo: 'Frontend é o que o usuário vê e interage (HTML, CSS, JavaScript). Backend é o "cérebro" da aplicação que processa dados, acessa bancos de dados e executa a lógica de negócio. Eles trabalham juntos: o Frontend envia pedidos e o Backend responde com as informações solicitadas.'
      }
    ]
  },
  {
    id: 2,
    titulo: 'Git e Controle de Versão',
    descricao: 'Aprenda a usar Git para controle de versão e colaboração em projetos',
    professor: 'Lyanh Vinicios',
    duracao: '1.5 horas',
    nivel: 'Iniciante',
    objetivo: 'Dominar os conceitos básicos de Git e GitHub para controle de versão e colaboração em projetos.',
    slideUrl: 'https://drive.google.com/file/d/1uSGyHOAnGQvrCGgwwDdVcVQ8nV81mPZ4/preview',
    status: 'disponivel',
    topicos: ['Git Básico', 'Github', 'Commits', 'Branches'],
    conteudo: [
      {
        titulo: 'Introdução ao Git',
        duracao: '20 min',
        descricao: 'Conceitos fundamentais de controle de versão',
        tipo: 'teoria'
      },
      {
        titulo: 'Primeiros Comandos',
        duracao: '30 min',
        descricao: 'Inicialização de repositório e commits',
        tipo: 'pratica'
      },
      {
        titulo: 'GitHub e Repositórios Remotos',
        duracao: '25 min',
        descricao: 'Trabalhando com repositórios online',
        tipo: 'pratica'
      },
      {
        titulo: 'Branches e Merge',
        duracao: '15 min',
        descricao: 'Gerenciamento de branches e merge',
        tipo: 'teoria'
      }
    ],
    materiais: [
      {
        nome: 'Slides da Aula',
        tipo: 'PDF',
        tamanho: '1.8 MB',
        url: '#'
      },
      {
        nome: 'Comandos Git',
        tipo: 'PDF',
        tamanho: '500 KB',
        url: '#'
      }
    ],
    codigos: [
      {
        titulo: 'Comandos Git Básicos',
        descricao: 'Sequência de comandos para iniciar um projeto',
        codigo: `# Inicializar repositório
git init

# Adicionar arquivos
git add .

# Primeiro commit
git commit -m "Primeiro commit"

# Conectar repositório remoto
git remote add origin https://github.com/usuario/repositorio.git

# Enviar para GitHub
git push -u origin main`,
        linguagem: 'bash'
      }
    ]
  },
  {
    id: 3,
    titulo: 'Estruturas de Controle em Python',
    descricao: 'Aprenda sobre condicionais, loops e estruturas de decisão para controlar o fluxo do programa',
    professor: 'Lyanh Vinicios',
    duracao: '2.5 horas',
    nivel: 'Intermediário',
    objetivo: 'Ao final desta aula, você será capaz de implementar estruturas de controle para criar programas mais dinâmicos e responsivos.',
    slideUrl: 'https://drive.google.com/file/d/10KkCVRM0eUTZ7-ATxNRzz_mQ5YoxGj17/preview',
    status: 'disponivel',
    topicos: ['If/Else', 'Loops For', 'Loops While', 'Break/Continue', 'Estruturas Aninhadas'],
    conteudo: [
      {
        titulo: 'Introdução às Estruturas de Controle',
        duracao: '20 min',
        descricao: 'Conceitos fundamentais de controle de fluxo em programação',
        tipo: 'teoria'
      },
      {
        titulo: 'Estruturas Condicionais (If/Else)',
        duracao: '30 min',
        descricao: 'Implementação de decisões lógicas com if, elif e else',
        tipo: 'pratica'
      },
      {
        titulo: 'Loops For',
        duracao: '35 min',
        descricao: 'Iteração sobre sequências e controle de repetição',
        tipo: 'pratica'
      },
      {
        titulo: 'Loops While',
        duracao: '25 min',
        descricao: 'Repetição baseada em condições e controle de fluxo',
        tipo: 'pratica'
      },
      {
        titulo: 'Comandos Break e Continue',
        duracao: '20 min',
        descricao: 'Controle avançado de loops e interrupções',
        tipo: 'pratica'
      },
      {
        titulo: 'Estruturas Aninhadas',
        duracao: '20 min',
        descricao: 'Combinação de diferentes estruturas de controle',
        tipo: 'pratica'
      }
    ],
    materiais: [
      {
        nome: 'Slides da Aula 3',
        tipo: 'PDF',
        tamanho: '2.1 MB',
        url: '#'
      },
      {
        nome: 'Exercícios Práticos',
        tipo: 'PDF',
        tamanho: '800 KB',
        url: '#'
      },
      {
        nome: 'Códigos de Exemplo',
        tipo: 'ZIP',
        tamanho: '1.2 MB',
        url: '#'
      }
    ],
    codigos: [
      {
        titulo: 'Estrutura If/Else Básica',
        descricao: 'Exemplo de decisão simples baseada em uma condição',
        codigo: `# Estrutura condicional básica
idade = 18

if idade >= 18:
    print("Você é maior de idade")
    print("Pode dirigir e votar")
else:
    print("Você é menor de idade")
    print("Ainda não pode dirigir nem votar")

# Verificando múltiplas condições
nota = 85

if nota >= 90:
    print("Excelente! Nota A")
elif nota >= 80:
    print("Muito bom! Nota B")
elif nota >= 70:
    print("Bom! Nota C")
else:
    print("Precisa melhorar")`,
        linguagem: 'python'
      },
      {
        titulo: 'Loops For com Range',
        descricao: 'Iteração sobre sequências numéricas e listas',
        codigo: `# Loop for com range
for i in range(5):
    print(f"Contador: {i}")

# Iterando sobre uma lista
frutas = ["maçã", "banana", "laranja", "uva"]
for fruta in frutas:
    print(f"Fruta: {fruta}")

# Loop com enumerate para índice e valor
for indice, fruta in enumerate(frutas):
    print(f"Fruta {indice + 1}: {fruta}")

# Loop for com range personalizado
for i in range(2, 10, 2):  # Começa em 2, vai até 9, passo 2
    print(f"Número par: {i}")`,
        linguagem: 'python'
      },
      {
        titulo: 'Loop While com Controle',
        descricao: 'Repetição baseada em condições com break e continue',
        codigo: `# Loop while básico
contador = 0
while contador < 5:
    print(f"Contador: {contador}")
    contador += 1

# Loop com break
numero = 0
while True:
    if numero == 5:
        break  # Sai do loop quando número for 5
    print(f"Número: {numero}")
    numero += 1

# Loop com continue
for i in range(10):
    if i % 2 == 0:  # Se for par
        continue      # Pula para próxima iteração
    print(f"Número ímpar: {i}")

# Loop while com validação de entrada
senha = ""
while senha != "123456":
    senha = input("Digite a senha: ")
    if senha != "123456":
        print("Senha incorreta! Tente novamente.")
print("Acesso permitido!")`,
        linguagem: 'python'
      }
    ]
  }
]

export const getAulaById = (id: number): Aula | undefined => {
  return aulasData.find(aula => aula.id === id)
}

export const getAulasDisponiveis = (): Aula[] => {
  return aulasData.filter(aula => aula.status === 'disponivel')
}
