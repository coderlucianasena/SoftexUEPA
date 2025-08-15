import { Link } from 'react-router-dom'
import { Clock, User, FileText } from 'lucide-react'
import { aulasData } from '../data/aulasData'

const Aulas = () => {
  const aulas = aulasData

  const getStatusBadge = (status: string) => {
    if (status === 'disponivel') {
      return (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
          Disponível
        </span>
      )
    }
    return (
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
        Em Breve
      </span>
    )
  }

  const getNivelBadge = (nivel: string) => {
    const colors = {
      'Iniciante': 'bg-blue-100 text-blue-800',
      'Intermediário': 'bg-purple-100 text-purple-800',
      'Avançado': 'bg-red-100 text-red-800'
    }
    
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colors[nivel as keyof typeof colors]}`}>
        {nivel}
      </span>
    )
  }

  return (
    <div className="space-y-6 sm:space-y-8 w-full overflow-x-hidden">
      {/* Header */}
      <div className="text-center space-y-3 sm:space-y-4 px-4 sm:px-0 w-full">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 break-words">Aulas Disponíveis</h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed break-words">
          Acesse os slides das aulas de forma organizada. 
          Cada aula inclui apresentações visuais e materiais complementares.
        </p>
      </div>

      {/* Filtros */}
      <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 justify-center px-4 sm:px-0">
        <button className="btn-primary text-sm sm:text-base px-3 sm:px-4 py-2">Todas as Aulas</button>
        <button className="btn-secondary text-sm sm:text-base px-3 sm:px-4 py-2">Disponíveis</button>
        <button className="btn-secondary text-sm sm:text-base px-3 sm:px-4 py-2">Em Breve</button>
        <button className="btn-secondary text-sm sm:text-base px-3 sm:px-4 py-2">Por Nível</button>
      </div>

      {/* Lista de Aulas */}
      <div className="grid gap-4 sm:gap-6 px-4 sm:px-0 w-full">
        {aulas.map((aula) => (
          <div key={aula.id} className="card hover:shadow-lg transition-shadow duration-200 p-4 sm:p-6 min-w-0">
            <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 w-full">
              {/* Informações Principais */}
              <div className="flex-1 space-y-3 sm:space-y-4 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-2 w-full">
                  <div className="space-y-2 flex-1 min-w-0">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight break-words">
                      {aula.titulo}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed break-words">
                      {aula.descricao}
                    </p>
                  </div>
                  <div className="flex flex-row sm:flex-col items-start sm:items-end gap-2 flex-shrink-0">
                    {getStatusBadge(aula.status)}
                    {getNivelBadge(aula.nivel)}
                  </div>
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
                </div>

                {/* Tópicos */}
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-900 text-sm sm:text-base">Tópicos abordados:</h4>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {aula.topicos.map((topico) => (
                      <span
                        key={topico}
                        className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-700 text-xs sm:text-sm rounded-full"
                      >
                        {topico}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Ações */}
              <div className="flex flex-col sm:flex-row lg:flex-col gap-2 sm:gap-3 lg:w-48">
                {aula.status === 'disponivel' ? (
                  <Link
                    to={`/aulas/${aula.id}`}
                    className="btn-primary w-full text-center text-sm sm:text-base py-2.5 sm:py-3"
                  >
                    <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                    Acessar Aula
                  </Link>
                ) : (
                  <button className="btn-secondary w-full text-center cursor-not-allowed opacity-60 text-sm sm:text-base py-2.5 sm:py-3">
                    <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                    Em Breve
                  </button>
                )}
                
                <button className="btn-secondary w-full text-sm sm:text-base py-2.5 sm:py-3">
                  <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                  Materiais da Aula
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center bg-gray-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 mx-4 sm:mx-0">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
          Quer mais conteúdo?
        </h3>
        <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
          Novas aulas são adicionadas regularmente. Fique atento às atualizações!
        </p>
        <Link to="/codigos" className="btn-primary text-sm sm:text-base px-5 sm:px-6 py-2.5 sm:py-3">
          Explorar Códigos de Exemplo
        </Link>
      </div>
    </div>
  )
}

export default Aulas
