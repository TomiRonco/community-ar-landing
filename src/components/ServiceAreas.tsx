import { APP_CONFIG } from '@/config/constants';

export default function ServiceAreas() {
  return (
    <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-primary-light-pink/20">
      <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">
        🌍 Áreas de Servicio
      </h3>
      <div className="text-center space-y-2">
        <p className="text-sm text-gray-600 mb-3">
          Brindamos servicios de <strong>Community Management</strong> y <strong>Desarrollo Web</strong> en:
        </p>
        <div className="grid grid-cols-2 gap-2 text-sm">
          {APP_CONFIG.company.serviceArea.map((area, index) => (
            <div 
              key={index}
              className="bg-gradient-to-r from-primary-blue/10 to-primary-pink/10 rounded-lg px-3 py-2"
            >
              📍 {area}
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-500 mt-3">
          <strong>Consultas gratuitas</strong> disponibles en toda la región
        </p>
      </div>
    </div>
  );
}