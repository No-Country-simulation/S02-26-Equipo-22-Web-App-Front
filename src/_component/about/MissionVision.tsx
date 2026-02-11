import { Target, Eye, ShieldCheck, HeartHandshake } from 'lucide-react';

const MissionVision = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-white max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-stretch">

        {/* Misión */}
        <div className="flex flex-col gap-4 p-8 rounded-2xl bg-[#F9F7F5] border border-gray-100 hover:shadow-lg transition-shadow duration-300">
          <div className="w-12 h-12 bg-[#C9A24D]/10 rounded-full flex items-center justify-center mb-2">
            <Target className="text-[#C9A24D]" size={28} strokeWidth={1.5} />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">Nuestra Misión</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            Democratizar y profesionalizar el mercado equino global, proporcionando una plataforma
            <span className="font-semibold text-[#C9A24D]"> segura, transparente y eficiente</span>.
            Nos esforzamos por conectar a vendedores y compradores con herramientas tecnológicas
            que garantizan el bienestar animal y la confianza en cada transacción.
          </p>
        </div>

        {/* Visión */}
        <div className="flex flex-col gap-4 p-8 rounded-2xl bg-[#F9F7F5] border border-gray-100 hover:shadow-lg transition-shadow duration-300">
          <div className="w-12 h-12 bg-[#1F140D]/5 rounded-full flex items-center justify-center mb-2">
            <Eye className="text-[#1F140D]" size={28} strokeWidth={1.5} />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">Nuestra Visión</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            Convertirnos en el <span className="font-semibold text-gray-900">estándar de oro mundial</span> para
            la comercialización de caballos, siendo reconocidos no solo por nuestra innovación tecnológica,
            sino por fomentar una comunidad ética apasionada por el legado ecuestre.
          </p>
        </div>

      </div>

      {/* Valores - Optional Row */}
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-10">Nuestros Pilares</h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: ShieldCheck, title: "Seguridad", desc: "Verificación rigurosa" },
            { icon: HeartHandshake, title: "Confianza", desc: "Tratos transparentes" },
            // Add more as needed
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center gap-2">
              <item.icon className="text-[#C9A24D] mb-2" size={32} strokeWidth={1} />
              <h4 className="font-semibold text-lg text-gray-500">{item.title}</h4>
              <p className="text-sm text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVision;