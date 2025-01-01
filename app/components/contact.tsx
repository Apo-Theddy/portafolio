import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, ArrowRight, CheckCircle2 } from 'lucide-react';

interface Contact {
  name: string;
  email: string;
  message: string;
}

const ContactSection = () => {
  const [formData, setFormData] = useState<Contact>({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    console.log('Form submitted:', formData);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "apotheddy@hotmail.com",
      href: "mailto:apotheddy@hotmail.com",
      bgColor: "bg-blue-50",
      hoverBg: "group-hover:bg-blue-100",
      iconColor: "text-blue-600",
      borderColor: "border-blue-100",
      hoverBorderColor: "group-hover:border-blue-200"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Teléfono",
      value: "+51 960 710 852",
      href: "tel:+51960710852",
      bgColor: "bg-green-50",
      hoverBg: "group-hover:bg-green-100",
      iconColor: "text-green-600",
      borderColor: "border-green-100",
      hoverBorderColor: "group-hover:border-green-200"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Ubicación",
      value: "Lima, Perú",
      bgColor: "bg-violet-50",
      hoverBg: "group-hover:bg-violet-100",
      iconColor: "text-violet-600",
      borderColor: "border-violet-100",
      hoverBorderColor: "group-hover:border-violet-200"
    }
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-white to-gray-50 px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 sm:mb-24">
          <span className="inline-block text-blue-600 font-medium mb-4">Contacto</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-violet-900 bg-clip-text text-transparent mb-6">
            Hablemos de tu proyecto
          </h2>
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="h-1 w-12 rounded-full bg-blue-600"></div>
            <div className="h-1 w-1 rounded-full bg-violet-600 animate-pulse"></div>
            <div className="h-1 w-12 rounded-full bg-violet-600"></div>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg sm:text-xl">
            Estoy aquí para convertir tus ideas en realidad. ¡Conversemos y hagamos algo grandioso juntos!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-2 space-y-6 order-2 lg:order-1">
            <div className="bg-white backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-gray-100 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-8 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Información de Contacto
                </h3>

                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    item.href ? (
                      <a
                        key={index}
                        href={item.href}
                        className="group flex items-center p-4 rounded-2xl hover:bg-gray-50 border border-transparent hover:border-gray-100 transition-all duration-300"
                      >
                        <div className={`flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-2xl ${item.bgColor} ${item.hoverBg} border ${item.borderColor} ${item.hoverBorderColor} transition-colors`}>
                          <div className={`${item.iconColor} transform group-hover:scale-110 transition-transform`}>{item.icon}</div>
                        </div>
                        <div className="ml-4 flex-grow">
                          <p className="text-sm font-medium text-gray-500">{item.label}</p>
                          <p className="text-gray-900 font-semibold">{item.value}</p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-gray-400 transform group-hover:translate-x-1 transition-transform" />
                      </a>
                    ) : (
                      <div
                        key={index}
                        className="flex items-center p-4 rounded-2xl border border-transparent"
                      >
                        <div className={`flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-2xl ${item.bgColor} border ${item.borderColor}`}>
                          <div className={item.iconColor}>{item.icon}</div>
                        </div>
                        <div className="ml-4">
                          <p className="text-sm font-medium text-gray-500">{item.label}</p>
                          <p className="text-gray-900 font-semibold">{item.value}</p>
                        </div>
                      </div>
                    )
                  ))}
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-violet-50 rounded-bl-[100px] -z-10 opacity-80"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-violet-50 to-blue-50 rounded-tr-[100px] -z-10 opacity-80"></div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="lg:col-span-3 bg-white backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-gray-100 relative overflow-hidden order-1 lg:order-2"
          >
            <div className="relative z-10 space-y-8">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="relative group">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="peer w-full px-4 py-3 rounded-xl border-2 border-gray-100 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all"
                    placeholder="Tu nombre"
                    required
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-4 -top-2.5 bg-white px-2 text-sm text-gray-500 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600 transition-all duration-300"
                  >
                    Nombre
                  </label>
                </div>

                <div className="relative group">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="peer w-full px-4 py-3 rounded-xl border-2 border-gray-100 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all"
                    placeholder="tu@correo.com"
                    required
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-4 -top-2.5 bg-white px-2 text-sm text-gray-500 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600 transition-all duration-300"
                  >
                    Email
                  </label>
                </div>
              </div>

              <div className="relative group">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="peer w-full px-4 py-3 rounded-xl border-2 border-gray-100 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all resize-none"
                  placeholder="Tu mensaje"
                  required
                />
                <label
                  htmlFor="message"
                  className="absolute left-4 -top-2.5 bg-white px-2 text-sm text-gray-500 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600 transition-all duration-300"
                >
                  Mensaje
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitted}
                className={`w-full py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 group text-lg font-medium
                  ${isSubmitted
                    ? 'bg-green-500 hover:bg-green-600'
                    : 'bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700'
                  } text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5`}
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle2 className="w-6 h-6 animate-bounce" />
                    <span>¡Mensaje Enviado!</span>
                  </>
                ) : (
                  <>
                    <span>Enviar Mensaje</span>
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-violet-50 to-blue-50 rounded-bl-[120px] -z-10 opacity-80"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-blue-50 to-violet-50 rounded-tr-[120px] -z-10 opacity-80"></div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
