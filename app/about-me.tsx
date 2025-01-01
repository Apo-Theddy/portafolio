import { Figtree } from "next/font/google";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});

export default function AboutMe() {
  return (
    <div className={`${figtree.className} bg-white relative overflow-hidden`}>
      <div className="absolute top-20 right-0 w-72 h-72 bg-blue-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-40 right-40 w-72 h-72 bg-violet-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 text-transparent bg-clip-text inline-block transform hover:scale-105 transition-transform duration-300">
            Sobre Mí
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="flex flex-col space-y-8 relative">
            <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-600 to-violet-600 rounded-full"></div>

            <div className="pl-8">
              <span className="text-sm font-semibold text-blue-600 tracking-wider uppercase mb-4 block">
                Desarrollador & Estudiante
              </span>
              <h3 className="text-5xl lg:text-7xl font-bold text-gray-800 leading-tight">
                Juan Jesus
                <span className="block mt-2 text-4xl lg:text-6xl bg-gradient-to-r from-blue-600 to-violet-600 text-transparent bg-clip-text">
                  Esquives Zapata
                </span>
              </h3>
            </div>

            <div className="pl-8 flex items-center gap-4">
              <div className="flex flex-col gap-1">
                <span className="w-8 h-1 bg-blue-600 rounded-full"></span>
                <span className="w-4 h-1 bg-violet-600 rounded-full"></span>
              </div>
              <p className="text-sm uppercase tracking-wider text-gray-600 font-medium">
                Ingeniero de Sistemas en formación
              </p>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-violet-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
            <div className="relative bg-white rounded-2xl p-8 lg:p-10 shadow-xl hover:shadow-2xl transition duration-300">
              <div className="absolute top-4 right-4">
                <div className="w-2 h-2 rounded-full bg-blue-600 mb-1"></div>
                <div className="w-2 h-2 rounded-full bg-violet-600"></div>
              </div>

              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                Como estudiante de séptimo ciclo de Ingeniería de Sistemas en la Universidad César Vallejo,
                he desarrollado una perspectiva única que combina creatividad con pensamiento analítico.
                Mi enfoque se centra en la innovación y la resolución efectiva de problemas, siempre
                buscando formas de transformar desafíos en oportunidades.
              </p>

              <p className="mt-6 text-lg lg:text-xl text-gray-700 leading-relaxed">
                Me destaco por mi capacidad de adaptación y mi compromiso con el aprendizaje continuo,
                cualidades que considero fundamentales en el dinámico mundo actual.
              </p>

              <div className="mt-8 flex items-center justify-end gap-2">
                <div className="h-1 w-8 bg-violet-600 rounded-full"></div>
                <div className="h-1 w-4 bg-blue-600 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
