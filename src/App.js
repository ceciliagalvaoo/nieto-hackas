import React, { useState } from 'react';

const OnboardingApp = () => {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [selectedPath, setSelectedPath] = useState(null);
  const [pressedOption, setPressedOption] = useState(null);
  const [userName, setUserName] = useState("Maria Silva");
  const [countryCode, setCountryCode] = useState("+55");
  const [phoneNumber, setPhoneNumber] = useState("11 99999-8888");
  const [smsProtection, setSmsProtection] = useState(true);
  const [whatsappProtection, setWhatsappProtection] = useState(true);
  const [showStatusModal, setShowStatusModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [emergencyContacts, setEmergencyContacts] = useState([
    { id: 1, name: "Mary", relationship: "Daughter", phone: "+55 8888-99999" },
    { id: 2, name: "John", relationship: "Son", phone: "+55 6666-8888" }
  ]);
  const [newContact, setNewContact] = useState({ name: "", relationship: "", phone: "" });

  // URLs das imagens - ajustadas para seus arquivos
  const images = {
    nieto_phone: "/images/icone imagem 1.png",
    alert_face: "/images/icone imagem 2.png",
    elderly_couple: "/images/icone imagem 3.png",
    elder_couple_selection: "/images/icone imagem 4 - elder.png",
    responsible_boy: "/images/icone imagem 4 - resposible.png",
    safe_face: "/images/safe.png"
  };

  const countryCodes = [
    { code: "+55", country: "Brasil" },
    { code: "+1", country: "EUA/Canadá" },
    { code: "+44", country: "Reino Unido" },
    { code: "+34", country: "Espanha" },
    { code: "+33", country: "França" },
    { code: "+49", country: "Alemanha" },
    { code: "+39", country: "Itália" },
    { code: "+351", country: "Portugal" },
    { code: "+54", country: "Argentina" },
    { code: "+52", country: "México" }
  ];

  const mockNotifications = [
    { id: 1, type: "sms_blocked", message: "SMS suspeito bloqueado", description: "Uma mensagem com links desconhecidos foi barrada antes de chegar até você.", time: "2 min ago", severity: "low", color: "#5DA09F" },
    { id: 2, type: "phishing_attempt", message: "Tentativa de phishing no WhatsApp", description: "Uma mensagem falsa de banco tentou te enganar, mas foi bloqueada.", time: "1h ago", severity: "medium", color: "#E6A93E" },
    { id: 3, type: "high_risk_scam", message: "Golpe de alto risco evitado", description: "Um link fraudulento se passando pela sua operadora foi bloqueado.", time: "3h ago", severity: "high", color: "#E14513" },
    { id: 4, type: "new_scam_detected", message: "Novo golpe identificado", description: "Vários usuários relataram um golpe semelhante na sua região.", time: "5h ago", severity: "medium", color: "#E6A93E" },
    { id: 5, type: "all_clear", message: "Tudo limpo hoje!", description: "Nenhuma tentativa de golpe detectada nas últimas 24 horas.", time: "1 day ago", severity: "low", color: "#5DA09F" }
  ];

  const nextScreen = () => {
    if (currentScreen < 3) {
      setCurrentScreen(currentScreen + 1);
    } else if (selectedPath === 'elder' && currentScreen < 5) {
      setCurrentScreen(currentScreen + 1);
    }
  };

  const selectPath = (path) => {
    setPressedOption(path);
    setTimeout(() => {
      setSelectedPath(path);
      if (path === 'elder') {
        setCurrentScreen(4);
      } else {
        alert(`Usuário selecionou: ${path}`);
      }
      setPressedOption(null);
    }, 200);
  };

  const addEmergencyContact = () => {
    if (newContact.name && newContact.relationship && newContact.phone) {
      setEmergencyContacts([...emergencyContacts, { 
        id: Date.now(), 
        ...newContact 
      }]);
      setNewContact({ name: "", relationship: "", phone: "" });
      setShowContactModal(false);
    }
  };

  const removeEmergencyContact = (contactId) => {
    setEmergencyContacts(emergencyContacts.filter(contact => contact.id !== contactId));
  };

  const ProgressDots = () => (
    <div className="flex justify-center space-x-2 mb-6">
      {[0, 1, 2].map(index => (
        <div
          key={index}
          className={`w-2 h-2 rounded-full ${
            index === currentScreen ? 'bg-teal-600' : 'bg-gray-300'
          }`}
        />
      ))}
    </div>
  );

  // Tela 1: "Olá! Eu sou o Nieto"
  if (currentScreen === 0) {
    return (
      <div className="bg-white min-h-screen w-full max-w-md mx-auto">
        <div className="flex flex-col justify-between h-screen py-12">
          <div className="flex-1 px-6 text-center flex flex-col justify-center">
            <div className="mb-6 flex justify-center">
              <div className="w-96 h-96 flex items-center justify-center">
                <img 
                  src={images.nieto_phone} 
                  alt="Nieto com celular"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <div className="space-y-3">
              <h1 className="text-3xl font-bold text-red-500">
                Olá! Eu sou o Nieto
              </h1>
              
              <p className="text-base text-gray-700 leading-relaxed px-4">
                Estou aqui para proteger você contra golpes digitais. Comigo, usar o celular fica muito mais seguro e tranquilo.
              </p>
            </div>
          </div>

          <div className="px-6 pb-6">
            <button
              onClick={nextScreen}
              className="w-full text-white font-semibold py-4 rounded-full transition-colors duration-200 mb-4"
              style={{ backgroundColor: '#337289' }}
            >
              Next
            </button>
            <ProgressDots />
          </div>
        </div>
      </div>
    );
  }

  // Tela 2: "Sua rede de proteção"
  if (currentScreen === 1) {
    return (
      <div className="bg-white min-h-screen w-full max-w-md mx-auto">
        <div className="flex flex-col justify-between h-screen py-12">
          <div className="flex-1 px-6 text-center flex flex-col justify-center">
            <div className="mb-6 flex justify-center">
              <div className="w-96 h-96 flex items-center justify-center">
                <img 
                  src={images.alert_face} 
                  alt="Rosto preocupado com alerta"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <div className="space-y-3">
              <h1 className="text-3xl font-bold text-teal-600">
                Sua rede de proteção
              </h1>
              
              <p className="text-base text-gray-700 leading-relaxed px-4">
                Se for um golpe perigoso, eu aviso sua família automaticamente. Assim, você nunca estará sozinho!
              </p>
            </div>
          </div>

          <div className="px-6 pb-6">
            <button
              onClick={nextScreen}
              className="w-full text-white font-semibold py-4 rounded-full transition-colors duration-200 mb-4"
              style={{ backgroundColor: '#337289' }}
            >
              Start
            </button>
            <ProgressDots />
          </div>
        </div>
      </div>
    );
  }

  // Tela 3: "Como funciona"
  if (currentScreen === 2) {
    return (
      <div className="bg-white min-h-screen w-full max-w-md mx-auto">
        <div className="flex flex-col justify-between h-screen py-12">
          <div className="flex-1 px-6 text-center flex flex-col justify-center">
            <div className="mb-6 flex justify-center">
              <div className="w-96 h-96 flex items-center justify-center">
                <img 
                  src={images.elderly_couple} 
                  alt="Casal de idosos"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <div className="space-y-3">
              <h1 className="text-3xl font-bold text-orange-500">
                Como funciona
              </h1>
              
              <p className="text-base text-gray-700 leading-relaxed px-4">
                Eu leio suas mensagens e notificações. Quando encontro algo suspeito, aviso você com alertas simples e fáceis de entender.
              </p>
            </div>
          </div>

          <div className="px-6 pb-6">
            <button
              onClick={nextScreen}
              className="w-full text-white font-semibold py-4 rounded-full transition-colors duration-200 mb-4"
              style={{ backgroundColor: '#337289' }}
            >
              Next
            </button>
            <ProgressDots />
          </div>
        </div>
      </div>
    );
  }

  // Tela 4: Seleção Elder vs Responsible
  if (currentScreen === 3) {
    return (
      <div className="bg-white min-h-screen w-full max-w-md mx-auto">
        <div className="px-6 py-8 h-screen flex flex-col">
          <div className="text-center mb-6 pt-8">
            <h2 className="text-xl text-teal-700 font-bold mb-2">
              Who will do the configuration?
            </h2>
          </div>

          <div className="flex-1 space-y-8 flex flex-col justify-center">
            <div 
              onClick={() => selectPath('elder')}
              className={`cursor-pointer transition-all duration-200 ${
                pressedOption === 'elder' 
                  ? 'scale-95 opacity-80 bg-pink-50 rounded-3xl p-4' 
                  : 'hover:scale-105'
              }`}
            >
              <div className="w-full h-72 flex items-center justify-center mb-3">
                <img 
                  src={images.elder_couple_selection} 
                  alt="Casal de idosos - Elder"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold text-red-500 text-center mb-6">Elder</h3>
            </div>

            <div 
              onClick={() => selectPath('responsible')}
              className={`cursor-pointer transition-all duration-200 ${
                pressedOption === 'responsible' 
                  ? 'scale-95 opacity-80 bg-blue-50 rounded-3xl p-4' 
                  : 'hover:scale-105'
              }`}
            >
              <div className="w-full h-72 flex items-center justify-center mb-1">
                <img 
                  src={images.responsible_boy} 
                  alt="Menino responsável"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold text-teal-600 text-center">Responsible</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Tela 5: Elder - Cadastro de Nome e Telefone
  if (currentScreen === 4) {
    return (
      <div className="bg-white min-h-screen w-full max-w-md mx-auto">
        <div className="px-6 py-8 h-screen flex flex-col">
          <div className="flex-1 flex flex-col justify-center space-y-8">
            <div className="flex justify-center">
              <div className="w-64 h-64 flex items-center justify-center">
                <img 
                  src={images.elder_couple_selection} 
                  alt="Casal de idosos"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-center" style={{ color: '#C83B29' }}>
                  What is your name?
                </h2>
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="w-full px-4 py-3 border-2 rounded-full text-center text-lg"
                  style={{ borderColor: '#337289' }}
                />
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-center" style={{ color: '#C83B29' }}>
                  What is your number?
                </h2>
                <div className="space-y-3">
                  <select
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    className="w-full px-4 py-3 border-2 rounded-full text-center text-lg"
                    style={{ borderColor: '#337289' }}
                  >
                    {countryCodes.map((country) => (
                      <option key={country.code} value={country.code}>
                        {country.code} ({country.country})
                      </option>
                    ))}
                  </select>
                  <input
                    type="text"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full px-4 py-3 border-2 rounded-full text-center text-lg"
                    style={{ borderColor: '#337289' }}
                    placeholder="Digite seu número"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="pb-6">
            <button
              onClick={nextScreen}
              className="w-full text-white font-semibold py-4 rounded-full transition-colors duration-200"
              style={{ backgroundColor: '#337289' }}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Tela 6: Elder - Dashboard Principal
  if (currentScreen === 5) {
    return (
      <div className="min-h-screen w-full max-w-md mx-auto" style={{ backgroundColor: '#337289' }}>
        {/* Modal de Status */}
        {showStatusModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-3xl p-6 m-4 w-full max-w-sm max-h-96 overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Notifications</h2>
                <button onClick={() => setShowStatusModal(false)} className="text-2xl">×</button>
              </div>
              <div className="space-y-3">
                {mockNotifications.map((notification) => (
                  <div key={notification.id} className="p-4 rounded-lg border-l-4" style={{ 
                    borderLeftColor: notification.color,
                    backgroundColor: notification.color + '20'
                  }}>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-gray-800">{notification.message}</p>
                        <p className="text-xs text-gray-600 mt-1">{notification.description}</p>
                        <p className="text-xs text-gray-500 mt-2">{notification.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Modal de Contato de Emergência */}
        {showContactModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-3xl p-6 m-4 w-full max-w-sm">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Add Emergency Contact</h2>
                <button onClick={() => setShowContactModal(false)} className="text-2xl">×</button>
              </div>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  value={newContact.name}
                  onChange={(e) => setNewContact({...newContact, name: e.target.value})}
                  className="w-full px-3 py-2 border rounded-full"
                />
                <input
                  type="text"
                  placeholder="Relationship (e.g., Son, Daughter)"
                  value={newContact.relationship}
                  onChange={(e) => setNewContact({...newContact, relationship: e.target.value})}
                  className="w-full px-3 py-2 border rounded-full"
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  value={newContact.phone}
                  onChange={(e) => setNewContact({...newContact, phone: e.target.value})}
                  className="w-full px-3 py-2 border rounded-full"
                />
                <button 
                  onClick={addEmergencyContact}
                  className="w-full py-3 text-white rounded-full font-semibold"
                  style={{ backgroundColor: '#337289' }}
                >
                  Add Contact
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="px-6 py-8">
          <div className="text-center mb-8">
            <div className="mb-6 flex justify-center">
              <div className="w-32 h-32 flex items-center justify-center">
                <img 
                  src={images.safe_face} 
                  alt="Nieto feliz - seguro"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">
              You are safe
            </h1>
          </div>
        </div>

        <div className="bg-white rounded-t-3xl px-6 py-6 min-h-96 overflow-y-auto">
          <div className="space-y-6">
            {/* Notifications Section */}
            <div 
              className="bg-white rounded-2xl p-4 shadow-sm border cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => setShowStatusModal(true)}
            >
              <h3 className="text-lg font-bold text-center mb-4 text-gray-600">Notifications</h3>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-gray-800">Scam Avoided</h4>
                  <p className="text-sm text-gray-500">How many times Nieto helped you?</p>
                </div>
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor: '#337289' }}>
                  5
                </div>
              </div>
            </div>

            {/* Security Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-center text-gray-600">Security</h3>
              
              <div className="flex items-center justify-between py-3">
                <div>
                  <h4 className="font-semibold text-gray-800">SMS Protection</h4>
                  <p className="text-sm text-gray-500">We will check if the sms is a possible scam</p>
                </div>
                <button
                  onClick={() => setSmsProtection(!smsProtection)}
                  className={`w-12 h-6 rounded-full flex items-center transition-colors duration-200 ${
                    smsProtection ? 'justify-end' : 'justify-start'
                  }`}
                  style={{ backgroundColor: smsProtection ? '#337289' : '#ccc' }}
                >
                  <div className="w-5 h-5 bg-white rounded-full transform transition-transform"></div>
                </button>
              </div>

              <div className="flex items-center justify-between py-3">
                <div>
                  <h4 className="font-semibold text-gray-800">WhatsApp Protection</h4>
                  <p className="text-sm text-gray-500">We will check your notifications</p>
                </div>
                <button
                  onClick={() => setWhatsappProtection(!whatsappProtection)}
                  className={`w-12 h-6 rounded-full flex items-center transition-colors duration-200 ${
                    whatsappProtection ? 'justify-end' : 'justify-start'
                  }`}
                  style={{ backgroundColor: whatsappProtection ? '#337289' : '#ccc' }}
                >
                  <div className="w-5 h-5 bg-white rounded-full transform transition-transform"></div>
                </button>
              </div>
            </div>

            {/* Emergency Contact Section */}
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-2">
                <h3 className="text-lg font-bold text-gray-600">Emergency Contact</h3>
                <button 
                  onClick={() => setShowContactModal(true)}
                  className="w-6 h-6 rounded-full flex items-center justify-center text-white font-bold"
                  style={{ backgroundColor: '#337289', fontSize: '14px', lineHeight: '1' }}
                >
                  +
                </button>
              </div>
              <div className="space-y-2">
                {emergencyContacts.map((contact) => (
                  <div key={contact.id} className="flex items-center justify-between text-sm text-gray-600 bg-gray-50 rounded-lg p-3">
                    <div className="text-center flex-1">
                      <p>{contact.name} ({contact.relationship}) - {contact.phone}</p>
                    </div>
                    <button 
                      onClick={() => removeEmergencyContact(contact.id)}
                      className="ml-2 w-6 h-6 flex items-center justify-center text-red-500 hover:bg-red-100 rounded-full transition-colors text-xs"
                      title="Remove contact"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Privacy Section */}
            <div className="space-y-2 pb-8">
              <h3 className="text-lg font-bold text-center text-gray-600">Privacy</h3>
              <p className="text-xs text-gray-600 text-center leading-relaxed">
                At NIETO, your privacy comes first: all messages are analyzed only on your device and never leave the app.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen w-full max-w-md mx-auto flex items-center justify-center">
      <p>Tela não encontrada</p>
    </div>
  );
};

export default OnboardingApp;