import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Download, FileText, Clock, User } from 'lucide-react'
import { getAulaById } from '../data/aulasData'

const AulaDetalhe = () => {
  const { id } = useParams()
  
  // Buscar dados da aula específica
  const aula = getAulaById(Number(id))

  // Verificar se a aula existe
  if (!aula) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Aula não encontrada</h1>
        <p className="text-gray-600 mb-6">A aula solicitada não foi encontrada ou não está disponível.</p>
        <Link to="/aulas" className="btn-primary">
          Voltar para Aulas
        </Link>
      </div>
    )
  }

  // TODO: Implementar função getTipoIcon quando necessário

  const getTipoBadge = (tipo: string) => {
    const colors = {
      'teoria': 'bg-blue-100 text-blue-800',
      'pratica': 'bg-green-100 text-green-800',
      'exercicio': 'bg-purple-100 text-purple-800'
    }
    
    const labels = {
      'teoria': 'Teoria',
      'pratica': 'Prática',
      'exercicio': 'Exercício'
    }
    
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colors[tipo as keyof typeof colors]}`}>
        {labels[tipo as keyof typeof labels]}
      </span>
    )
  }

  return (
    <div className="space-y-6 sm:space-y-8 w-full overflow-x-hidden">
      {/* Header */}
      <div className="space-y-3 sm:space-y-4 px-4 sm:px-0 w-full">
        <Link to="/aulas" className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm sm:text-base">
          <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
          Voltar para Aulas
        </Link>
        
        <div className="space-y-2 w-full">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight break-words">{aula.titulo}</h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed break-words">{aula.descricao}</p>
          <p className="text-base sm:text-lg text-primary-600 font-medium">📊 Slides da Aula</p>
        </div>

        {/* Metadados */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm text-gray-500">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <User className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>{aula.professor}</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>{aula.duracao}</span>
          </div>
          <span className="px-2 sm:px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
            {aula.nivel}
          </span>
        </div>
      </div>

      {/* Objetivo */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg sm:rounded-xl p-4 sm:p-6 mx-4 sm:mx-0">
        <h3 className="text-base sm:text-lg font-semibold text-blue-900 mb-2">Objetivo da Aula</h3>
        <p className="text-sm sm:text-base text-blue-800 leading-relaxed">{aula.objetivo}</p>
      </div>

      {/* Slides da Aula */}
      <div className="space-y-3 sm:space-y-4 px-4 sm:px-0">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Slides da Aula</h2>
        <div className="bg-white rounded-lg sm:rounded-xl border border-gray-200 overflow-hidden">
          <div className="p-3 sm:p-4 bg-gray-50 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-gray-900 text-sm sm:text-base">Apresentação da Aula</h3>
                <p className="text-xs sm:text-sm text-gray-600">Visualize os slides diretamente na plataforma</p>
              </div>
              <a
                href={aula.slideUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white text-xs sm:text-sm font-medium px-3 sm:px-4 py-2 rounded-lg transition-colors duration-200"
                title="Abrir slides em nova aba"
              >
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                <span className="hidden sm:inline">Abrir em Nova Aba</span>
                <span className="sm:hidden">Nova Aba</span>
              </a>
            </div>
          </div>
          <div className="p-3 sm:p-4">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src={aula.slideUrl}
                className="absolute top-0 left-0 w-full h-full border-0 rounded-lg"
                title={`Slides da ${aula.titulo}`}
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="space-y-6 sm:space-y-8 px-4 sm:px-0">
        {/* Estrutura da Aula */}
        <div className="space-y-3 sm:space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Estrutura da Aula</h2>
          <div className="space-y-2 sm:space-y-3">
            {aula.conteudo.map((item, index) => (
              <div key={index} className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-white rounded-lg border border-gray-200">
                <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-xs sm:text-sm font-medium">
                  {index + 1}
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-2">
                    <h4 className="font-medium text-gray-900 text-sm sm:text-base">{item.titulo}</h4>
                    <div className="flex items-center gap-2">
                      {getTipoBadge(item.tipo)}
                      <span className="text-xs sm:text-sm text-gray-500">{item.duracao}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{item.descricao}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Códigos de Exemplo ou Revisão do Conteúdo */}
        {aula.revisaoConteudo ? (
          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Revisão do Conteúdo</h2>
            <div className="space-y-3 sm:space-y-4">
              {aula.revisaoConteudo.map((item, index) => (
                <div key={index} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                  <div className="px-3 sm:px-4 py-2.5 sm:py-3 bg-blue-50 border-b border-blue-200">
                    <h4 className="font-medium text-blue-900 text-sm sm:text-base">{item.titulo}</h4>
                  </div>
                  <div className="p-3 sm:p-4">
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{item.resumo}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : aula.codigos && aula.codigos.length > 0 ? (
          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Códigos de Exemplo</h2>
            <div className="space-y-3 sm:space-y-4">
              {aula.codigos.map((codigo, index) => (
                <div key={index} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                  <div className="px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50 border-b border-gray-200">
                    <h4 className="font-medium text-gray-900 text-sm sm:text-base">{codigo.titulo}</h4>
                    <p className="text-xs sm:text-sm text-gray-600">{codigo.descricao}</p>
                  </div>
                  <div className="p-3 sm:p-4">
                    <pre className="bg-gray-900 text-gray-100 p-3 sm:p-4 rounded-lg overflow-x-auto">
                      <code className="text-xs sm:text-sm font-code leading-relaxed">{codigo.codigo}</code>
                    </pre>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {/* Materiais da Aula */}
        <div className="space-y-3 sm:space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Materiais da Aula</h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg sm:rounded-xl p-3 sm:p-4 mb-3 sm:mb-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
              <p className="text-yellow-800 text-xs sm:text-sm font-medium">
                ⚠️ Esta seção está em desenvolvimento. Os materiais serão disponibilizados em breve.
              </p>
            </div>
          </div>
          <div className="grid gap-2 sm:gap-3">
            {aula.materiais.map((material, index) => (
              <div key={index} className="flex items-center justify-between p-3 sm:p-4 bg-white rounded-lg border border-gray-200">
                <div className="flex items-center gap-2 sm:gap-3">
                  <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
                  <div>
                    <p className="font-medium text-gray-900 text-sm sm:text-base">{material.nome}</p>
                    <p className="text-xs sm:text-sm text-gray-500">{material.tipo} • {material.tamanho}</p>
                  </div>
                </div>
                <button className="btn-secondary text-xs sm:text-sm py-1.5 sm:py-2 px-3 sm:px-4 opacity-50 cursor-not-allowed">
                  <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AulaDetalhe
