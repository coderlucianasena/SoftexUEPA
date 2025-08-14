# SoftexUEPA - Desenvolvimento Backend

## 📚 Aulas e Conteúdo

### Aula 01: Introdução à Lógica de Programação
**Instituição:** Softex e UEPA
**Professor:** Marcos Rodrigo

---

## 🎯 O que é um Algoritmo?

Um **algoritmo** é uma sequência de passos lógicos e finitos que permite solucionar determinado problema.

### 📝 Exemplos Práticos:
- **Manual de instruções** para montar um móvel
- **Receita de culinária** para fazer um bolo
- **Passo a passo** para resolver uma equação matemática

---

## 💻 Linguagens de Programação

### 🔗 Função Principal
As linguagens de programação fazem a **comunicação** entre o **Hardware** e o **Usuário**.

### 📊 Tipos de Linguagens

| Tipo | Característica | Exemplo |
|------|----------------|---------|
| **Alto Nível** | Mais próxima da linguagem humana | Python, JavaScript |
| **Baixo Nível** | Mais próxima da linguagem da máquina | Assembly, C |

---

## ⚙️ Conceitos Fundamentais

### 📖 Sintaxe vs Semântica
- **Sintaxe:** Regras de escrita da linguagem (estrutura e forma)
- **Semântica:** Significado do código (lógica)

### 🔄 Compilação vs Interpretação
- **Linguagem Compilada:** Executada diretamente pelo hardware
- **Linguagem Interpretada:** Executada por um interpretador que traduz o código em tempo de execução

---

## 🐍 Python - Nossa Linguagem de Estudo

### ✨ Características
- **Sintaxe Fácil:** Ideal para iniciantes
- **Interpretado:** Não é compilado!
- **Versátil:** Permite trabalhar rapidamente e integrar sistemas

### 🚀 Aplicações Comuns
- 🌐 Desenvolvimento Web
- 📊 Ciência de Dados e Machine Learning
- 🤖 Inteligência Artificial
- 🎮 Jogos
- ⚡ Automações

---

## 🛠️ Primeiros Passos no Python

### 📤 Função `print()`
**Função:** Exibir informações na saída do algoritmo  
**Sintaxe:** `print("Olá Mundo!")`

### 📦 Variáveis
**Função:** Armazenar dados na memória do computador

#### 📝 Exemplos:
```python
idade = 25          # Número inteiro
nome = "João"       # Texto (string)
saldo = 23.05       # Número decimal (float)
```

#### ⚠️ Regras Importantes:
- ✅ **Pode começar com:** letra ou `_`
- ❌ **NÃO pode começar com:** número
- ✅ **Pode conter:** letras, números e `_`
- ⚠️ **Case-sensitive:** `idade` ≠ `Idade` ≠ `IDADE`
- ❌ **NÃO pode ser:** palavras reservadas (`if`, `for`, `while`, etc.)

---

## 🎯 Atividades Práticas

### Atividade 1: Algoritmo para Fazer um Bolo
Crie um passo a passo detalhado para fazer um bolo.

### Atividade 2: Algoritmo para Dividir Dois Valores
Desenvolva um algoritmo que divida dois números.

### Atividade 3: Primeiro Programa Python
Crie um algoritmo em Python que exiba como saída o texto "Olá Mundo!".

---

## 📁 Estrutura do Projeto

```
SoftexUEPA/
├── Aulas/
│   └── AulasUmDois.py
└── README.md
```

---

## 🎓 Próximos Passos

### 🔄 Git e Github

#### 📚 O que é Git?
**Git** é um sistema de controle de versão distribuído que permite rastrear mudanças no código e colaborar com outros desenvolvedores.

#### 🌐 O que é Github?
**Github** é uma plataforma web que hospeda repositórios Git, facilitando o compartilhamento e colaboração em projetos de código.

#### ⚙️ Configuração Inicial (Credenciais)

```bash
# Configurar nome de usuário
git config --global user.name "Seu Nome"

# Configurar email
git config --global user.email "seu.email@exemplo.com"

# Verificar configurações
git config --list
```

#### 🚀 Principais Comandos Git

##### 📁 Inicialização e Clonagem
```bash
# Inicializar repositório local
git init

# Clonar repositório remoto
git clone https://github.com/usuario/repositorio.git
```

##### 📝 Trabalhando com Arquivos
```bash
# Ver status dos arquivos
git status

# Adicionar arquivos ao staging
git add nome_do_arquivo
git add .                    # Adicionar todos os arquivos

# Fazer commit das mudanças
git commit -m "Descrição da mudança"
```

##### 🔄 Controle de Versão
```bash
# Ver histórico de commits
git log

# Ver diferenças entre arquivos
git diff

# Ver branch atual
git branch
```

##### 📤 Enviando para o Github
```bash
# Adicionar repositório remoto
git remote add origin https://github.com/usuario/repositorio.git

# Enviar commits para o Github
git push origin main

# Baixar atualizações do repositório
git pull origin main
```

#### 💡 Fluxo de Trabalho Básico
1. **`git add .`** - Adicionar mudanças
2. **`git commit -m "mensagem"`** - Fazer commit
3. **`git push origin main`** - Enviar para o Github

#### 🔐 Autenticação no Github
- **Token de Acesso Pessoal** (recomendado)
- **SSH Keys** para conexão segura
- **Credenciais do navegador** para operações básicas

#### 📖 Recursos Adicionais
- **Issues:** Reportar bugs e solicitar funcionalidades
- **Pull Requests:** Propor mudanças para o projeto
- **Wiki:** Documentação do projeto
- **Actions:** Automação de tarefas 


---

*Desenvolvido por Luciana Sena*
