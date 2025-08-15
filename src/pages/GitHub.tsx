import { Link } from 'react-router-dom'
import { Github, GitBranch, GitCommit, GitPullRequest, Users, BookOpen, Code, ExternalLink } from 'lucide-react'

const GitHub = () => {
  const comandosGit = [
    {
      comando: 'git init',
      descricao: 'Inicializa um novo repositório Git no diretório atual',
      exemplo: 'git init'
    },
    {
      comando: 'git clone',
      descricao: 'Clona um repositório remoto para sua máquina local',
      exemplo: 'git clone https://github.com/usuario/repositorio.git'
    },
    {
      comando: 'git add',
      descricao: 'Adiciona arquivos ao staging area para o próximo commit',
      exemplo: 'git add . (todos) ou git add arquivo.txt (específico)'
    },
    {
      comando: 'git commit',
      descricao: 'Cria um commit com as mudanças do staging area',
      exemplo: 'git commit -m "Descrição das mudanças"'
    },
    {
      comando: 'git push',
      descricao: 'Envia commits locais para o repositório remoto',
      exemplo: 'git push origin main'
    },
    {
      comando: 'git pull',
      descricao: 'Baixa e integra mudanças do repositório remoto',
      exemplo: 'git pull origin main'
    },
    {
      comando: 'git branch',
      descricao: 'Lista, cria ou deleta branches',
      exemplo: 'git branch nova-feature (criar) ou git branch -d branch (deletar)'
    },
    {
      comando: 'git checkout',
      descricao: 'Muda para uma branch específica ou restaura arquivos',
      exemplo: 'git checkout nova-feature ou git checkout -- arquivo.txt'
    },
    {
      comando: 'git merge',
      descricao: 'Combina mudanças de uma branch na branch atual',
      exemplo: 'git merge nova-feature'
    },
    {
      comando: 'git status',
      descricao: 'Mostra o status atual do repositório',
      exemplo: 'git status'
    }
  ]

  const passosGitHub = [
    {
      titulo: '1. Criar Conta no GitHub',
      descricao: 'Acesse github.com e crie sua conta gratuita',
      acao: 'Ir para GitHub',
      url: 'https://github.com/signup'
    },
    {
      titulo: '2. Configurar Git Local',
      descricao: 'Configure seu nome e email para os commits',
      acao: 'Ver comandos',
      comandos: [
        'git config --global user.name "Seu Nome"',
        'git config --global user.email "seu.email@exemplo.com"'
      ]
    },
         {
       titulo: '3. Clonar Repositório da Turma',
       descricao: 'Baixe o projeto para sua máquina local',
       acao: 'Clonar Repo',
       url: 'https://github.com/coderlucianasena/Turma_08_PA-C1.git'
     },
    {
      titulo: '4. Criar Branch para Trabalho',
      descricao: 'Sempre trabalhe em branches separadas',
      acao: 'Ver comandos',
      comandos: [
        'git checkout -b minha-feature',
        'git add .',
        'git commit -m "Adicionando nova funcionalidade"',
        'git push origin minha-feature'
      ]
    },
    {
      titulo: '5. Fazer Pull Request',
      descricao: 'Solicite que suas mudanças sejam integradas',
      acao: 'Ver instruções',
      instrucoes: [
        'Vá para o repositório no GitHub',
        'Clique em "Compare & pull request"',
        'Descreva suas mudanças',
        'Aguarde revisão e merge'
      ]
    }
  ]

  return (
    <div className="space-y-8 sm:space-y-12 w-full overflow-x-hidden">
      {/* Header */}
      <div className="text-center space-y-4 sm:space-y-6 px-4 sm:px-0">
        <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gray-900 text-white rounded-full mb-4 sm:mb-6">
          <Github className="w-8 h-8 sm:w-10 sm:h-10" />
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight break-words">
          GitHub & Colaboração
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed break-words">
          Aprenda a usar GitHub para colaborar em projetos, gerenciar código e trabalhar em equipe
        </p>
      </div>

      {/* Repositório da Turma */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-white mx-4 sm:mx-0">
        <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
          <Github className="w-6 h-6 sm:w-8 sm:h-8" />
          <h2 className="text-xl sm:text-2xl font-bold">Repositório da Turma</h2>
        </div>
        <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
          Este é o repositório principal onde todos os projetos e exercícios da turma serão desenvolvidos.
        </p>
               <a
         href="https://github.com/coderlucianasena/Turma_08_PA-C1.git"
         target="_blank"
         rel="noopener noreferrer"
         className="inline-flex items-center gap-2 bg-white text-gray-900 hover:bg-gray-100 font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-colors duration-200 text-sm sm:text-base"
       >
         <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
         Acessar Repositório
       </a>
      </div>

      {/* Passos para Começar */}
      <div className="space-y-6 sm:space-y-8 px-4 sm:px-0">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">Como Começar</h2>
        <div className="grid gap-4 sm:gap-6 md:gap-8">
          {passosGitHub.map((passo, index) => (
            <div key={index} className="bg-white rounded-lg sm:rounded-xl border border-gray-200 overflow-hidden">
              <div className="p-4 sm:p-6">
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-sm sm:text-base font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1 space-y-3 sm:space-y-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{passo.titulo}</h3>
                    <p className="text-gray-600 text-sm sm:text-base">{passo.descricao}</p>
                    
                    {passo.url && (
                      <a
                        href={passo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-medium px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg transition-colors duration-200 text-sm"
                      >
                        {passo.acao}
                        <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </a>
                    )}

                    {passo.comandos && (
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-gray-700">Comandos:</p>
                        <div className="space-y-1">
                          {passo.comandos.map((comando, cmdIndex) => (
                            <code key={cmdIndex} className="block bg-gray-100 text-gray-800 px-3 py-2 rounded text-xs sm:text-sm font-mono">
                              {comando}
                            </code>
                          ))}
                        </div>
                      </div>
                    )}

                    {passo.instrucoes && (
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-gray-700">Instruções:</p>
                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                          {passo.instrucoes.map((instrucao, instIndex) => (
                            <li key={instIndex}>{instrucao}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Comandos Git Essenciais */}
      <div className="space-y-6 sm:space-y-8 px-4 sm:px-0">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">Comandos Git Essenciais</h2>
        <div className="grid gap-3 sm:gap-4 md:gap-6">
          {comandosGit.map((comando, index) => (
            <div key={index} className="bg-white rounded-lg sm:rounded-xl border border-gray-200 overflow-hidden">
              <div className="p-4 sm:p-6">
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                    <GitCommit className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="flex-1 space-y-2 sm:space-y-3">
                    <h3 className="font-mono text-lg sm:text-xl font-semibold text-gray-900">{comando.comando}</h3>
                    <p className="text-gray-600 text-sm sm:text-base">{comando.descricao}</p>
                    <div className="bg-gray-100 rounded-lg p-3 sm:p-4">
                      <p className="text-xs text-gray-500 mb-2">Exemplo:</p>
                      <code className="text-sm sm:text-base font-mono text-gray-800">{comando.exemplo}</code>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fluxo de Trabalho */}
      <div className="space-y-6 sm:space-y-8 px-4 sm:px-0">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">Fluxo de Trabalho Recomendado</h2>
        <div className="bg-blue-50 border border-blue-200 rounded-xl sm:rounded-2xl p-6 sm:p-8">
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center space-y-3">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto">
                <GitBranch className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h3 className="font-semibold text-blue-900">1. Branch</h3>
              <p className="text-sm text-blue-800">Crie uma branch para sua feature</p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                <Code className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h3 className="font-semibold text-green-900">2. Desenvolva</h3>
              <p className="text-sm text-green-800">Implemente suas mudanças</p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto">
                <GitCommit className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h3 className="font-semibold text-purple-900">3. Commit</h3>
              <p className="text-sm text-purple-800">Salve suas alterações</p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto">
                <GitPullRequest className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h3 className="font-semibold text-orange-900">4. Pull Request</h3>
              <p className="text-sm text-orange-800">Solicite integração</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recursos Adicionais */}
      <div className="space-y-6 sm:space-y-8 px-4 sm:px-0">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">Recursos Adicionais</h2>
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
          <div className="bg-white rounded-lg sm:rounded-xl border border-gray-200 p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-6 h-6 text-primary-600" />
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Documentação Oficial</h3>
            </div>
            <p className="text-gray-600 text-sm sm:text-base mb-4">
              Aprenda mais sobre Git e GitHub com a documentação oficial.
            </p>
            <a
              href="https://docs.github.com/pt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium text-sm sm:text-base"
            >
              Ler Documentação
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="bg-white rounded-lg sm:rounded-xl border border-gray-200 p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-6 h-6 text-primary-600" />
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Comunidade</h3>
            </div>
            <p className="text-gray-600 text-sm sm:text-base mb-4">
              Tire dúvidas e aprenda com outros desenvolvedores.
            </p>
            <a
              href="https://github.com/explore"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium text-sm sm:text-base"
            >
              Explorar GitHub
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center text-white mx-4 sm:mx-0">
        <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Pronto para Colaborar?</h2>
        <p className="text-primary-100 mb-4 sm:mb-6 text-sm sm:text-base">
          Comece agora mesmo criando sua conta no GitHub e clonando o repositório da turma!
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <a
            href="https://github.com/signup"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-primary-700 hover:bg-gray-100 font-medium px-6 sm:px-8 py-3 rounded-lg transition-colors duration-200 text-sm sm:text-base"
          >
            Criar Conta GitHub
          </a>
          <Link
            to="/aulas"
            className="border border-white text-white hover:bg-white hover:text-primary-700 font-medium px-6 sm:px-8 py-3 rounded-lg transition-colors duration-200 text-sm sm:text-base"
          >
            Voltar para Aulas
          </Link>
        </div>
      </div>
    </div>
  )
}

export default GitHub
