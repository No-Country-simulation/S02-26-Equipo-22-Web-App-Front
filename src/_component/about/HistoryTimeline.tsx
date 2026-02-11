
const HistoryTimeline = () => {
  const milestones = [
    {
      year: "2023",
      title: "Nace la Idea",
      description: "Detectamos la necesidad de un espacio seguro y profesional para la comunidad equina."
    },
    {
      year: "2024",
      title: "Lanzamiento Beta",
      description: "Primeros 500 usuarios prueban la plataforma con transacciones exitosas."
    },
    {
      year: "2025",
      title: "Expansión Regional",
      description: "Apertura de operaciones en Argentina, México y Chile."
    },
    {
      year: "2026",
      title: "HorseTrust Global",
      description: "Lanzamiento de nuestra tecnología de certificación blockchain."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1F140D] mb-16">Nuestra Historia</h2>

        <div className="relative">
          {/* Línea central vertical */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>

          <div className="space-y-12">
            {milestones.map((item, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                {/* Espacio vacío para alternancia */}
                <div className="flex-1 w-full"></div>

                {/* Punto central */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#C9A24D] rounded-full border-4 border-white shadow-sm z-10 hidden md:block"></div>

                {/* Contenido */}
                <div className="flex-1 w-full md:px-10 text-center md:text-left">
                  <div className={`bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <span className="block text-[#C9A24D] font-bold text-xl mb-2">{item.year}</span>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HistoryTimeline