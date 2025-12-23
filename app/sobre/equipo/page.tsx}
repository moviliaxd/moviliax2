import Link from 'next/link';

export default function EquipoPage() {
  const team = [
    {
      name: 'María Rodríguez',
      role: 'Directora General',
      bio: '15+ años en consultoría logística. Ex-directora de Operaciones en Amazon LATAM.',
      expertise: ['Supply Chain', 'E-commerce', 'Estrategia'],
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Carlos Méndez',
      role: 'Editor en Jefe',
      bio: 'Periodista especializado en tecnología. Colaborador de Forbes y MIT Tech Review.',
      expertise: ['Periodismo Tech', 'Análisis', 'Contenido'],
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Ana Silva',
      role: 'Head of Research',
      bio: 'PhD en Ingeniería de Transporte. Investigadora en movilidad urbana sostenible.',
      expertise: ['Movilidad', 'Investigación', 'Sostenibilidad'],
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Diego Torres',
      role: 'Lead Developer',
      bio: 'Full-stack engineer. Especialista en plataformas de datos y visualización.',
      expertise: ['Desarrollo', 'Data Viz', 'UX/UI'],
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Lucía Fernández',
      role: 'Community Manager',
      bio: 'Experta en construcción de comunidades tech. Ex-Google Developer Relations.',
      expertise: ['Comunidad', 'Eventos', 'Networking'],
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Roberto Gómez',
      role: 'Business Development',
      bio: 'Emprendedor serial en logtech. Fundador de 2 startups adquiridas.',
      expertise: ['Startups', 'Inversión', 'Partnerships'],
      linkedin: '#',
      twitter: '#'
    }
  ];

  const advisors = [
    {
      name: 'Dr. Patricia Lamas',
      role: 'Asesora en Sostenibilidad',
      org: 'Ex-Directora de Transporte, BID'
    },
    {
      name: 'Ing. Sebastián Rivas',
      role: 'Asesor Técnico',
      org: 'CTO, TechLogistics Group'
    },
    {
      name: 'Lic. Carolina Paz',
      role: 'Asesora Legal',
      org: 'Socia, Paz & Asociados'
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violeta-tech/10 border border-violeta-tech/20 mb-6">
            <span className="text-violeta-tech text-sm font-medium">Quiénes Somos</span>
          </div>
          
          <h1 className="font-['Exo'] text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cian-electrico via-violeta-tech to-magenta-futures bg-clip-text text-transparent">
              Nuestro Equipo
            </span>
          </h1>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Un grupo multidisciplinario de expertos apasionados por transformar la movilidad y la logística en América Latina.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { number: '50+', label: 'Años de Experiencia Combinada' },
              { number: '12', label: 'Países Representados' },
              { number: '6', label: 'Industrias de Origen' },
              { number: '100%', label: 'Pasión por LATAM' }
            ].map((stat, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-cian-electrico/20 to-violeta-tech/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-xl p-6 text-center hover:border-cian-electrico/50 transition-all">
                  <div className="font-['Exo'] text-4xl font-bold bg-gradient-to-r from-cian-electrico to-violeta-tech bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Team */}
      <section className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-['Exo'] text-3xl font-bold text-white mb-12 text-center">
            Equipo Principal
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <div key={idx} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cian-electrico/20 to-violeta-tech/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-violeta-tech/50 transition-all h-full flex flex-col">
                  
                  {/* Avatar Placeholder */}
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cian-electrico to-violeta-tech mx-auto mb-4 flex items-center justify-center text-4xl font-bold text-white">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  
                  <h3 className="font-['Exo'] text-xl font-bold text-white text-center mb-1">
                    {member.name}
                  </h3>
                  
                  <p className="text-cian-electrico text-sm font-medium text-center mb-4">
                    {member.role}
                  </p>
                  
                  <p className="text-slate-400 text-sm mb-4 flex-grow">
                    {member.bio}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {member.expertise.map((skill, i) => (
                      <span key={i} className="px-3 py-1 bg-violeta-tech/10 border border-violeta-tech/30 rounded-full text-xs text-violeta-tech">
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3 justify-center pt-4 border-t border-slate-800">
                    <a href={member.linkedin} className="text-slate-400 hover:text-cian-electrico transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                    <a href={member.twitter} className="text-slate-400 hover:text-cian-electrico transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      </svg>
                    </a>
                  </div>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisors */}
      <section className="relative py-20 px-6 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-['Exo'] text-3xl font-bold text-white mb-12 text-center">
            Consejo Asesor
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {advisors.map((advisor, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-magenta-futures/20 to-cian-electrico/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-xl p-6 hover:border-magenta-futures/50 transition-all text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-magenta-futures to-cian-electrico mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-white">
                    {advisor.name.split(' ')[1][0]}
                  </div>
                  <h3 className="font-['Exo'] text-lg font-bold text-white mb-1">
                    {advisor.name}
                  </h3>
                  <p className="text-magenta-futures text-sm font-medium mb-2">
                    {advisor.role}
                  </p>
                  <p className="text-slate-400 text-xs">
                    {advisor.org}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-['Exo'] text-3xl font-bold text-white mb-12 text-center">
            Nuestros Valores
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: '🎯',
                title: 'Excelencia',
                description: 'Nos comprometemos con la calidad en cada artículo, análisis y evento que producimos.'
              },
              {
                icon: '🤝',
                title: 'Colaboración',
                description: 'Creemos en el poder de las redes y el intercambio de conocimiento para impulsar el sector.'
              },
              {
                icon: '🌱',
                title: 'Innovación Responsable',
                description: 'Promovemos soluciones que equilibran progreso tecnológico con sostenibilidad.'
              },
              {
                icon: '💡',
                title: 'Transparencia',
                description: 'Basamos nuestro trabajo en datos verificables y fuentes confiables.'
              }
            ].map((value, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-cian-electrico/20 to-violeta-tech/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-xl p-6 hover:border-cian-electrico/50 transition-all">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="font-['Exo'] text-xl font-bold text-white mb-2">{value.title}</h3>
                  <p className="text-slate-400">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="relative py-20 px-6 border-t border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-['Exo'] text-3xl font-bold text-white mb-6">
            ¿Quieres Formar Parte del Equipo?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Siempre estamos buscando talento apasionado por transformar la movilidad y logística en LATAM.
          </p>
          <Link 
            href="/sobre/contacto"
            className="group relative inline-flex px-8 py-4 rounded-xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cian-electrico to-violeta-tech transition-transform group-hover:scale-105" />
            <span className="relative text-white font-semibold flex items-center gap-2">
              Contáctanos
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </span>
          </Link>
        </div>
      </section>

    </main>
  );
}