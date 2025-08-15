# 🚀 SoftexUEPA Frontend

Frontend moderno para a plataforma de aulas do programa Bolsa Futuro Digital.

## ✨ **Funcionalidades**

- 🎓 **Aulas Interativas:** Visualização organizada de todas as aulas
- 💻 **Códigos de Exemplo:** Exemplos práticos com syntax highlighting
- 📁 **Arquivos e PDFs:** Download de materiais complementares
- 🔍 **Busca e Filtros:** Encontre conteúdo rapidamente
- 📱 **Responsivo:** Funciona perfeitamente em todos os dispositivos

## 🛠️ **Tecnologias Utilizadas**

- **React 18** - Biblioteca JavaScript moderna
- **TypeScript** - Tipagem estática para código robusto
- **Tailwind CSS** - Framework CSS utilitário
- **Vite** - Build tool rápida e moderna
- **React Router** - Navegação entre páginas
- **Lucide React** - Ícones modernos
- **React Syntax Highlighter** - Destaque de código

## 📋 **Pré-requisitos**

- Node.js 18+ 
- npm ou yarn

## 🚀 **Instalação e Execução**

### 1. **Instalar Dependências**
```bash
npm install
```

### 2. **Executar em Desenvolvimento**
```bash
npm run dev
```

O projeto será aberto automaticamente em `http://localhost:3000`

### 3. **Build para Produção**
```bash
npm run build
```

### 4. **Preview da Build**
```bash
npm run preview
```

## 📁 **Estrutura do Projeto**

```
src/
├── components/          # Componentes reutilizáveis
│   └── Layout.tsx      # Layout principal com navegação
├── pages/              # Páginas da aplicação
│   ├── Home.tsx        # Página inicial
│   ├── Aulas.tsx       # Lista de aulas
│   ├── AulaDetalhe.tsx # Detalhes de uma aula
│   ├── Codigos.tsx     # Códigos de exemplo
│   └── Arquivos.tsx    # Arquivos e PDFs
├── App.tsx             # Componente principal com roteamento
├── main.tsx            # Ponto de entrada
└── index.css           # Estilos globais e Tailwind
```

## 🎨 **Componentes Principais**

### **Layout**
- Header com navegação responsiva
- Menu mobile com hamburger
- Footer com informações do projeto

### **Páginas**
- **Home:** Landing page com visão geral
- **Aulas:** Lista de todas as aulas disponíveis
- **Aula Detalhe:** Conteúdo completo de uma aula
- **Códigos:** Exemplos de código organizados
- **Arquivos:** Materiais para download

## 🔧 **Configurações**

### **Tailwind CSS**
- Cores personalizadas (primary, secondary)
- Fonte personalizada para código (Fira Code)
- Componentes utilitários (.btn-primary, .card)

### **TypeScript**
- Configuração estrita para qualidade de código
- Tipos para props de componentes
- Interfaces para dados das aulas

## 📱 **Responsividade**

- **Mobile First:** Design otimizado para dispositivos móveis
- **Breakpoints:** sm, md, lg, xl
- **Grid Flexível:** Layout adaptativo
- **Menu Mobile:** Navegação otimizada para touch

## 🚀 **Próximos Passos**

### **Funcionalidades Planejadas**
- [ ] Sistema de autenticação
- [ ] Progresso do usuário
- [ ] Comentários e discussões
- [ ] Sistema de busca avançada
- [ ] Favoritos e histórico
- [ ] Notificações de novas aulas

### **Melhorias Técnicas**
- [ ] Testes automatizados
- [ ] PWA (Progressive Web App)
- [ ] Cache offline
- [ ] Analytics e métricas
- [ ] SEO otimizado

## 🤝 **Contribuição**

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 **Licença**

Este projeto é desenvolvido para o programa Bolsa Futuro Digital - SoftexUEPA.

## 👨‍💻 **Desenvolvido por**

**Luciana Sena** - Estudante do programa Bolsa Futuro Digital

---

## 🆘 **Suporte**

Se encontrar algum problema ou tiver dúvidas:

1. Verifique se todas as dependências estão instaladas
2. Confirme se está usando Node.js 18+
3. Limpe o cache: `npm run clean` ou delete `node_modules` e reinstale
4. Abra uma issue no repositório

**Happy Coding! 🎉**
