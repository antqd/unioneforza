import React, { useState } from 'react';
import { HandHeart, Users, Heart, Zap, CreditCard } from 'lucide-react';

const UnioneForza = () => {
  const [donationAmount, setDonationAmount] = useState('');
  const [selectedAmount, setSelectedAmount] = useState(null);

  const handleDonationSubmit = (e) => {
    e.preventDefault();
    alert(`Grazie per la tua donazione a UNIONE È FORZA di €${donationAmount || selectedAmount}!`);
  };

  const predefinedAmounts = [25, 50, 100, 250];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-teal-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <img
                src="/images/logo.png"
                alt="UNIONE È FORZA"
                className="h-10 w-auto"
              />
              <div className="leading-tight">
                <span className="text-xl font-bold text-gray-900">UNIONE È FORZA</span>
                <span className="text-xs text-gray-600 block">Inclusione • Accessibilità • Comunità</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-amber-600 transition-colors">Home</a>
              <a href="#chi-siamo" className="text-gray-700 hover:text-teal-600 transition-colors">Chi siamo</a>
              <a href="#contatti" className="text-gray-700 hover:text-blue-600 transition-colors">Contatti</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-10">
            <img
              src="/images/logo.png"
              alt="UNIONE È FORZA"
              className="mx-auto w-64 max-w-full"
            />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="text-gray-900">Sostieni l'</span>
            <span className="text-amber-600">Inclusione.</span>
            <br />
            <span className="text-gray-900">Costruiamo un </span>
            <span className="text-blue-600">Futuro Accessibile</span>
            <span className="text-gray-900"> per tutti.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto mb-10">
            Sosteniamo persone con disabilità con tecnologie assistive, servizi di supporto
            e iniziative di integrazione sociale. Il tuo contributo abbatte barriere e crea opportunità reali.
          </p>

          <a
            href="#donazioni"
            className="inline-block bg-gradient-to-r from-amber-500 via-teal-500 to-blue-600 hover:from-amber-600 hover:via-teal-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-transform duration-300 hover:scale-105 shadow-lg"
          >
            Scopri i Progetti →
          </a>
        </div>
      </section>

      {/* Ambiti d'impatto */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Inclusione, Accessibilità, Innovazione
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Interventi concreti per autonomia, benessere e piena partecipazione alla vita sociale.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-amber-50 to-white p-7 rounded-2xl border hover:shadow-lg transition">
              <div className="w-14 h-14 rounded-xl bg-amber-500 flex items-center justify-center mb-5">
                <HandHeart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Supporto alla Disabilità</h3>
              <p className="text-gray-700">
                Servizi personalizzati per autonomia quotidiana, accompagnamento e tutoraggio.
              </p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-white p-7 rounded-2xl border hover:shadow-lg transition">
              <div className="w-14 h-14 rounded-xl bg-teal-500 flex items-center justify-center mb-5">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Inclusione Sociale</h3>
              <p className="text-gray-700">
                Reti di comunità, sport inclusivo, formazione e inserimento lavorativo.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-white p-7 rounded-2xl border hover:shadow-lg transition">
              <div className="w-14 h-14 rounded-xl bg-pink-500 flex items-center justify-center mb-5">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Benessere & Cura</h3>
              <p className="text-gray-700">
                Riabilitazione, supporto psicologico e programmi di salute accessibili.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-7 rounded-2xl border hover:shadow-lg transition">
              <div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center mb-5">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Tecnologie Assistive</h3>
              <p className="text-gray-700">
                Ausili digitali, accessibilità web/app e dispositivi per l’indipendenza.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Donazioni */}
      <section id="donazioni" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 via-teal-50 to-blue-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-amber-500 via-teal-500 to-blue-600 p-8 text-white text-center">
              <CreditCard className="w-16 h-16 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-2">Fai una Donazione</h2>
              <p className="text-white/90 text-lg">
                Ogni euro sostiene progetti inclusivi e accessibili di UNIONE È FORZA
              </p>
            </div>

            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Seleziona un importo</h3>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {predefinedAmounts.map((amount) => (
                      <button
                        key={amount}
                        onClick={() => { setSelectedAmount(amount); setDonationAmount(''); }}
                        className={`p-4 rounded-xl border-2 transition font-semibold ${
                          selectedAmount === amount
                            ? 'border-teal-600 bg-teal-50 text-teal-700'
                            : 'border-gray-200 hover:border-gray-300 text-gray-800'
                        }`}
                      >
                        €{amount}
                      </button>
                    ))}
                  </div>

                  <label className="block text-sm font-semibold text-gray-800 mb-2">
                    Oppure inserisci un importo personalizzato
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">€</span>
                    <input
                      type="number"
                      value={donationAmount}
                      onChange={(e) => { setDonationAmount(e.target.value); setSelectedAmount(null); }}
                      placeholder="0"
                      min="1"
                      className="w-full pl-8 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:outline-none"
                      aria-label="Importo donazione"
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Il tuo impatto</h3>
                  <ul className="space-y-3 text-sm text-gray-700">
                    <li className="flex gap-3">
                      <div className="w-2 h-2 rounded-full bg-amber-500 mt-2" />
                      <p><strong>€25</strong> — 1 ora di assistenza personalizzata</p>
                    </li>
                    <li className="flex gap-3">
                      <div className="w-2 h-2 rounded-full bg-teal-500 mt-2" />
                      <p><strong>€50</strong> — Sviluppo di funzionalità accessibili</p>
                    </li>
                    <li className="flex gap-3">
                      <div className="w-2 h-2 rounded-full bg-pink-500 mt-2" />
                      <p><strong>€100</strong> — Acquisto di ausili/tecnologie assistive</p>
                    </li>
                    <li className="flex gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-600 mt-2" />
                      <p><strong>€250</strong> — Sostiene un progetto completo</p>
                    </li>
                  </ul>

                  <div className="mt-6 p-4 rounded-xl bg-amber-50 border border-amber-200">
                    <p className="text-sm text-amber-900">
                      <strong>UNIONE È FORZA.</strong> Ogni donazione contribuisce a rimuovere barriere e creare opportunità.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <button
                  onClick={handleDonationSubmit}
                  disabled={!donationAmount && !selectedAmount}
                  className="bg-gradient-to-r from-amber-500 via-teal-500 to-blue-600 hover:from-amber-600 hover:via-teal-600 hover:to-blue-700 text-white px-10 py-4 rounded-xl text-lg font-semibold transition-transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  Dona €{donationAmount || selectedAmount || '0'} ora
                </button>
                <p className="text-xs text-gray-500 mt-3">
                  Pagamenti sicuri e crittografati. Riceverai una ricevuta via email.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <img
            src="/images/logo.png"
            alt="UNIONE È FORZA"
            className="mx-auto w-16 h-auto mb-4"
          />
          <p className="font-semibold">UNIONE È FORZA</p>
          <p className="text-gray-400 text-sm mt-1">Inclusione e Accessibilità per tutti</p>
          <div className="mt-8 pt-6 border-t border-white/10">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} UNIONE È FORZA — Tutti i diritti riservati.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default UnioneForza;
