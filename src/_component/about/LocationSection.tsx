
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const LocationSection = () => {
  return (
    <section className="py-20 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Información de Contacto */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-[#1F140D] mb-4">Visítanos</h2>
              <p className="text-gray-600 text-lg">
                Nuestras oficinas centrales están ubicadas en el corazón ecuestre de la región.
                Ven a conocer a nuestro equipo y descubre cómo podemos ayudarte.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#C9A24D]/10 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="text-[#C9A24D]" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Dirección</h3>
                  <p className="text-gray-600">Av. del Libertador 1234, Ciudad de Buenos Aires, Argentina</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#C9A24D]/10 rounded-full flex items-center justify-center shrink-0">
                  <Phone className="text-[#C9A24D]" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Teléfono</h3>
                  <p className="text-gray-600">+54 11 1234-5678</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#C9A24D]/10 rounded-full flex items-center justify-center shrink-0">
                  <Mail className="text-[#C9A24D]" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">contacto@horsetrust.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#C9A24D]/10 rounded-full flex items-center justify-center shrink-0">
                  <Clock className="text-[#C9A24D]" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Horario de Atención</h3>
                  <p className="text-gray-600">Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mapa (Placeholder) */}
          <div className="w-full h-[400px] bg-gray-200 rounded-2xl overflow-hidden shadow-lg relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0168878894544!2d-58.38157032338647!3d-34.60373445749718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4aa9f0a6da5edb%3A0x11bead4e234e558b!2sObelisco!5e0!3m2!1ses!2sar!4v1689264627448!5m2!1ses!2sar"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-500"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  )
}

export default LocationSection
