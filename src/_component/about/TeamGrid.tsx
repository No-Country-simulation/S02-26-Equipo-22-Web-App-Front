
import Image from 'next/image';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const TeamGrid = () => {
  const team = [
    {
      name: "Ana Martínez",
      role: "Fundadora & CEO",
      image: "/images/team/member1.jpg", // Placeholder path
      bio: "Ex-amazona olímpica con 15 años de experiencia en gestión ecuestre."
    },
    {
      name: "Carlos Ruiz",
      role: "Director de Tecnología",
      image: "/images/team/member2.jpg", // Placeholder path
      bio: "Ingeniero de software apasionado por conectar comunidades nicho."
    },
    {
      name: "Sofía Chen",
      role: "Veterinaria Jefe",
      image: "/images/team/member3.jpg", // Placeholder path
      bio: "Especialista en equinos, garantiza que cada caballo cumpla los estándares de salud."
    },
    {
      name: "Miguel Ángel",
      role: "Head of Sales",
      image: "/images/team/member4.jpg", // Placeholder path
      bio: "Experto en comercio internacional y logística de transporte animal."
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F140D] mb-4">Nuestro Equipo</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conoce a los expertos detrás de HorseTrust, unidos por la pasión y el compromiso con la excelencia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, idx) => (
            <div key={idx} className="group bg-[#F4F1EC] rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
              {/* Image Placeholder */}
              <div className="relative h-64 w-full bg-gray-300 overflow-hidden">
                {/* 
                                   TODO: Replace with actual images. 
                                   Using a gray div as placeholder if image fails or doesn't exist yet.
                                */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-500 bg-gray-200">
                  <span className="text-4xl">👤</span>
                </div>
                {/* <Image 
                                    src={member.image} 
                                    alt={member.name} 
                                    fill 
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                /> */}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <span className="text-[#C9A24D] font-medium text-sm block mb-3">{member.role}</span>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {member.bio}
                </p>

                <div className="flex gap-4">
                  <button className="text-gray-400 hover:text-[#0077B5] transition-colors"><Linkedin size={18} /></button>
                  <button className="text-gray-400 hover:text-[#1DA1F2] transition-colors"><Twitter size={18} /></button>
                  <button className="text-gray-400 hover:text-gray-900 transition-colors"><Mail size={18} /></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamGrid;