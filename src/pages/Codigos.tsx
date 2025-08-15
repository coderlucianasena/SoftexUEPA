import { useState } from 'react'
import { Download, Copy, Search } from 'lucide-react'
import { Link } from 'react-router-dom'

const Codigos = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedLanguage, setSelectedLanguage] = useState('todos')
  const [selectedCategory, setSelectedCategory] = useState('todos')

  const codigos = [
    {
      id: 1,
      titulo: 'Calculadora Simples',
      descricao: 'Calculadora com operações básicas (soma, subtração, multiplicação, divisão)',
      linguagem: 'python',
      codigo: `def soma(a, b):
    return a + b

def subtrai(a, b):
    return a - b

def multiplica(a, b):
    return a * b

def divide(a, b):
    if b == 0:
        return "Erro: divisão por zero"
    return a / b

print("Calculadora Simples")
print("Selecione a operação:")
print("1 - Soma")
print("2 - Subtração")
print("3 - Multiplicação")
print("4 - Divisão")

opcao = input("Digite a opção (1/2/3/4): ")

num1 = float(input("Digite o primeiro número: "))
num2 = float(input("Digite o segundo número: "))

if opcao == '1':
    print("Resultado:", soma(num1, num2))
elif opcao == '2':
    print("Resultado:", subtrai(num1, num2))
elif opcao == '3':
    print("Resultado:", multiplica(num1, num2))
elif opcao == '4':
    print("Resultado:", divide(num1, num2))
else:
    print("Opção inválida!")`,
      categoria: 'Calculadoras',
      aula: 'Introdução à Lógica de Programação'
    },
    {
      id: 2,
      titulo: 'Calculadora de IMC',
      descricao: 'Calculadora para calcular o Índice de Massa Corporal',
      linguagem: 'python',
      codigo: `def calcular_imc(peso, altura):
    """
    Calcula o IMC baseado no peso (kg) e altura (m)
    Retorna o valor do IMC e a classificação
    """
    imc = peso / (altura ** 2)
    
    if imc < 18.5:
        classificacao = "Abaixo do peso"
    elif imc < 25:
        classificacao = "Peso normal"
    elif imc < 30:
        classificacao = "Sobrepeso"
    elif imc < 35:
        classificacao = "Obesidade grau 1"
    elif imc < 40:
        classificacao = "Obesidade grau 2"
    else:
        classificacao = "Obesidade grau 3"
    
    return imc, classificacao

print("=== Calculadora de IMC ===")
print("Digite suas informações:")

peso = float(input("Peso (kg): "))
altura = float(input("Altura (m): "))

imc, classificacao = calcular_imc(peso, altura)

print(f"\\nSeu IMC: {imc:.1f}")
print(f"Classificação: {classificacao}")

print("\\nTabela de referência:")
print("IMC < 18.5: Abaixo do peso")
print("IMC 18.5-24.9: Peso normal")
print("IMC 25.0-29.9: Sobrepeso")
print("IMC 30.0-34.9: Obesidade grau 1")
print("IMC 35.0-39.9: Obesidade grau 2")
print("IMC ≥ 40.0: Obesidade grau 3")`,
      categoria: 'Calculadoras',
      aula: 'Introdução à Lógica de Programação'
    },
    {
      id: 3,
      titulo: 'Hello World em Python',
      descricao: 'Primeiro programa básico em Python',
      linguagem: 'python',
      codigo: `print("Olá Mundo!")
print("Bem-vindo ao Python!")`,
      categoria: 'Básico',
      aula: 'Introdução à Lógica de Programação'
    },
    {
      id: 4,
      titulo: 'Variáveis e Tipos',
      descricao: 'Exemplos de declaração de variáveis',
      linguagem: 'python',
      codigo: `# Variáveis numéricas
idade = 25
altura = 1.75

# Variáveis de texto
nome = "João Silva"
cidade = "Belém"

print(f"Nome: {nome}, Idade: {idade}")`,
      categoria: 'Básico',
      aula: 'Introdução à Lógica de Programação'
    },
    {
      id: 5,
      titulo: 'Comandos Git Essenciais',
      descricao: 'Comandos Git fundamentais para controle de versão',
      linguagem: 'bash',
      codigo: `# === CONFIGURAÇÃO INICIAL ===
# Configurar nome de usuário
git config --global user.name "Seu Nome"

# Configurar email
git config --global user.email "seu.email@exemplo.com"

# Verificar configurações
git config --list

# === REPOSITÓRIO LOCAL ===
# Inicializar repositório
git init

# Verificar status
git status

# Adicionar arquivos ao staging
git add .                    # Adiciona todos os arquivos
git add nome_arquivo.py      # Adiciona arquivo específico

# Fazer commit
git commit -m "Mensagem descritiva do commit"

# Ver histórico de commits
git log
git log --oneline

# === REPOSITÓRIO REMOTO ===
# Adicionar repositório remoto
git remote add origin https://github.com/usuario/repositorio.git

# Enviar para o repositório remoto
git push -u origin main      # Primeira vez
git push                     # Demais vezes

# Baixar alterações do repositório remoto
git pull origin main

# Clonar repositório existente
git clone https://github.com/usuario/repositorio.git

# === BRANCHES ===
# Criar e mudar para nova branch
git checkout -b nova-feature

# Listar branches
git branch

# Mudar entre branches
git checkout nome-da-branch

# Mesclar branch na main
git checkout main
git merge nome-da-branch

# Deletar branch local
git branch -d nome-da-branch

# === DESFAZER ALTERAÇÕES ===
# Desfazer alterações em arquivo não commitado
git checkout -- nome_arquivo.py

# Desfazer último commit (mantém alterações)
git reset --soft HEAD~1

# Desfazer último commit (remove alterações)
git reset --hard HEAD~1

# === INFORMAÇÕES ===
# Ver diferenças
git diff                     # Arquivos não commitados
git diff --staged           # Arquivos no staging
git diff HEAD~1             # Compara com commit anterior

# Ver arquivos modificados
git status --porcelain`,
      categoria: 'Git',
      aula: 'Git e Controle de Versão'
    }
  ]

  const linguagens = ['todos', 'python', 'bash', 'javascript']
  
  const categorias = ['todos', 'Calculadoras', 'Básico', 'Git']

  const filteredCodigos = codigos.filter(codigo => {
    const matchesSearch = codigo.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         codigo.descricao.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesLanguage = selectedLanguage === 'todos' || codigo.linguagem === selectedLanguage
    const matchesCategory = selectedCategory === 'todos' || codigo.categoria === selectedCategory
    return matchesSearch && matchesLanguage && matchesCategory
  })

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code)
  }

  return (
    <div className="space-y-6 sm:space-y-8 w-full overflow-x-hidden">
      {/* Header */}
      <div className="text-center space-y-3 sm:space-y-4 px-4 sm:px-0 w-full">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 break-words">Códigos de Exemplo</h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed break-words">
          Explore códigos práticos e exemplos de implementação para reforçar seu aprendizado
        </p>
      </div>

      {/* Filtros e Busca */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-between px-4 sm:px-0">
        <div className="relative flex-1 max-w-md w-full">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-3.5 h-3.5 sm:w-4 sm:h-4" />
          <input
            type="text"
            placeholder="Buscar códigos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 sm:pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm sm:text-base"
          />
        </div>
        
        <div className="flex gap-2 w-full sm:w-auto">
          <select
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm sm:text-base w-full sm:w-auto"
          >
            {linguagens.map(lang => (
              <option key={lang} value={lang}>
                {lang === 'todos' ? 'Todas as Linguagens' : lang.charAt(0).toUpperCase() + lang.slice(1)}
              </option>
            ))}
          </select>
          
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm sm:text-base w-full sm:w-auto"
          >
            {categorias.map(cat => (
              <option key={cat} value={cat}>
                {cat === 'todos' ? 'Todas as Categorias' : cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Lista de Códigos */}
      <div className="grid gap-4 sm:gap-6 px-4 sm:px-0 w-full">
        {filteredCodigos.map((codigo) => (
          <div key={codigo.id} className="card p-4 sm:p-6 min-w-0">
            <div className="space-y-3 sm:space-y-4 w-full">
              {/* Header do Código */}
              <div className="flex items-start justify-between w-full">
                <div className="space-y-2 flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-tight break-words">{codigo.titulo}</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed break-words">{codigo.descricao}</p>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-500">
                    <span className="px-2 py-1 bg-gray-100 rounded-full">{codigo.linguagem}</span>
                    <span className="px-2 py-1 bg-gray-100 rounded-full">{codigo.categoria}</span>
                    <span className="text-xs sm:text-sm break-words">{codigo.aula}</span>
                  </div>
                </div>
              </div>

              {/* Código */}
              <div className="bg-gray-900 rounded-lg overflow-hidden">
                <div className="flex items-center justify-between px-3 sm:px-4 py-2 bg-gray-800">
                  <span className="text-gray-300 text-xs sm:text-sm font-medium">{codigo.linguagem}</span>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <button
                      onClick={() => copyToClipboard(codigo.codigo)}
                      className="text-gray-400 hover:text-white transition-colors duration-200 p-1"
                      title="Copiar código"
                    >
                      <Copy className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </button>
                    <button className="text-gray-400 hover:text-white transition-colors duration-200 p-1" title="Download">
                      <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </button>
                  </div>
                </div>
                <pre className="p-3 sm:p-4 overflow-x-auto">
                  <code className="text-gray-100 text-xs sm:text-sm font-code leading-relaxed">{codigo.codigo}</code>
                </pre>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center bg-gray-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 mx-4 sm:mx-0">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
          Quer ver mais códigos?
        </h3>
        <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
          Novos exemplos são adicionados conforme o avanço das aulas
        </p>
        <Link to="/aulas" className="btn-primary text-sm sm:text-base px-5 sm:px-6 py-2.5 sm:py-3">
          Ver Todas as Aulas
        </Link>
      </div>
    </div>
  )
}

export default Codigos
