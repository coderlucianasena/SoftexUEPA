import { Link } from 'react-router-dom'
import { BookOpen, Code, FileText, Users } from 'lucide-react'

const Home = () => {
  const features = [
     {
       title: 'Aulas',
       description: 'Acesse todo o conteúdo das aulas de forma organizada e interativa',
       icon: BookOpen,
       href: '/aulas',
       color: 'bg-blue-500'
     },
    {
      title: 'Códigos de Exemplo',
      description: 'Explore códigos práticos e exemplos de implementação',
      icon: Code,
      href: '/codigos',
      color: 'bg-green-500'
    }
  ]

  const stats = [
    { label: 'Aulas Disponíveis', value: '3', icon: BookOpen },
    { label: 'Exemplos de Código', value: '5+', icon: Code },
    { label: 'Estudantes', value: '50+', icon: Users },
    { label: 'Slides Interativos', value: '15+', icon: FileText }
  ]

  return (
    <div className="space-y-8 sm:space-y-12 w-full pb-8">
      {/* Hero Section */}
      <div className="text-center space-y-4 sm:space-y-6 w-full">
        <div className="space-y-3 sm:space-y-4 w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight break-words">
            Bem-vindx 
            <span className="text-primary-600 block">DevBackend</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0 leading-relaxed break-words">
            Plataforma que contém todo o conteúdo do treinamento Acelerado em Programação, fruto da iniciativa do SOFTEX PE no âmbito
            dos Programas e Projetos de Interesse Nacional (PPIs) do Ministério da Ciência,
            Tecnologia e Inovação (MCTI).
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
          <Link to="/aulas" className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 w-full sm:w-auto">
            Começar a Estudar
          </Link>
          <Link to="/codigos" className="btn-secondary text-base sm:text-lg px-6 sm:px-8 py-3 w-full sm:w-auto">
            Ver Códigos
          </Link>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-6 w-full">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <div key={stat.label} className="text-center p-3 sm:p-4 md:p-6 bg-white rounded-lg sm:rounded-xl shadow-sm border border-gray-200 min-w-0">
              <div className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-primary-100 text-primary-600 rounded-lg mb-2 sm:mb-3 md:mb-4">
                <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </div>
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-1 sm:mb-2 break-words">{stat.value}</div>
              <div className="text-xs sm:text-sm text-gray-600 leading-tight break-words">{stat.label}</div>
            </div>
          )
        })}
      </div>

      {/* Features Section */}
      <div className="space-y-6 sm:space-y-8 w-full">
        <div className="text-center px-4 sm:px-0 w-full">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 break-words">
            O que você vai encontrar aqui?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 break-words">
            Slides interativos e códigos práticos para seu aprendizado
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto px-4 sm:px-0 w-full">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <Link
                key={feature.title}
                to={feature.href}
                className="card group hover:scale-105 transition-transform duration-200 p-4 sm:p-6 min-w-0"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 ${feature.color} text-white rounded-lg sm:rounded-xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-200`}>
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3 break-words">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed break-words">
                  {feature.description}
                </p>
                <div className="mt-3 sm:mt-4 text-primary-600 font-medium group-hover:text-primary-700 transition-colors duration-200 text-sm sm:text-base">
                  Explorar →
                </div>
              </Link>
            )
          })}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center text-white sm:mx-0 w-full mb-8 rounded-container no-clip">
        <div className="max-w-2xl mx-auto space-y-4 sm:space-y-6 w-full">
          <h2 className="text-2xl sm:text-3xl font-bold break-words">
            Pronto para começar sua jornada?
          </h2>
          <p className="text-primary-100 text-base sm:text-lg break-words">
            Acesse as aulas e pratique com os códigos de exemplo.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full pt-2">
            <Link to="/aulas" className="bg-white text-primary-700 hover:bg-gray-100 font-medium py-2.5 sm:py-3 px-5 sm:px-6 rounded-lg transition-colors duration-200 text-sm sm:text-base w-full sm:w-auto whitespace-nowrap">
              Ver Aulas
            </Link>
            <Link to="/codigos" className="border border-white text-white hover:bg-white hover:text-primary-700 font-medium py-2.5 sm:py-3 px-5 sm:px-6 rounded-lg transition-colors duration-200 text-sm sm:text-base w-full sm:w-auto whitespace-nowrap">
              Explorar Códigos
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
