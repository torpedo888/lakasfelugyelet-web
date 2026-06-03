"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Lakasfelugyelet() {
  return (
    <div className="p-6 space-y-8 max-w-6xl mx-auto">
      <motion.h1
        className="text-4xl font-bold text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Lakásfelügyelet – Biztonság és Nyugalom
      </motion.h1>

      <p className="text-center text-lg">
        Professzionális lakásfelügyelet szolgáltatás, hogy Ön nyugodtan
        élvezhesse az utazást vagy a mindennapokat.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">
              Rendszeres ellenőrzés
            </h2>
            <p>
              Lakása állapotának rendszeres ellenőrzése, szellőztetés, postaláda
              ürités, víz és elektromos rendszerek felügyelete.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">
              Riasztás és biztonság
            </h2>
            <p>
              Gyors reakció riasztás esetén, együttműködés biztonsági cégekkel.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">Karbantartás</h2>
            <p>Apróbb javítások és karbantartások intézése szakemberekkel.</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardContent className="p-4">
            <h2 className="text-2xl font-semibold mb-2">
              Miért minket válasszon?
            </h2>
            <ul className="list-disc ml-6 space-y-1">
              <li>Megbízható szolgáltatás</li>
              <li>Gyors reagálás</li>
              <li>Tapasztalt csapat</li>
              <li>Rugalmas csomagok</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h2 className="text-2xl font-semibold mb-2">Kapcsolat</h2>
            <p>Email: info@lakasfelugyelet.hu</p>
            <p>Telefon: +36 30 123 4567</p>
            <Button className="mt-4">Ajánlatkérés</Button>
          </CardContent>
        </Card>
      </div>

      <footer className="text-center text-sm text-gray-500 mt-8">
        © 2026 Lakásfelügyelet. Minden jog fenntartva.
      </footer>
    </div>
  );
}
