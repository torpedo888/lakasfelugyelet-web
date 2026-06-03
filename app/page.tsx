import { motion } from "framer-motion";

export default function Lakasfelugyelet() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 p-6 space-y-10 max-w-6xl mx-auto">
      <motion.h1
        className="text-4xl font-bold text-center text-blue-700"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Lakásfelügyelet – Biztonság és Nyugalom
      </motion.h1>

      <p className="text-center text-lg text-gray-700">
        Professzionális lakásfelügyelet szolgáltatás, hogy Ön nyugodtan
        élvezhesse az utazást vagy a mindennapokat.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-5 border-t-4 border-blue-500 hover:scale-105 transition">
          <h2 className="text-xl font-semibold mb-2 text-blue-600">
            Rendszeres ellenőrzés
          </h2>
          <p className="text-gray-600">
            Lakása állapotának rendszeres ellenőrzése, szellőztetés, postaláda
            ürités, víz és elektromos rendszerek felügyelete.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-5 border-t-4 border-green-500 hover:scale-105 transition">
          <h2 className="text-xl font-semibold mb-2 text-green-600">
            Riasztás és biztonság
          </h2>
          <p className="text-gray-600">
            Gyors reakció riasztás esetén, együttműködés biztonsági cégekkel.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-5 border-t-4 border-yellow-500 hover:scale-105 transition">
          <h2 className="text-xl font-semibold mb-2 text-yellow-600">
            Karbantartás
          </h2>
          <p className="text-gray-600">
            Apróbb javítások és karbantartások intézése szakemberekkel.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-r from-blue-100 to-blue-50 rounded-xl shadow p-6">
          <h2 className="text-2xl font-semibold mb-3 text-blue-700">
            Miért minket válasszon?
          </h2>
          <ul className="list-disc ml-6 space-y-1 text-gray-700">
            <li>Megbízható szolgáltatás</li>
            <li>Gyors reagálás</li>
            <li>Tapasztalt csapat</li>
            <li>Rugalmas csomagok</li>
          </ul>
        </div>

        <div className="bg-gradient-to-r from-green-100 to-green-50 rounded-xl shadow p-6">
          <h2 className="text-2xl font-semibold mb-3 text-green-700">
            Kapcsolat
          </h2>
          <p className="text-gray-700">Email: info@lakasfelugyelet.hu</p>
          <p className="text-gray-700">Telefon: +36 30 123 4567</p>
          <button className="mt-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition">
            Ajánlatkérés
          </button>
        </div>
      </div>

      <footer className="text-center text-sm text-gray-500 mt-10">
        © 2026 Lakásfelügyelet. Minden jog fenntartva.
      </footer>
    </div>
  );
}
