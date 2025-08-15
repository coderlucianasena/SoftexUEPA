import { useState } from 'react'
import { FileText, Download, Search, File, Archive, BookOpen } from 'lucide-react'

const Arquivos = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('todos')

  const arquivos = [
    {
      id: 1,
      nome: 'Slides - Aula 1',
      descricao: 'Apresentação completa da primeira aula com todos os conceitos',
      categoria: 'Slides',
      tipo: 'PDF',
      tamanho: '2.5 MB',
      aula: 'Introdução à Lógica de Programação',
      data: '2024-01-15',
      url: '#https://drive.google.com/file/d/11ymMaYKA0JHLdpCliddkvsx1GD24922e/view?usp=drive_link'
    },
    {
      id: 2,
      nome: 'Códigos de Exemplo - Aula 1',
      descricao: 'Arquivo ZIP com todos os códigos da primeira aula',
      categoria: 'Códigos',
      tipo: 'ZIP',
      tamanho: '1.8 MB',
      aula: 'Introdução à Lógica de Programação',
      data: '2024-01-15',
      url: '#'
    },
    {
      id: 3,
      nome: 'Exercícios - Lógica de Programação',
      descricao: 'Lista de exercícios para praticar os conceitos aprendidos',
      categoria: 'Exercícios',
      tipo: 'PDF',
      tamanho: '800 KB',
      aula: 'Introdução à Lógica de Programação',
      data: '2024-01-15',
      url: '#'
    },
    {
      id: 4,
      nome: 'Manual Git - Comandos Básicos',
      descricao: 'Guia de referência rápida para comandos Git essenciais',
      categoria: 'Manuais',
      tipo: 'PDF',
      tamanho: '1.2 MB',
      aula: 'Git e Controle de Versão',
      data: '2024-01-20',
      url: '#'
    },
    {
      id: 5,
      nome: 'Cheat Sheet - Python Básico',
      descricao: 'Resumo visual dos conceitos fundamentais de Python',
      categoria: 'Cheat Sheets',
      tipo: 'PDF',
      tamanho: '500 KB',
      aula: 'Introdução à Lógica de Programação',
      data: '2024-01-15',
      url: '#'
    }
  ]

  const categorias = ['todos', 'Slides', 'Códigos', 'Exercícios', 'Manuais', 'Cheat Sheets']

  const filteredArquivos = arquivos.filter(arquivo => {
    const matchesSearch = arquivo.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         arquivo.descricao.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'todos' || arquivo.categoria === selectedCategory
    return matchesSearch && matchesCategory
  })

  const getTipoIcon = (tipo: string) => {
    switch (tipo) {
      case 'PDF':
        return <FileText className="w-5 h-5 text-red-500" />
      case 'ZIP':
        return <Archive className="w-5 h-5 text-blue-500" />
      case 'DOC':
        return <File className="w-5 h-5 text-blue-600" />
      case 'PPT':
        return <File className="w-5 h-5 text-orange-500" />
      default:
        return <File className="w-5 h-5 text-gray-500" />
    }
  }

  const formatFileSize = (size: string) => {
    return size
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('pt-BR')
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">Arquivos e Materiais</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Baixe slides, códigos, exercícios e materiais complementares para reforçar seu aprendizado
        </p>
      </div>

      {/* Filtros e Busca */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Buscar arquivos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>
        
        <div className="flex gap-2">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            {categorias.map(cat => (
              <option key={cat} value={cat}>
                {cat === 'todos' ? 'Todas as Categorias' : cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Estatísticas */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
          <div className="text-2xl font-bold text-primary-600">{arquivos.length}</div>
          <div className="text-sm text-gray-600">Total de Arquivos</div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
          <div className="text-2xl font-bold text-green-600">5</div>
          <div className="text-sm text-gray-600">Categorias</div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
          <div className="text-2xl font-bold text-blue-600">6.8 MB</div>
          <div className="text-sm text-gray-600">Tamanho Total</div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
          <div className="text-2xl font-bold text-purple-600">2</div>
          <div className="text-sm text-gray-600">Aulas</div>
        </div>
      </div>

      {/* Lista de Arquivos */}
      <div className="grid gap-4">
        {filteredArquivos.map((arquivo) => (
          <div key={arquivo.id} className="card hover:shadow-md transition-shadow duration-200">
            <div className="flex items-start gap-4">
              {/* Ícone do Tipo */}
              <div className="flex-shrink-0">
                {getTipoIcon(arquivo.tipo)}
              </div>

              {/* Informações do Arquivo */}
              <div className="flex-1 space-y-2">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{arquivo.nome}</h3>
                    <p className="text-gray-600 text-sm">{arquivo.descricao}</p>
                  </div>
                  <button className="btn-primary text-sm py-2 px-4">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </button>
                </div>

                {/* Metadados */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <BookOpen className="w-4 h-4" />
                    <span>{arquivo.aula}</span>
                  </div>
                  <span className="px-2 py-1 bg-gray-100 rounded-full">{arquivo.categoria}</span>
                  <span className="px-2 py-1 bg-gray-100 rounded-full">{arquivo.tipo}</span>
                  <span>{formatFileSize(arquivo.tamanho)}</span>
                  <span>{formatDate(arquivo.data)}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center bg-gray-50 rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Precisa de mais materiais?
        </h3>
        <p className="text-gray-600 mb-6">
          Novos arquivos são adicionados conforme o avanço das aulas
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn-primary">
            Ver Todas as Aulas
          </button>
          <button className="btn-secondary">
            Explorar Códigos
          </button>
        </div>
      </div>
    </div>
  )
}

export default Arquivos
